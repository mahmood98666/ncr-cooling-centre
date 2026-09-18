Add-Type -AssemblyName System.Drawing

$p = "c:\Users\Mahmood\Desktop\999\ncr-cooling-centre\public\images\google-profile-card-exact.png"
$bmp = [System.Drawing.Bitmap]::FromFile($p)

Write-Host "Width: $($bmp.Width), Height: $($bmp.Height)"

# Scan Y from 200 to 600 to find blue button pixels
for ($y = 200; $y -lt 650; $y += 5) {
    $blueCount = 0
    for ($x = 0; $x -lt $bmp.Width; $x += 2) {
        $c = $bmp.GetPixel($x, $y)
        # Check for Google Maps blue: R < 80, G in 90..180, B > 200
        if ($c.B -gt 180 -and $c.R -lt 100 -and $c.G -gt 80) {
            $blueCount++
        }
    }
    if ($blueCount -gt 5) {
        Write-Host "y=$y blueCount=$blueCount"
    }
}

$bmp.Dispose()
