'use client'

import { useEffect, useRef } from 'react'

interface Branch {
  id: string
  name: string
  address: string
  coordinates: {
    lat: number
    lng: number
  }
}

interface BranchMapProps {
  branches: Branch[]
}

declare global {
  interface Window {
    google: {
      maps: {
        Map: new (element: HTMLElement, options?: any) => any
        Marker: new (options?: any) => any
        InfoWindow: new (options?: any) => any
        LatLngBounds: new () => any
      }
    }
  }
}

export function BranchMap({ branches }: BranchMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])

  useEffect(() => {
    if (!mapRef.current) return

    // Check if Google Maps is already loaded
    if (window.google && window.google.maps) {
      initializeMap()
      return
    }

    // Load Google Maps script
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}&libraries=places`
    script.async = true
    script.defer = true

    script.onload = () => {
      initializeMap()
    }

    script.onerror = () => {
      console.error('Failed to load Google Maps script')
    }

    document.head.appendChild(script)

    function initializeMap() {
      if (!mapRef.current || !window.google?.maps) return

      const google = window.google

      // Calculate center point (average of all branches)
      const centerLat = branches.reduce((sum, b) => sum + b.coordinates.lat, 0) / branches.length
      const centerLng = branches.reduce((sum, b) => sum + b.coordinates.lng, 0) / branches.length

      // Initialize map
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: centerLat, lng: centerLng },
        zoom: 10,
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
        ],
      })

      mapInstanceRef.current = map

      // Add markers for each branch
      branches.forEach((branch) => {
        const marker = new google.maps.Marker({
          position: branch.coordinates,
          map: map,
          title: branch.name,
          label: {
            text: branch.name,
            color: '#2D5016',
            fontWeight: 'bold',
          },
        })

        // Info window
        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div style="padding: 10px; min-width: 200px;">
              <h3 style="margin: 0 0 8px 0; color: #2D5016; font-weight: bold;">${branch.name}</h3>
              <p style="margin: 0; color: #666;">${branch.address}</p>
            </div>
          `,
        })

        marker.addListener('click', () => {
          infoWindow.open(map, marker)
        })

        markersRef.current.push(marker)
      })

      // Fit bounds to show all markers
      if (branches.length > 1) {
        const bounds = new google.maps.LatLngBounds()
        branches.forEach((branch) => {
          bounds.extend(branch.coordinates)
        })
        map.fitBounds(bounds)
      }
    }

    return () => {
      // Cleanup
      markersRef.current.forEach((marker) => {
        if (marker && marker.setMap) {
          marker.setMap(null)
        }
      })
      markersRef.current = []
    }
  }, [branches])

  return (
    <div className="w-full">
      <div ref={mapRef} className="w-full h-96 rounded-lg overflow-hidden bg-gray-100" />
      {!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && (
        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Poznámka:</strong> Pre zobrazenie mapy je potrebné nastaviť{' '}
            <code className="bg-yellow-100 px-1 rounded">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</code> v .env.local súbore.
          </p>
        </div>
      )}
    </div>
  )
}

