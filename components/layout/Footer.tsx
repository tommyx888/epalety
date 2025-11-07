import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    produkty: [
      { label: 'EUR Palety', href: '/products/eur-palety' },
      { label: 'Jednorázové palety', href: '/products' },
      { label: 'Paletové nádstavce', href: '/products/nadstavce' },
      { label: 'KTP Boxy', href: '/products/ktp-boxy' },
      { label: 'Gitterbox', href: '/products/gitterbox' },
    ],
    služby: [
      { label: 'Predaj', href: '/services' },
      { label: 'Výkup', href: '/services' },
      { label: 'Prenájom', href: '/services' },
      { label: 'Opravy', href: '/services' },
    ],
    spoločnosť: [
      { label: 'O nás', href: '/about' },
      { label: 'Pobočky', href: '/contact#pobocky' },
      { label: 'Kontakt', href: '/contact' },
    ],
  }

  const pobocky = [
    {
      name: 'Malacky 1',
      address: 'Poľná ulica 3589 (smer na Veľké Leváre)',
    },
    {
      name: 'Malacky 2',
      address: 'Pezinská ulica 5547/1 (pri Shell pumpe)',
    },
    {
      name: 'Kúty',
      address: 'Bratislavská cesta 1352',
    },
  ]

  return (
    <footer className="bg-forest text-white mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.jpg"
                alt="EPALETY.SK Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-200 mb-4 text-sm">
              Dlhoročné skúsenosti s obalovým materiálom. Zaručujeme bezkonkurenčné ceny pri výkupe a predaji obalového materiálu.
            </p>
            <div className="mb-4">
              <p className="text-gray-200 text-sm mb-2">
                <strong>Kontakt:</strong>
              </p>
              <p className="text-gray-200 text-sm">
                <a href="tel:+421905896685" className="hover:text-orange transition-colors">
                  +421 905 896 685
                </a>
                {' | '}
                <a href="tel:+421910444024" className="hover:text-orange transition-colors">
                  +421 910 444 024
                </a>
              </p>
              <p className="text-gray-200 text-sm">
                <a href="mailto:info@epalety.sk" className="hover:text-orange transition-colors">
                  info@epalety.sk
                </a>
              </p>
            </div>
            <div>
              <p className="text-gray-200 text-sm mb-2">
                <strong>Otváracie hodiny:</strong>
              </p>
              <p className="text-gray-200 text-sm">Pon - Pia: 08.00 - 16.00</p>
            </div>
          </div>

          {/* Produkty */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Produkty</h4>
            <ul className="space-y-2">
              {footerLinks.produkty.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-200 hover:text-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Služby */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Služby</h4>
            <ul className="space-y-2">
              {footerLinks.služby.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-200 hover:text-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pobočky */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Pobočky</h4>
            <ul className="space-y-3">
              {pobocky.map((pobocka) => (
                <li key={pobocka.name}>
                  <p className="text-gray-200 font-medium text-sm">{pobocka.name}</p>
                  <p className="text-gray-300 text-xs">{pobocka.address}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-forest-light mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-200 text-sm">
            © {currentYear} EPALETY.SK. Všetky práva vyhradené.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-200 hover:text-orange text-sm transition-colors"
            >
              Ochrana súkromia
            </Link>
            <Link
              href="/terms"
              className="text-gray-200 hover:text-orange text-sm transition-colors"
            >
              Podmienky
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

