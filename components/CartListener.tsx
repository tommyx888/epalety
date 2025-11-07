'use client'

import { useEffect } from 'react'
import { useCart } from '@/contexts/CartContext'

export function CartListener() {
  const { addItem } = useCart()

  useEffect(() => {
    const handleAddToCart = (event: CustomEvent) => {
      const { productId, quantity } = event.detail
      
      // Fetch product details and add to cart
      fetch(`/api/products?id=${productId}`)
        .then((res) => res.json())
        .then(({ data }) => {
          if (data) {
            addItem(
              {
                id: data.id,
                name: data.name,
                price: data.price,
                description: data.description,
              },
              quantity
            )
          }
        })
        .catch(console.error)
    }

    window.addEventListener('addToCart' as any, handleAddToCart as EventListener)

    return () => {
      window.removeEventListener('addToCart' as any, handleAddToCart as EventListener)
    }
  }, [addItem])

  return null
}

