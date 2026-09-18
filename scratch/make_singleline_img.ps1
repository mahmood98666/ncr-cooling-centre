Add-Type -AssemblyName System.Drawing

$srcPath = "c:\Users\Mahmood\Desktop\999\ncr-cooling-centre\public\images\google-profile-card-exact.png"
$src = [System.Drawing.Bitmap]::FromFile($srcPath)

# We want to remove the old 2 rows of buttons:
# y = 415 to y = 538 is the old button area (height = 124px).
# If we have 1 row of buttons, we only need ~54px for the button row (e.g. from y=415 to y=470).
# That saves (539 - 470) = 69px of vertical height!

$cutStart = 470
$cutEnd = 539
$cutHeight = $cutEnd - $cutStart

$newHeight = $src.Height - $cutHeight
$newBmp = New-Object System.Drawing.Bitmap($src.Width, $newHeight)
$g = [System.Drawing.Graphics]::FromImage($newBmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

# Draw top part (0 to 415)
$rectTop = New-Object System.Drawing.Rectangle(0, 0, $src.Width, 415)
$g.DrawImage($src, $rectTop, $rectTop, [System.Drawing.GraphicsUnit]::Pixel)

# Fill 415 to 470 with pure white
$rectMid = New-Object System.Drawing.Rectangle(0, 415, $src.Width, 55)
$brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$g.FillRectangle($brush, $rectMid)

# Draw bottom part (539 to end) shifted up by cutHeight
$srcBottomRect = New-Object System.Drawing.Rectangle(0, 539, $src.Width, ($src.Height - 539))
$destBottomRect = New-Object System.Drawing.Rectangle(0, 470, $src.Width, ($src.Height - 539))
$g.DrawImage($src, $destBottomRect, $srcBottomRect, [System.Drawing.GraphicsUnit]::Pixel)

$destPath = "c:\Users\Mahmood\Desktop\999\ncr-cooling-centre\public\images\google-profile-card-singleline.png"
$newBmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)

Write-Host "Old Height: $($src.Height), New Height: $newHeight"
Write-Host "Saved to $destPath"

$g.Dispose()
$newBmp.Dispose()
$src.Dispose()
