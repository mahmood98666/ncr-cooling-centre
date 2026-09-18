Add-Type -AssemblyName System.Drawing

$img1Path = "C:/Users/Mahmood/.gemini/antigravity/brain/a195faf7-27f9-47c1-ae52-60631321f1a1/.user_uploaded/media_1789635066231.png"
$img2Path = "C:/Users/Mahmood/.gemini/antigravity/brain/a195faf7-27f9-47c1-ae52-60631321f1a1/.user_uploaded/media_1789635076700.png"
$img0Path = "C:/Users/Mahmood/.gemini/antigravity/brain/a195faf7-27f9-47c1-ae52-60631321f1a1/.user_uploaded/media_1789635037878.png"

$destDir = "c:/Users/Mahmood/Desktop/999/ncr-cooling-centre/public/images/real"
if (!(Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force
}

function Crop-Image($sourcePath, $x, $y, $w, $h, $outputPath) {
    $src = [System.Drawing.Bitmap]::FromFile($sourcePath)
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $dest = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($dest)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($src, (New-Object System.Drawing.Rectangle(0, 0, $w, $h)), $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $src.Dispose()
    $dest.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $dest.Dispose()
    Write-Output "Saved $outputPath"
}

# 1. From img1: Pressure gauge (Gas filling)
Crop-Image $img1Path 304 288 275 395 "$destDir/ac-gas-filling-gauge.jpg"

# 2. From img1: Outdoor AC unit (VISE)
Crop-Image $img1Path 23 526 275 228 "$destDir/ac-outdoor-unit.jpg"

# 3. From img1: Outdoor AC condenser
Crop-Image $img1Path 23 764 275 130 "$destDir/ac-condenser-service.jpg"

# 4. From img2: Geyser (Bajaj)
Crop-Image $img2Path 268 112 237 388 "$destDir/geyser-repair.jpg"

# 5. From img2: Washing Machine (LG)
Crop-Image $img2Path 24 508 237 330 "$destDir/washing-machine-service.jpg"

# 6. From img2: Technician repairing AC PCB
Crop-Image $img2Path 268 580 237 310 "$destDir/technician-repairing-ac.jpg"

# 7. From img2: Samsung outdoor AC unit
Crop-Image $img2Path 24 104 237 235 "$destDir/samsung-ac-outdoor.jpg"

# 8. From img0: NCR Cooling Centre banner grid
Crop-Image $img0Path 30 183 388 310 "$destDir/ncr-cooling-centre-banner.jpg"

Write-Output "All 8 real photos restored successfully!"
