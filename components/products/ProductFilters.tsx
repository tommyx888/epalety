'use client'

import { useState } from 'react'

export function ProductFilters() {
  const [filters, setFilters] = useState({
    category: [] as string[],
    condition: [] as string[],
    priceRange: [0, 100] as [number, number],
  })

  const categories = [
    { id: 'eur-pallets', label: 'EUR Palety' },
    { id: 'ktp-boxes', label: 'KTP Boxy' },
    { id: 'gitterbox', label: 'Gitterbox' },
    { id: 'custom', label: 'Špeciálne palety' },
  ]

  const conditions = [
    { id: 'new', label: 'Nové' },
    { id: 'used', label: 'Použité' },
    { id: 'repaired', label: 'Opravené' },
  ]

  return (
    <div className="card">
      <h3 className="text-lg font-heading font-semibold text-forest mb-4">
        Filtre
      </h3>

      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Kategória</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-forest border-gray-300 rounded focus:ring-forest"
                checked={filters.category.includes(category.id)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFilters({
                      ...filters,
                      category: [...filters.category, category.id],
                    })
                  } else {
                    setFilters({
                      ...filters,
                      category: filters.category.filter((c) => c !== category.id),
                    })
                  }
                }}
              />
              <span className="ml-2 text-sm text-gray-700">{category.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Condition Filter */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Stav</h4>
        <div className="space-y-2">
          {conditions.map((condition) => (
            <label key={condition.id} className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-forest border-gray-300 rounded focus:ring-forest"
                checked={filters.condition.includes(condition.id)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setFilters({
                      ...filters,
                      condition: [...filters.condition, condition.id],
                    })
                  } else {
                    setFilters({
                      ...filters,
                      condition: filters.condition.filter((c) => c !== condition.id),
                    })
                  }
                }}
              />
              <span className="ml-2 text-sm text-gray-700">{condition.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Cena</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <input
              type="number"
              placeholder="Od"
              className="input-field text-sm"
              value={filters.priceRange[0]}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  priceRange: [Number(e.target.value), filters.priceRange[1]],
                })
              }
            />
            <span className="text-gray-500">-</span>
            <input
              type="number"
              placeholder="Do"
              className="input-field text-sm"
              value={filters.priceRange[1]}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  priceRange: [filters.priceRange[0], Number(e.target.value)],
                })
              }
            />
          </div>
        </div>
      </div>

      {/* Reset Button */}
      <button
        onClick={() =>
          setFilters({
            category: [],
            condition: [],
            priceRange: [0, 100],
          })
        }
        className="btn-tertiary w-full text-center"
      >
        Resetovať filtre
      </button>
    </div>
  )
}

