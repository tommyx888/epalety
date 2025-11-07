'use client'

import { useState, useEffect } from 'react'
import { ProductCard } from './ProductCard'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  priceFrom: string
  category: string
  condition: 'new' | 'used' | 'repaired'
  stock: number
  image?: string
  popular?: boolean
}

// Mock data - matching ProductsSection (10 products)
const mockProducts: Product[] = [
  {
    id: 'eur-palety',
    name: 'EUR Palety',
    description: 'Euro palety v rôznych stavoch - nové, použité, tmavé',
    price: 8,
    priceFrom: 'Individuálne ceny',
    category: 'eur-pallets',
    condition: 'new',
    stock: 500,
    popular: true,
    image: '/images/scraped/eur.png',
  },
  {
    id: 'eur-palety-nove',
    name: 'EUR Palety - Nové',
    description: 'Nové euro palety v najlepšom stave',
    price: 10,
    priceFrom: 'Individuálne ceny',
    category: 'eur-pallets',
    condition: 'new',
    stock: 300,
    popular: false,
    image: '/images/scraped/biela-pouzita.png',
  },
  {
    id: 'eur-palety-tmave',
    name: 'EUR Palety - Tmavé',
    description: 'Tmavé euro palety, použité',
    price: 4,
    priceFrom: 'Individuálne ceny',
    category: 'eur-pallets',
    condition: 'used',
    stock: 400,
    popular: false,
    image: '/images/scraped/tmava.png',
  },
  {
    id: 'jednorazova-120x80',
    name: 'Jednorázová paleta 120x80',
    description: 'Jednorázová paleta 120cm x 80 cm',
    price: 5,
    priceFrom: 'Individuálne ceny',
    category: 'one-time-pallets',
    condition: 'new',
    stock: 250,
    popular: false,
    image: '/images/scraped/120x80.png',
  },
  {
    id: 'jednorazova-120x100',
    name: 'Jednorázová paleta 120x100',
    description: 'Jednorázová paleta 120 cm x 100 cm',
    price: 6,
    priceFrom: 'Individuálne ceny',
    category: 'one-time-pallets',
    condition: 'new',
    stock: 200,
    popular: false,
    image: '/images/scraped/120x100.png',
  },
  {
    id: 'nadstavce',
    name: 'Paletové nádstavce',
    description: 'Nádstavce pre palety pre zvýšenie kapacity',
    price: 12,
    priceFrom: 'Individuálne ceny',
    category: 'accessories',
    condition: 'new',
    stock: 150,
    popular: false,
    image: '/images/scraped/nadstavec.png',
  },
  {
    id: 'ktp-boxy-888',
    name: 'KTP Boxy 888',
    description: 'Kvalitné KTP boxy 888 pre vaše potreby',
    price: 15,
    priceFrom: 'Individuálne ceny',
    category: 'ktp-boxes',
    condition: 'new',
    stock: 180,
    popular: false,
    image: '/images/scraped/888.jpg',
  },
  {
    id: 'ktp-boxy-777',
    name: 'KTP Boxy 777',
    description: 'Kvalitné KTP boxy 777 pre vaše potreby',
    price: 15,
    priceFrom: 'Individuálne ceny',
    category: 'ktp-boxes',
    condition: 'new',
    stock: 160,
    popular: false,
    image: '/images/scraped/KTP-777.jpg',
  },
  {
    id: 'ktp-boxy-999',
    name: 'KTP Boxy 999',
    description: 'Kvalitné KTP boxy 999 pre vaše potreby',
    price: 18,
    priceFrom: 'Individuálne ceny',
    category: 'ktp-boxes',
    condition: 'new',
    stock: 140,
    popular: false,
    image: '/images/scraped/999.jpg',
  },
  {
    id: 'gitterbox',
    name: 'Gitterbox',
    description: 'Profesionálne Gitterbox palety',
    price: 20,
    priceFrom: 'Individuálne ceny',
    category: 'gitterbox',
    condition: 'new',
    stock: 120,
    popular: false,
    image: '/images/scraped/Gitterbox.jpg',
  },
]

export function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products')
      const { data } = await response.json()
      if (data && data.length > 0) {
        setProducts(data.map((p: any) => ({
          id: p.id,
          name: p.name,
          description: p.description || '',
          price: p.price,
          priceFrom: `od ${p.price.toFixed(2)}€`,
          category: p.category,
          condition: p.condition,
          stock: p.stock_quantity,
          image: p.image_url,
        })))
      } else {
        // Fallback to mock data if API fails
        setProducts(mockProducts)
      }
    } catch (error) {
      console.error('Failed to fetch products:', error)
      // Fallback to mock data
      setProducts(mockProducts)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <div key={i} className="card-modern animate-pulse">
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600">
          Zobrazených <span className="font-semibold">{products.length}</span> produktov
        </p>
        <select className="input-field w-auto">
          <option>Zoradiť podľa</option>
          <option>Cena: od najnižšej</option>
          <option>Cena: od najvyššej</option>
          <option>Názov: A-Z</option>
          <option>Najpopulárnejšie</option>
        </select>
      </div>

      {products.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-gray-600">Žiadne produkty nenájdené</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

