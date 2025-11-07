'use client'

import { useState, useEffect } from 'react'
import { useParams, notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function ProductDetailPage() {
  const params = useParams()
  const id = params?.id as string
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (id) {
      fetchProduct(id)
    }
  }, [id])

  const fetchProduct = async (productId: string) => {
    try {
      const res = await fetch(`/api/products?id=${productId}`)
      if (!res.ok) {
        setProduct(null)
        return
      }
      const { data } = await res.json()
      setProduct(data)
    } catch (error) {
      console.error('Failed to fetch product:', error)
      setProduct(null)
    } finally {
      setLoading(false)
    }
  }

  const handleAddToCart = () => {
    const event = new CustomEvent('addToCart', {
      detail: { productId: product.id, quantity },
    })
    window.dispatchEvent(event)
    // Show success message
    alert('Produkt pridaný do košíka!')
  }

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="animate-pulse">
            <div className="h-96 bg-gray-200 rounded-card mb-4"></div>
            <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>
      </section>
    )
  }

  if (!product) {
    notFound()
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-custom max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <div className="bg-gray-200 rounded-card h-96 flex items-center justify-center mb-4">
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <span className="text-8xl">📦</span>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-heading font-bold text-forest mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-bold text-orange mb-6">
              {product.price.toFixed(2)} €
            </p>

            <div className="mb-6">
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Product Details */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <span className="text-gray-600 w-32">Kategória:</span>
                <span className="font-semibold capitalize">{product.category}</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 w-32">Stav:</span>
                <span className="font-semibold capitalize">{product.condition}</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 w-32">Skladom:</span>
                <span className="font-semibold text-forest">
                  {product.stock_quantity} ks
                </span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Množstvo
              </label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded border border-gray-300 hover:bg-gray-100 flex items-center justify-center"
                >
                  -
                </button>
                <span className="w-16 text-center font-semibold text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded border border-gray-300 hover:bg-gray-100 flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <button
                className="btn-primary w-full"
                onClick={handleAddToCart}
              >
                Pridať do košíka ({(product.price * quantity).toFixed(2)} €)
              </button>
              <Link href="/quote" className="btn-secondary w-full text-center block">
                Získať cenovú ponuku
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

