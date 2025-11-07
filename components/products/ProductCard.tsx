'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Product } from './ProductGrid'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  // Map product IDs to image paths (matching ProductsSection)
  const getImagePath = (productId: string, imageUrl?: string) => {
    if (imageUrl) return imageUrl
    
    // Map product IDs to images from ProductsSection
    const imageMap: Record<string, string> = {
      '1': '/images/scraped/eur.png',
      '2': '/images/scraped/biela-pouzita.png',
      '3': '/images/scraped/888.jpg',
      '4': '/images/scraped/Gitterbox.jpg',
      'eur-palety': '/images/scraped/eur.png',
      'eur-palety-nove': '/images/scraped/biela-pouzita.png',
      'eur-palety-tmave': '/images/scraped/tmava.png',
      'jednorazova-120x80': '/images/scraped/120x80.png',
      'jednorazova-120x100': '/images/scraped/120x100.png',
      'nadstavce': '/images/scraped/nadstavec.png',
      'ktp-boxy-888': '/images/scraped/888.jpg',
      'ktp-boxy-777': '/images/scraped/KTP-777.jpg',
      'ktp-boxy-999': '/images/scraped/999.jpg',
      'gitterbox': '/images/scraped/Gitterbox.jpg',
    }
    
    return imageMap[productId] || '/images/scraped/eur.png'
  }

  const imagePath = getImagePath(product.id, product.image)

  return (
    <div className="card-modern group">
      {/* Product Image with Modern Effects */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest/5 to-orange/5 group-hover:from-forest/10 group-hover:to-orange/10 transition-all duration-300"></div>
        <Image
          src={imagePath}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.popular && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-orange to-orange-dark text-white px-3 py-1 rounded-full text-xs font-semibold shadow-card animate-pulse">
            <span className="relative z-10">POPULÁRNE</span>
          </div>
        )}
        {product.stock < 50 && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Posledné kusy!
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Product Info */}
      <div>
        <h3 className="text-xl font-heading font-semibold text-forest mb-2 group-hover:text-orange transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">
          {product.description}
        </p>

        <div className="mb-4">
          <span className="text-2xl font-bold bg-gradient-to-r from-orange to-orange-dark bg-clip-text text-transparent">
            {product.priceFrom}
          </span>
        </div>

        {/* Stock Info */}
        <div className="mb-4">
          <span className="text-sm text-gray-600">
            Skladom: <span className="font-semibold text-forest">{product.stock} ks</span>
          </span>
        </div>

        {/* Condition Badge */}
        <div className="mb-4">
          <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
            product.condition === 'new' 
              ? 'bg-green-100 text-green-800' 
              : product.condition === 'used'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-orange-100 text-orange-800'
          }`}>
            {product.condition === 'new' ? 'Nové' : product.condition === 'used' ? 'Použité' : 'Opravené'}
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-2">
          <Link
            href={`/products/${product.id}`}
            className="btn-secondary flex-1 text-center"
          >
            Detaily
          </Link>
          <button
            onClick={() => {
              // Add to cart functionality
              const event = new CustomEvent('addToCart', {
                detail: { productId: product.id, quantity: 1 },
              })
              window.dispatchEvent(event)
            }}
            className="btn-primary flex-1 group/btn relative overflow-hidden"
            data-testid="add-to-cart"
          >
            <span className="relative z-10">Do košíka</span>
            <span className="absolute inset-0 bg-gradient-to-r from-orange-dark to-orange transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
        </div>
      </div>
    </div>
  )
}

