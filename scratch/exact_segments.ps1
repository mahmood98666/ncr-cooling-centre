Add-Type -AssemblyName System.Drawing

$p = "c:\Users\Mahmood\Desktop\999\ncr-cooling-centre\public\images\google-profile-card-exact.png"
$bmp = [System.Drawing.Bitmap]::FromFile($p)

# Let's check row y=440 across X from 20 to 560
$segments = @()
$inBtn = $false
$start = 0

for ($x = 20; $x -le 560; $x++) {
    $hasPixel = $false
    for ($y = 422; $y -le 460; $y++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -lt 245 -or $c.G -lt 245 -or $c.B -lt 245) {
            $hasPixel = $true
            break
        }
    }
    if ($hasPixel -and -not $inBtn) {
        $inBtn = $true
        $start = $x
    } elseif (-not $hasPixel -and $inBtn) {
        $inBtn = $false
        $segments += [PSCustomObject]@{ Start = $start; End = $x - 1; Width = ($x - $start) }
    }
}

Write-Host "Row 1 Buttons:"
$segments | Format-Table

# Let's check Row 2 (Call button around y=490..530)
$callSegments = @()
$inBtn = $false
for ($x = 150; $x -le 450; $x++) {
    $hasPixel = $false
    for ($y = 485; $y -le 530; $y++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.R -lt 245 -or $c.G -lt 245 -or $c.B -lt 245) {
            $hasPixel = $true
            break
        }
    }
    if ($hasPixel -and -not $inBtn) {
        $inBtn = $true
        $start = $x
    } elseif (-not $hasPixel -and $inBtn) {
        $inBtn = $false
        $callSegments += [PSCustomObject]@{ Start = $start; End = $x - 1; Width = ($x - $start) }
    }
}

Write-Host "Row 2 (Call Button):"
$callSegments | Format-Table

$bmp.Dispose()
