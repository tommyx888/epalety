import requests
from bs4 import BeautifulSoup
import json
import os
from urllib.parse import urljoin, urlparse
import time

def download_image(url, folder='public/images/scraped'):
    """Download image from URL"""
    try:
        os.makedirs(folder, exist_ok=True)
        
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            filename = os.path.basename(urlparse(url).path)
            if not filename or '.' not in filename:
                filename = f"image_{int(time.time())}.jpg"
            
            filepath = os.path.join(folder, filename)
            with open(filepath, 'wb') as f:
                f.write(response.content)
            
            return filepath
    except Exception as e:
        print(f"Error downloading {url}: {e}")
    return None

def scrape_epalety():
    """Scrape epalety.sk website"""
    base_url = 'https://www.epalety.sk'
    
    print(f"Fetching {base_url}...")
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        response = requests.get(base_url, headers=headers, timeout=15)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Extract data
        data = {
            'title': soup.title.string if soup.title else None,
            'meta_description': None,
            'images': [],
            'products': [],
            'text_content': [],
            'links': []
        }
        
        # Meta description
        meta_desc = soup.find('meta', attrs={'name': 'description'})
        if meta_desc:
            data['meta_description'] = meta_desc.get('content')
        
        # Extract images
        print("Extracting images...")
        for img in soup.find_all('img'):
            src = img.get('src') or img.get('data-src')
            if src:
                full_url = urljoin(base_url, src)
                alt = img.get('alt', '')
                data['images'].append({
                    'url': full_url,
                    'alt': alt,
                    'src': src
                })
        
        # Extract text content
        print("Extracting text content...")
        for tag in ['h1', 'h2', 'h3', 'p']:
            for element in soup.find_all(tag):
                text = element.get_text(strip=True)
                if text and len(text) > 10:
                    data['text_content'].append({
                        'tag': tag,
                        'text': text
                    })
        
        # Extract links
        print("Extracting links...")
        for link in soup.find_all('a', href=True):
            href = link.get('href')
            text = link.get_text(strip=True)
            if href:
                full_url = urljoin(base_url, href)
                data['links'].append({
                    'url': full_url,
                    'text': text,
                    'href': href
                })
        
        # Try to find product information
        print("Looking for products...")
        # Common product selectors
        product_selectors = [
            '.product', '.item', '[class*="product"]', '[class*="palet"]'
        ]
        
        for selector in product_selectors:
            products = soup.select(selector)
            if products:
                for product in products[:10]:  # Limit to 10
                    product_data = {
                        'name': None,
                        'price': None,
                        'description': None,
                        'image': None
                    }
                    
                    # Try to find name
                    name_elem = product.find(['h2', 'h3', 'h4', '.title', '.name'])
                    if name_elem:
                        product_data['name'] = name_elem.get_text(strip=True)
                    
                    # Try to find price
                    price_elem = product.find(['.price', '[class*="price"]', '[class*="cena"]'])
                    if price_elem:
                        product_data['price'] = price_elem.get_text(strip=True)
                    
                    # Try to find image
                    img_elem = product.find('img')
                    if img_elem:
                        img_src = img_elem.get('src') or img_elem.get('data-src')
                        if img_src:
                            product_data['image'] = urljoin(base_url, img_src)
                    
                    if product_data['name']:
                        data['products'].append(product_data)
        
        # Save data
        print("Saving data...")
        os.makedirs('data/scraped', exist_ok=True)
        with open('data/scraped/epalety_data.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        
        print(f"\n✅ Scraping completed!")
        print(f"   Title: {data['title']}")
        print(f"   Images found: {len(data['images'])}")
        print(f"   Products found: {len(data['products'])}")
        print(f"   Links found: {len(data['links'])}")
        print(f"   Text blocks: {len(data['text_content'])}")
        
        # Download first 10 images
        print("\nDownloading images...")
        downloaded = 0
        for img in data['images'][:10]:
            if img['url'].startswith('http'):
                result = download_image(img['url'])
                if result:
                    downloaded += 1
                    print(f"   ✓ Downloaded: {os.path.basename(result)}")
        
        print(f"\n✅ Downloaded {downloaded} images")
        
        return data
        
    except Exception as e:
        print(f"❌ Error: {e}")
        import traceback
        traceback.print_exc()
        return None

if __name__ == '__main__':
    scrape_epalety()

