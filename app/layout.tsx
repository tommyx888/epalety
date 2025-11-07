import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/contexts/CartContext'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { CartListener } from '@/components/CartListener'

export const metadata: Metadata = {
  title: 'EPALETY.SK - Kvalitné palety pre váš biznis',
  description: '15+ rokov skúseností | Najlepšie ceny | EUR palety, KTP boxy, Gitterbox',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sk">
      <body>
        <CartProvider>
          <CartListener />
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}

