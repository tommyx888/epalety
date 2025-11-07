import { Metadata } from 'next'
import Image from 'next/image'
import { BranchMap } from '@/components/branches/BranchMap'

export const metadata: Metadata = {
  title: 'Pobočky - EPALETY.SK',
  description: 'Naše pobočky v Malackách a Kútoch. Otváracie hodiny: Pon - Pia: 08.00 - 16.00',
}

interface Branch {
  id: string
  name: string
  address: string
  addressLine2?: string
  phone: string[]
  email: string
  hours: string
  image?: string
  mapUrl?: string
  coordinates: {
    lat: number
    lng: number
  }
}

const branches: Branch[] = [
  {
    id: 'malacky-1',
    name: 'Malacky 1',
    address: 'Poľná ulica 3589',
    addressLine2: '90101 Malacky (smer na Veľké Leváre)',
    phone: ['+421 905 896 685', '+421 910 444 024'],
    email: 'info@epalety.sk',
    hours: 'Pon - Pia: 08.00 - 16.00',
    image: '/images/branches/malacky-1.jpg',
    mapUrl: 'https://maps.app.goo.gl/HUeuQSVXzxE2qkXN7',
    coordinates: {
      lat: 48.4451256,
      lng: 17.0119134,
    },
  },
  {
    id: 'malacky-2',
    name: 'Malacky 2',
    address: 'Pezinská ulica 5547/1',
    addressLine2: '(pri Shell pumpe)',
    phone: ['+421 905 896 685', '+421 910 444 024'],
    email: 'info@epalety.sk',
    hours: 'Pon - Pia: 08.00 - 16.00',
    image: '/images/branches/malacky-2.jpg',
    mapUrl: 'https://maps.app.goo.gl/sxEptvnJ2zWo1w677',
    coordinates: {
      lat: 48.4298398,
      lng: 17.0346564,
    },
  },
  {
    id: 'kuty',
    name: 'Kúty',
    address: 'Bratislavská cesta 1352',
    addressLine2: '90801 Kúty',
    phone: ['+421 905 896 685', '+421 910 444 024'],
    email: 'info@epalety.sk',
    hours: 'Pon - Pia: 08.00 - 16.00',
    image: '/images/branches/kuty.jpg',
    coordinates: {
      lat: 48.6583,
      lng: 17.0167,
    },
  },
]

export default function BranchesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-forest-dark via-forest to-forest-light text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Naše pobočky
            </h1>
            <p className="text-xl text-gray-100">
              Navštívte nás na jednej z našich pobočiek v Malackách alebo Kútoch. 
              Sme tu pre vás od pondelka do piatka od 08:00 do 16:00.
            </p>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {branches.map((branch) => (
              <div key={branch.id} className="card-modern">
                <div className="mb-6">
                  <h2 className="text-2xl font-heading font-bold text-forest mb-4">
                    {branch.name}
                  </h2>
                  
                  {/* Address */}
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                      ADRESA
                    </h3>
                    <p className="text-gray-900 text-lg">
                      {branch.address}
                    </p>
                    {branch.addressLine2 && (
                      <p className="text-gray-600 text-sm mt-1">
                        {branch.addressLine2}
                      </p>
                    )}
                  </div>

                  {/* Contact */}
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                      KONTAKT
                    </h3>
                    <div className="space-y-1">
                      {branch.phone.map((phone, idx) => (
                        <a
                          key={idx}
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="block text-gray-900 hover:text-orange transition-colors"
                        >
                          {phone}
                        </a>
                      ))}
                      <a
                        href={`mailto:${branch.email}`}
                        className="block text-gray-900 hover:text-orange transition-colors"
                      >
                        {branch.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                      OTVÁRACIE HODINY
                    </h3>
                    <p className="text-gray-900">
                      {branch.hours}
                    </p>
                  </div>

                  {/* Google Maps Link */}
                  <a
                    href={branch.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address + ', ' + (branch.addressLine2 || '') + ' Slovakia')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tertiary text-sm inline-flex items-center gap-1 group/link"
                  >
                    <span>Otvoriť v Google Maps</span>
                    <span className="transform group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                  </a>
                </div>

                {/* Branch Photo */}
                {branch.image && (
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden group mb-4">
                    <Image
                      src={branch.image}
                      alt={`Prevádzka ${branch.name}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                )}

                {/* Google Maps */}
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                  {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? (
                    <iframe
                      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${branch.coordinates.lat},${branch.coordinates.lng}&zoom=15`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                  ) : (
                    <iframe
                      src={`https://www.google.com/maps?q=${branch.coordinates.lat},${branch.coordinates.lng}&hl=sk&z=15&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Google Maps Section */}
          <div className="card-modern">
            <h2 className="text-2xl font-heading font-bold text-forest mb-6 text-center">
              Nájdite nás na mape
            </h2>
            <BranchMap branches={branches} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Potrebujete pomoc?
            </h2>
            <p className="text-xl mb-8 text-orange-50">
              Kontaktujte nás telefonicky alebo e-mailom. Radi vám pomôžeme s výberom správnych paliet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+421905896685"
                className="btn-secondary border-white text-white hover:bg-white hover:text-forest"
              >
                Zavolať nám
              </a>
              <a
                href="mailto:info@epalety.sk"
                className="btn-primary bg-white text-forest hover:bg-gray-100"
              >
                Napísať e-mail
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

