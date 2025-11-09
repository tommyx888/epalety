'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { TypewriterEffect } from '@/components/ui/TypewriterEffect'

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gemini-2.5-flash-image_Modern_industrial_warehouse_interior_filled_with_organized_wooden_euro_pallets_s-1.jpg"
          alt="EPALETY.SK sklad s paletami"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/95 via-primary-800/92 to-primary-700/90 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/5 via-transparent to-accent-500/5" />
      </div>

      {/* Subtle Background Pattern - reduced opacity */}
      <div className="absolute inset-0 opacity-[0.03] z-10">
        <div className="absolute inset-0 animate-[patternMove_20s_linear_infinite]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      <div className="container-custom relative z-20 w-full">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center">
          {/* Left Side - Content */}
          <div className="animate-fade-in">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-secondary-400 to-secondary-500 rounded-full text-sm font-semibold text-white animate-pulse shadow-lg shadow-secondary-500/50">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>#1 dodávateľ na Slovensku</span>
            </div>
            
            {/* H1 with High Contrast */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.9)]">
                Najväčší dodávateľ paliet na Slovensku
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl animate-slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
              <TypewriterEffect 
                text="Dlhoročné skúsenosti. Certifikovaná kvalita. Dodanie do 24h."
                speed={50}
                className="inline-block"
              />
            </p>

            {/* USP Cards Row - Floating Pills */}
            <div className="flex flex-wrap gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {[
                { icon: 'Truck', text: 'Dodanie do 24h' },
                { icon: 'Users', text: '500+ klientov' },
                { icon: 'Shield', text: 'ISO certifikát' },
              ].map((card, index) => (
                <div
                  key={index}
                  className="group relative px-6 py-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="absolute -top-3 left-6 p-2 rounded-lg bg-gradient-to-br from-accent-400 to-accent-600 shadow-lg">
                    {card.icon === 'Truck' && (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {card.icon === 'Users' && (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    )}
                    {card.icon === 'Shield' && (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                  </div>
                  <p className="mt-4 font-semibold text-gray-900">{card.text}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Link href="/quote" className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold rounded-xl shadow-lg shadow-primary-600/50 hover:shadow-xl hover:shadow-primary-600/60 transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <span className="relative flex items-center justify-center gap-2">
                  Získať cenovú ponuku
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <a href="tel:+421905896685" className="px-8 py-4 bg-white border-2 border-primary-600 text-primary-600 font-bold rounded-xl hover:bg-primary-50 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +421 905 896 685
              </a>
            </div>

            {/* Trust Badge with Stars */}
            <div className="flex items-center gap-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-secondary-400 text-secondary-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div>
                <p className="font-bold text-white">4.9/5</p>
                <p className="text-sm text-gray-200">z 210 recenzií</p>
              </div>
            </div>
          </div>

          {/* Right Side - Hero Image with Floating Cards */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-100/50 to-secondary-100/50 blur-3xl"></div>
            <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden group">
              <Image
                src="/Lucid_Origin_Wooden_euro_pallets_arranged_artistically_in_natu_0.jpg"
                alt="EUR Palety"
                width={600}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
            
            {/* Floating Info Cards */}
            <div className="absolute top-10 -left-10 z-20 px-4 py-3 bg-white rounded-xl shadow-xl animate-float">
              <p className="text-sm text-gray-600">EUR Palety</p>
              <p className="text-2xl font-bold text-primary-600">od 8.50€</p>
            </div>
            
            <div className="absolute bottom-10 -right-10 z-20 px-4 py-3 bg-white rounded-xl shadow-xl animate-float-delayed">
              <p className="text-sm text-gray-600">Skladom</p>
              <p className="text-2xl font-bold text-accent-600">5000+ ks</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/95 to-transparent z-10" />
    </section>
  )
}
