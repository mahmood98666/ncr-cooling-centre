Add-Type -AssemblyName System.Drawing

$p = "c:\Users\Mahmood\Desktop\999\ncr-cooling-centre\public\images\google-profile-card-exact.png"
$bmp = [System.Drawing.Bitmap]::FromFile($p)

$minY = 9999
$maxY = 0

for ($y = 470; $y -le 540; $y++) {
    for ($x = 248; $x -le 338; $x++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240) {
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

Write-Host "Call Button: Top=$minY Bottom=$maxY Height=$($maxY - $minY)"

$bmp.Dispose()
