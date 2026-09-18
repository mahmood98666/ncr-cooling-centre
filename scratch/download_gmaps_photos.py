import os
import re
import time
import requests
from playwright.sync_api import sync_playwright

dest_dir = r"c:\Users\Mahmood\Desktop\999\ncr-cooling-centre\public\images\real"
os.makedirs(dest_dir, exist_ok=True)

search_url = "https://www.google.com/maps/search/NCR+Cooling+Centre+Gurgaon"

print("Starting browser...", flush=True)
with sync_playwright() as p:
    browser = p.chromium.launch(channel="msedge", headless=True)
    context = browser.new_context(
        viewport={"width": 1400, "height": 900},
        user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        locale="en-IN"
    )
    page = context.new_page()

    print("Navigating to Google Maps with domcontentloaded...", flush=True)
    page.goto(search_url, wait_until="domcontentloaded", timeout=60000)
    print("Page loaded! Waiting 6s for dynamic content...", flush=True)
    time.sleep(6)

    print("Current URL:", page.url, flush=True)
    page.screenshot(path="scratch/gmaps_step1.png")
    print("Screenshot saved to scratch/gmaps_step1.png", flush=True)

    # Click on the NCR Cooling Centre place card if search results showed multiple
    try:
        place_link = page.locator('a[href*="/maps/place/"]').first
        if place_link.count() > 0:
            print("Clicking place link...", flush=True)
            place_link.click()
            time.sleep(4)
    except Exception as e:
        print("Place link error:", e, flush=True)

    # Look for photos button or hero image
    try:
        photo_btn = page.locator('button[aria-label*="Photo"], button:has-text("Photos"), button:has-text("All")')
        if photo_btn.count() > 0:
            print(f"Found {photo_btn.count()} photo buttons. Clicking first...", flush=True)
            photo_btn.first.click()
            time.sleep(4)
    except Exception as e:
        print("Photo button error:", e, flush=True)

    page.screenshot(path="scratch/gmaps_photos.png")
    print("Screenshot saved to scratch/gmaps_photos.png", flush=True)

    # Scroll photo panel
    for _ in range(8):
        page.mouse.wheel(0, 1500)
        time.sleep(1)

    # Collect all googleusercontent images
    img_urls = set()
    for img in page.locator('img').all():
        try:
            src = img.get_attribute('src')
            if src and 'googleusercontent.com/p/' in src:
                # Get high resolution by changing dimensions to =w1600-h1200
                base_url = re.sub(r'=w\d+-h\d+.*|=s\d+.*', '', src)
                hd_url = base_url + '=s1600'
                img_urls.add(hd_url)
        except Exception:
            pass

    print(f"\nDiscovered {len(img_urls)} Authentic Google Business Photos!", flush=True)
    saved_count = 0
    for idx, u in enumerate(img_urls):
        try:
            r = requests.get(u, timeout=15)
            if r.status_code == 200 and len(r.content) > 10000:
                file_path = os.path.join(dest_dir, f"google_real_{idx+1}.jpg")
                with open(file_path, "wb") as f:
                    f.write(r.content)
                saved_count += 1
                print(f"[{saved_count}] Saved {file_path} ({len(r.content)} bytes)", flush=True)
        except Exception as e:
            print(f"Download failed for {u}: {e}", flush=True)

    browser.close()
    print(f"Finished! Total {saved_count} original HD photos downloaded.", flush=True)
