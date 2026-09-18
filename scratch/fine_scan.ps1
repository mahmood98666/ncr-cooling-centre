Add-Type -AssemblyName System.Drawing

$p = "c:\Users\Mahmood\Desktop\999\ncr-cooling-centre\public\images\google-profile-card-exact.png"
$bmp = [System.Drawing.Bitmap]::FromFile($p)

for ($y = 380; $y -lt 550; $y += 2) {
    $blueX = @()
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.B -gt 170 -and $c.R -lt 120 -and $c.G -gt 70) {
            $blueX += $x
        }
    }
    if ($blueX.Count -gt 3) {
        $minX = ($blueX | Measure-Object -Minimum).Minimum
        $maxX = ($blueX | Measure-Object -Maximum).Maximum
        Write-Host "y=$y count=$($blueX.Count) minX=$minX maxX=$maxX"
    }
}

$bmp.Dispose()
