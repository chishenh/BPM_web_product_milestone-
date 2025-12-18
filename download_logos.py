import os
import urllib.request
import re

LOGOS_DIR = "public/logos"
if not os.path.exists(LOGOS_DIR):
    os.makedirs(LOGOS_DIR)

# Map of Country -> Wikimedia Page URL
TARGETS = {
    # Asia
    "malaysia": "https://commons.wikimedia.org/wiki/File:Official_MDA_Logo.png",
    "thailand": "https://commons.wikimedia.org/wiki/File:Logo_of_the_Food_and_Drug_Administration.svg",
    "vietnam": "https://commons.wikimedia.org/wiki/File:Ministry_of_Health_(Vietnam)_Logo.svg",
    "indonesia": "https://commons.wikimedia.org/wiki/File:Logo_of_the_Ministry_of_Health_of_the_Republic_of_Indonesia.svg",
    "singapore": "https://commons.wikimedia.org/wiki/File:Health_science_authority_Singapore.jpg", 
    "saudi": "https://commons.wikimedia.org/wiki/File:Saudi_Food_and_Drug_Authority_logo_(2023).svg",
    "uae": "https://commons.wikimedia.org/wiki/File:Ministry_of_Health_and_Prevention_(UAE)_logo.svg", # Risky
    "turkey": "https://commons.wikimedia.org/wiki/File:Turkey_Medicines_and_Medical_Devices_Agency_logo.svg", # Risky
    "kuwait": "https://commons.wikimedia.org/wiki/File:Ministry_of_Health_Kuwait.jpg",

    # Americas
    "guatemala": "https://commons.wikimedia.org/wiki/File:Logotipo-MSPAS-2024-2028_AZUL_H.png",
    "brazil": "https://commons.wikimedia.org/wiki/File:Logo.Anvisa.png",
    "mexico": "https://commons.wikimedia.org/wiki/File:Logo_COFEPRIS.png",
    
    # Oceania
    "australia": "https://commons.wikimedia.org/wiki/File:TGA_logo.svg",
    
    # Europe
    "eu": "https://commons.wikimedia.org/wiki/File:Conformit%C3%A9_Europ%C3%A9enne_(logo).svg"
    
    # Taiwan: No good wiki source found. Skipping for manual handling or placeholder.
}

def download_image(country, page_url):
    print(f"Processing {country}...")
    try:
        req = urllib.request.Request(
            page_url, 
            data=None, 
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
        )
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            
        # Regex for upload.wikimedia.org original link (href or src)
        # Wikimedia "Original file" link usually look like: <a href="https://upload.wikimedia.org/wikipedia/commons/4/4e/Logo.png" ...>Original file</a>
        
        # Pattern 1: internal link to original file
        match = re.search(r'href="(https://upload\.wikimedia\.org/wikipedia/commons/[^"]+)" class="internal"', html)
        
        # Pattern 2: fullImageLink
        if not match:
             match = re.search(r'<div class="fullImageLink" id="file"><a href="(https://upload\.wikimedia\.org/wikipedia/commons/[^"]+)"', html)

        if match:
            img_url = match.group(1)
            print(f"Found URL: {img_url}")
            
            ext = img_url.split('.')[-1]
            # Handle query params if any
            if '?' in ext: ext = ext.split('?')[0]
            
            filename = f"{country}.{ext}"
            filepath = os.path.join(LOGOS_DIR, filename)
            
            req_img = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req_img) as r_img, open(filepath, 'wb') as f:
                f.write(r_img.read())
            print(f"Saved to {filepath}")
        else:
            print(f"Could not find image URL in page for {country}")

    except Exception as e:
        print(f"Error for {country}: {e}")

for country, page_url in TARGETS.items():
    download_image(country, page_url)
