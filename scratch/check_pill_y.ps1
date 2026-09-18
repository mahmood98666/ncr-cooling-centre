Add-Type -AssemblyName System.Drawing

$p = "c:\Users\Mahmood\Desktop\999\ncr-cooling-centre\public\images\google-profile-card-exact.png"
$bmp = [System.Drawing.Bitmap]::FromFile($p)

# Find top and bottom border of pill at x=100
for ($y = 410; $y -le 465; $y++) {
    $c = $bmp.GetPixel(100, $y)
    if ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240) {
        Write-Host "Pill border pixel at y=$y R=$($c.R)"
    }
}

$bmp.Dispose()
