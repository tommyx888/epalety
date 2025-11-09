import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    produkty: [
      { label: 'EUR Palety', href: '/products/eur-palety' },
      { label: 'KTP Boxy', href: '/products/ktp-boxy' },
      { label: 'Gitterbox', href: '/products/gitterbox' },
      { label: 'Nádstavce', href: '/products/nadstavce' },
    ],
    služby: [
      { label: 'Predaj', href: '/services' },
      { label: 'Výkup', href: '/services' },
      { label: 'Prenájom', href: '/services' },
      { label: 'Servis', href: '/services' },
    ],
  }

  return (
    <footer className="bg-neutral-text text-gray-300">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.jpg"
                alt="EPALETY.SK Logo"
                width={150}
                height={50}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Váš spoľahlivý partner pre palety a obalový materiál.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { name: 'Facebook', icon: '📘' },
                { name: 'Instagram', icon: '📷' },
                { name: 'LinkedIn', icon: '💼' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-white mb-4">Produkty</h4>
            <ul className="space-y-2">
              {footerLinks.produkty.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-accent-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Služby</h4>
            <ul className="space-y-2">
              {footerLinks.služby.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-accent-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <a href="tel:+421905896685" className="hover:text-accent-400">
                    +421 905 896 685
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@epalety.sk" className="hover:text-accent-400">
                  info@epalety.sk
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} EPALETY.SK - Všetky práva vyhradené</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-accent-400">Obchodné podmienky</Link>
            <Link href="/terms" className="hover:text-accent-400">Ochrana údajov</Link>
            <Link href="/cookies" className="hover:text-accent-400">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
