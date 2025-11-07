import requests
from urllib.parse import urlparse, parse_qs
import re

def get_coordinates_from_share_link(share_url):
    """Get coordinates from Google Maps share link"""
    try:
        # Follow redirect to get actual URL
        response = requests.get(share_url, allow_redirects=True, timeout=10)
        final_url = response.url
        
        # Try to extract coordinates from URL
        # Pattern 1: @lat,lng
        match = re.search(r'@(-?\d+\.?\d*),(-?\d+\.?\d*)', final_url)
        if match:
            return {
                'lat': float(match.group(1)),
                'lng': float(match.group(2))
            }
        
        # Pattern 2: /place/.../@lat,lng
        match = re.search(r'/place/[^/]+/@(-?\d+\.?\d*),(-?\d+\.?\d*)', final_url)
        if match:
            return {
                'lat': float(match.group(1)),
                'lng': float(match.group(2))
            }
        
        # Pattern 3: data parameter
        if 'data=' in final_url:
            data_match = re.search(r'data=([^&]+)', final_url)
            if data_match:
                # Decode and parse
                print(f"Found data parameter: {data_match.group(1)[:100]}")
        
        print(f"Could not extract coordinates from: {final_url}")
        return None
        
    except Exception as e:
        print(f"Error getting coordinates from {share_url}: {e}")
        return None

# Test with the provided links
links = [
    ('Malacky 1', 'https://maps.app.goo.gl/HUeuQSVXzxE2qkXN7'),
    ('Malacky 2', 'https://maps.app.goo.gl/sxEptvnJ2zWo1w677'),
]

print("Getting coordinates from share links...")
for name, url in links:
    coords = get_coordinates_from_share_link(url)
    if coords:
        print(f"{name}: lat={coords['lat']}, lng={coords['lng']}")
    else:
        print(f"{name}: Could not get coordinates")


