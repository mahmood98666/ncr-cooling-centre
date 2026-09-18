import urllib.parse
import re
import requests

query = "NCR Cooling Centre Sarswati Kunj Sector 49 Gurugram"
url = f"https://www.google.com/search?q={urllib.parse.quote(query)}&tbm=isch"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

resp = requests.get(url, headers=headers)
print("Status:", resp.status_code)

# Find image URLs (lh3.googleusercontent.com or encrypted-tbn0.gstatic.com)
matches = re.findall(r'(https://[^\s"]+googleusercontent\.com/[^\s"]+)', resp.text)
print("Matches found:", len(matches))
for m in matches[:5]:
    print("Match:", m[:100])
