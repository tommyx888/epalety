'use client'

import { useState } from 'react'
import { useCart } from '@/contexts/CartContext'
import { Button } from '@/components/ui/Button'

interface ProductCardProps {
  product: {
    id: string
    name: string
    price: number
    description?: string
  }
}

export function AddToCartButton({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const [adding, setAdding] = useState(false)

  const handleAddToCart = async () => {
    setAdding(true)
    try {
      addItem(product, 1)
      // Show success feedback
      setTimeout(() => setAdding(false), 500)
    } catch (error) {
      console.error('Failed to add to cart:', error)
      setAdding(false)
    }
  }

  return (
    <Button
      onClick={handleAddToCart}
      disabled={adding}
      className="w-full"
      data-testid="add-to-cart"
    >
      {adding ? 'Pridáva sa...' : 'Pridať do košíka'}
    </Button>
  )
}

