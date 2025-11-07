import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Služby - EPALETY.SK',
  description: 'Naše služby - Predaj, Výkup, Opravy a Recyklácia paliet',
}

const services = [
  {
    id: 'rental',
    icon: '🏢',
    title: 'Dlhodobý prenájom',
    description: 'Využite špeciálny produkt dlhodobého prenájmu euro paliet, KTP a Gitterboxov.',
  },
  {
    id: 'sale',
    icon: '📦',
    title: 'Predaj',
    description: 'Naše skladové zásoby stačia aj na tie najväčšie projekty. Neváhajte nás kontaktovať s Vašim dopytom.',
  },
  {
    id: 'buyback',
    icon: '💰',
    title: 'Výkup',
    description: 'Výkup paliet za najlepšie ceny, ktoré si dohodneme individuálne na základe stavu a počtu.',
  },
]

export default function ServicesPage() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-forest mb-4">
            Naše služby
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dlhoročné skúsenosti s obalovým materiálom. Zaručujeme bezkonkurenčné ceny pri výkupe a predaji obalového materiálu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div key={service.id} className="card-modern text-center">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-heading font-semibold text-forest mb-3">
                {service.title}
              </h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link href="/quote">
                <Button variant="secondary">Získať ponuku</Button>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-forest to-forest-dark text-white rounded-card p-8 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Potrebujete pomoc s výberom?
          </h2>
          <p className="text-xl mb-6 text-gray-100">
            Kontaktujte nás a my vám pomôžeme nájsť najlepšie riešenie
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="secondary" className="border-white text-white hover:bg-white hover:text-forest">
                Kontaktovať nás
              </Button>
            </Link>
            <Link href="/quote">
              <Button className="bg-white text-forest hover:bg-gray-100">
                Získať ponuku
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

