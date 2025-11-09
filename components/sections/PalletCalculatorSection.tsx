'use client'

import { useState } from 'react'

export function PalletCalculatorSection() {
  const [dimensions, setDimensions] = useState({ length: '', width: '', height: '' })
  const [calculatedPallets, setCalculatedPallets] = useState(0)
  const [estimatedPrice, setEstimatedPrice] = useState(0)

  const calculatePallets = () => {
    const l = parseFloat(dimensions.length) || 0
    const w = parseFloat(dimensions.width) || 0
    const h = parseFloat(dimensions.height) || 0
    
    if (l && w && h) {
      // Simplified calculation - in real app would be more complex
      const palletArea = 120 * 80 // Standard EUR pallet
      const itemArea = l * w
      const itemsPerLayer = Math.floor(palletArea / itemArea)
      const layersPerPallet = Math.floor(144 / h) // Standard pallet height
      const itemsPerPallet = itemsPerLayer * layersPerPallet
      const totalItems = 100 // Example
      const pallets = Math.ceil(totalItems / itemsPerPallet)
      
      setCalculatedPallets(pallets)
      setEstimatedPrice(pallets * 8.5) // Example price per pallet
    }
  }

  return (
    <section className="py-24 bg-gradient-to-br from-accent-50 to-white">
      <div className="container-custom max-w-4xl">
        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Koľko paliet potrebujete?</h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative">
                <label className="block text-sm font-medium mb-2">Dĺžka (cm)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={dimensions.length}
                    onChange={(e) => setDimensions({ ...dimensions, length: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="120"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">📏</span>
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium mb-2">Šírka (cm)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={dimensions.width}
                    onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="80"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">📏</span>
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium mb-2">Výška (cm)</label>
                <div className="relative">
                  <input
                    type="number"
                    value={dimensions.height}
                    onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    placeholder="50"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">📏</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={calculatePallets}
              className="w-full py-4 bg-primary-600 text-white font-bold rounded-xl hover:bg-primary-700 transition-colors"
            >
              Vypočítať
            </button>
            
            {calculatedPallets > 0 && (
              <div className="mt-8 p-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl text-white">
                <p className="text-lg mb-2">Potrebujete približne:</p>
                <p className="text-5xl font-bold mb-4">{calculatedPallets} paliet</p>
                <p className="text-primary-100">Odhadovaná cena: {estimatedPrice.toFixed(2)}€</p>
              </div>
            )}
            
            <a
              href="/quote"
              className="block w-full py-4 bg-neutral-text text-white font-bold rounded-xl hover:bg-gray-800 transition-colors text-center"
            >
              Získať presnú cenovú ponuku
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

