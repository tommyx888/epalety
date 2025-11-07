import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'O nás - EPALETY.SK',
  description: 'Dlhoročné skúsenosti s obalovým materiálom. Výkup, predaj, oprava paliet, KTP boxov, Gitterboxov a recyklácia dreveného odpadu.',
}

const stats = [
  { number: '15+', label: 'Rokov skúseností' },
  { number: '1000+', label: 'Spokojných zákazníkov' },
  { number: '50K+', label: 'Paliet na sklade' },
  { number: '24/7', label: 'Dostupnosť' },
]

const values = [
  {
    icon: '✓',
    title: 'Kvalita',
    description: 'Len overené, kvalitné palety od dôveryhodných dodávateľov',
  },
  {
    icon: '🤝',
    title: 'Dôvera',
    description: 'Transparentné ceny a poctivý prístup k každému klientovi',
  },
  {
    icon: '⚡',
    title: 'Rýchlosť',
    description: 'Rýchla dodávka a profesionálny servis kedykoľvek potrebujete',
  },
  {
    icon: '♻️',
    title: 'Udržateľnosť',
    description: 'Ekologický prístup a recyklácia paliet pre lepšie životné prostredie',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-forest-dark via-forest to-forest-light text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              O EPALETY.SK
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Dlhoročné skúsenosti s obalovým materiálom. Zaoberáme sa výkupom, predajom, opravou paliet, KTP boxov, Gitterboxov a recykláciou dreveného odpadu. Našou prioritou je spokojnosť zákazníka.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-orange mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-forest mb-8 text-center">
              Dlhoročné skúsenosti s obalovým materiálom
            </h2>
            <div className="space-y-6 text-gray-600 text-lg">
              <p>
                Zaoberáme sa výkupom, predajom, opravou paliet, KTP boxov, Gitterboxov a recykláciou dreveného odpadu.
              </p>
              <p>
                Zabezpečujeme servis a poradenstvo pre jednotlivé spoločnosti pri voľbe, dodania a použitia obalového materiálu.
              </p>
              <p>
                Našou prioritou je spokojnosť zákazníka, vďaka ktorej sa rýchlo stávame úspešnou firmou na trhu s paletami.
              </p>
              <p>
                Zaručujeme bezkonkurenčné ceny pri výkupe a predaji obalového materiálu predovšetkým drevených paliet, ktoré sa stanovia dohodou so zákazníkom. Plynulé dodanie tovaru, materiálu podľa požiadaviek zákazníka, profesionálny prístup, technické a skladové zabezpečenie, vďaka ktorému môžeme vyhovieť každému zákazníkovi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-forest mb-4">
              Naše hodnoty
            </h2>
            <p className="text-lg text-gray-600">
              Čo nás odlišuje od konkurencie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="card text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-heading font-semibold text-forest mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Pripravení začať spolupracovať?
            </h2>
            <p className="text-xl mb-8 text-orange-50">
              Kontaktujte nás ešte dnes a získajte individuálnu cenovú ponuku
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button variant="secondary" className="border-white text-white hover:bg-white hover:text-forest">
                  Získať ponuku
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-white text-forest hover:bg-gray-100">
                  Kontaktovať nás
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

