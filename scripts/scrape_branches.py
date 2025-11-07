import requests
from bs4 import BeautifulSoup
import json
import os
from urllib.parse import urljoin, urlparse
import time

def download_image(url, folder='public/images/branches', filename=None):
    """Download image from URL"""
    try:
        os.makedirs(folder, exist_ok=True)
        
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, timeout=10)
        if response.status_code == 200:
            if not filename:
                filename = os.path.basename(urlparse(url).path)
                if not filename or '.' not in filename:
                    filename = f"image_{int(time.time())}.jpg"
            
            filepath = os.path.join(folder, filename)
            with open(filepath, 'wb') as f:
                f.write(response.content)
            
            print(f"Downloaded: {filepath}")
            return filepath.replace('public/', '/')
    except Exception as e:
        print(f"Error downloading {url}: {e}")
    return None

def get_coordinates(address):
    """Get coordinates for address using Nominatim (OpenStreetMap)"""
    try:
        url = "https://nominatim.openstreetmap.org/search"
        params = {
            'q': address + ', Slovakia',
            'format': 'json',
            'limit': 1
        }
        headers = {
            'User-Agent': 'EPALETY.SK Scraper'
        }
        response = requests.get(url, params=params, headers=headers, timeout=10)
        if response.status_code == 200:
            data = response.json()
            if data:
                return {
                    'lat': float(data[0]['lat']),
                    'lng': float(data[0]['lon'])
                }
    except Exception as e:
        print(f"Error getting coordinates for {address}: {e}")
    return None

def scrape_branches():
    """Scrape epalety.sk branches page"""
    url = 'https://www.epalety.sk/pobocky/'
    
    print(f"Fetching {url}...")
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, timeout=15)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        branches = []
        
        # Find all branch sections
        # Looking for h2 tags with branch names
        branch_sections = soup.find_all(['h2', 'h3'], string=lambda text: text and any(name in text for name in ['Malacky', 'Kúty']))
        
        for section in branch_sections:
            branch_data = {
                'name': section.get_text(strip=True),
                'address': '',
                'addressLine2': '',
                'phone': [],
                'email': '',
                'hours': '',
                'image': None
            }
            
            # Get parent container
            parent = section.find_parent(['div', 'section', 'article'])
            if not parent:
                parent = section.find_next_sibling()
            
            # Extract address
            address_elem = parent.find(string=lambda text: text and 'ulica' in text.lower() or 'cesta' in text.lower())
            if address_elem:
                branch_data['address'] = address_elem.strip()
                # Check for address line 2
                next_elem = address_elem.find_next()
                if next_elem and ('smer' in next_elem.get_text().lower() or 'pri' in next_elem.get_text().lower()):
                    branch_data['addressLine2'] = next_elem.get_text(strip=True)
            
            # Extract phone numbers
            phone_elems = parent.find_all(string=lambda text: text and '+421' in text)
            branch_data['phone'] = [p.strip() for p in phone_elems if p.strip()]
            
            # Extract email
            email_elem = parent.find(string=lambda text: text and '@' in text)
            if email_elem:
                branch_data['email'] = email_elem.strip()
            
            # Extract hours
            hours_elem = parent.find(string=lambda text: text and '08.00' in text or 'Pon' in text)
            if hours_elem:
                branch_data['hours'] = hours_elem.strip()
            
            # Extract images
            img = parent.find('img') if parent else None
            if img:
                img_src = img.get('src') or img.get('data-src')
                if img_src:
                    full_url = urljoin(url, img_src)
                    img_filename = f"{branch_data['name'].lower().replace(' ', '-')}.jpg"
                    downloaded = download_image(full_url, filename=img_filename)
                    if downloaded:
                        branch_data['image'] = downloaded
            
            # Get coordinates
            full_address = f"{branch_data['address']}, {branch_data.get('addressLine2', '')}"
            coords = get_coordinates(branch_data['address'])
            if coords:
                branch_data['coordinates'] = coords
            else:
                # Fallback coordinates
                if 'Malacky' in branch_data['name']:
                    branch_data['coordinates'] = {'lat': 48.4364, 'lng': 17.0208}
                elif 'Kúty' in branch_data['name']:
                    branch_data['coordinates'] = {'lat': 48.6583, 'lng': 17.0167}
            
            branches.append(branch_data)
            print(f"Found branch: {branch_data['name']}")
        
        # If we didn't find branches, use manual data from the page content
        if not branches:
            print("Using manual extraction...")
            branches = [
                {
                    'name': 'Malacky 1',
                    'address': 'Poľná ulica 3589',
                    'addressLine2': '(smer na Veľké Leváre)',
                    'phone': ['+421 905 896 685', '+421 910 444 024'],
                    'email': 'info@epalety.sk',
                    'hours': 'Pon - Pia: 08.00 - 16.00',
                    'coordinates': get_coordinates('Poľná ulica 3589, Malacky') or {'lat': 48.4364, 'lng': 17.0208}
                },
                {
                    'name': 'Malacky 2',
                    'address': 'Pezinská ulica 5547/1',
                    'addressLine2': '(pri Shell pumpe)',
                    'phone': ['+421 905 896 685', '+421 910 444 024'],
                    'email': 'info@epalety.sk',
                    'hours': 'Pon - Pia: 08.00 - 16.00',
                    'coordinates': get_coordinates('Pezinská ulica 5547/1, Malacky') or {'lat': 48.4364, 'lng': 17.0208}
                },
                {
                    'name': 'Kúty',
                    'address': 'Bratislavská cesta 1352',
                    'phone': ['+421 905 896 685', '+421 910 444 024'],
                    'email': 'info@epalety.sk',
                    'hours': 'Pon - Pia: 08.00 - 16.00',
                    'coordinates': get_coordinates('Bratislavská cesta 1352, Kúty') or {'lat': 48.6583, 'lng': 17.0167}
                }
            ]
        
        # Save to JSON
        output_file = 'data/scraped/branches_data.json'
        os.makedirs(os.path.dirname(output_file), exist_ok=True)
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(branches, f, ensure_ascii=False, indent=2)
        
        print(f"\nScraped {len(branches)} branches")
        print(f"Data saved to {output_file}")
        
        return branches
        
    except Exception as e:
        print(f"Error scraping: {e}")
        return None

if __name__ == '__main__':
    scrape_branches()


