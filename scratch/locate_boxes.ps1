Add-Type -AssemblyName System.Drawing

$p = "c:\Users\Mahmood\Desktop\999\ncr-cooling-centre\public\images\google-profile-card-exact.png"
$bmp = [System.Drawing.Bitmap]::FromFile($p)

# Let's inspect the grey border of the pill buttons
# The pill buttons typically have a light grey border, e.g. RGB around 215..230
Write-Host "Scanning Row 1 (y=410..470)..."

for ($x = 20; $x -lt 550; $x += 10) {
    # Check if there is a border at y=420 or y=460
    $isBorder = $false
    for ($y = 415; $y -le 465; $y++) {
        $c = $bmp.GetPixel($x, $y)
        # Check for non-white pixel
        if ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240) {
            $isBorder = $true
            break
        }
    }
    if ($isBorder) {
        Write-Host "x=$x has content"
    }
}

$bmp.Dispose()
