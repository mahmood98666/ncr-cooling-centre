import requests
import re

url = "https://www.google.com/maps/search/NCR+Cooling+Centre+Gurugram"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.9"
}

resp = requests.get(url, headers=headers)
print("Status:", resp.status_code)

# Find googleusercontent URLs (Google Maps photos are hosted on lh3.googleusercontent.com, lh5.googleusercontent.com etc.)
links = set(re.findall(r'https://lh[0-9]\.googleusercontent\.com/[a-zA-Z0-9_\-=]+', resp.text))
print("Google Content photo links found:", len(links))
for l in list(links)[:10]:
    print(l)
