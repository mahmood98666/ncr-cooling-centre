Add-Type -AssemblyName System.Drawing

$p = "c:\Users\Mahmood\Desktop\999\ncr-cooling-centre\public\images\google-profile-card-exact.png"
$bmp = [System.Drawing.Bitmap]::FromFile($p)

for ($y = 535; $y -le 570; $y++) {
    $nonWhite = 0
    for ($x = 20; $x -lt $bmp.Width; $x++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -lt 245 -or $c.G -lt 245 -or $c.B -lt 245) {
            $nonWhite++
        }
    }
    Write-Host "y=$y nonWhite=$nonWhite"
}

$bmp.Dispose()
