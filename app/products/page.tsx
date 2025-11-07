import { Metadata } from 'next'
import { ProductGrid } from '@/components/products/ProductGrid'
import { ProductFilters } from '@/components/products/ProductFilters'

export const metadata: Metadata = {
  title: 'Produkty - EPALETY.SK',
  description: 'Prehľad našich produktov - EUR palety, KTP boxy, Gitterbox',
}

export default function ProductsPage() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="text-4xl font-heading font-bold text-forest mb-4">
            Naše produkty
          </h1>
          <p className="text-lg text-gray-600">
            Široký sortiment kvalitných paliet pre každú potrebu
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <ProductFilters />
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <ProductGrid />
          </div>
        </div>
      </div>
    </section>
  )
}

