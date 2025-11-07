import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: '404 - Stránka nenájdená - EPALETY.SK',
}

export default function NotFound() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom max-w-2xl">
        <div className="card text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-4xl font-heading font-bold text-forest mb-4">
            Stránka nenájdená
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Ospravedlňujeme sa, ale stránka ktorú hľadáte neexistuje.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button>Späť na domov</Button>
            </Link>
            <Link href="/products">
              <Button variant="secondary">Prehliadať produkty</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

