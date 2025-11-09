'use client'

import { useState } from 'react'

export function TrustSection() {
  const stats = [
    { number: '15+', label: 'Rokov skúseností', icon: '📅' },
    { number: '500+', label: 'Spokojných klientov', icon: '👥' },
    { number: '50K+', label: 'Paliet ročne', icon: '📦' },
    { number: '24h', label: 'Dodanie', icon: '🚚' },
  ]

  const testimonials = [
    {
      quote: 'Vynikajúca služba a rýchle dodanie. Palety boli v perfektnom stave.',
      name: 'Ján Novák',
      company: 'Logistics s.r.o.',
      avatar: '/images/avatar1.jpg',
    },
    {
      quote: 'Dlhodobá spolupráca, vždy spoľahlivé a profesionálne.',
      name: 'Mária Kováčová',
      company: 'Distribution a.s.',
      avatar: '/images/avatar2.jpg',
    },
    {
      quote: 'Najlepšie ceny na trhu a skvelý zákaznícky servis.',
      name: 'Peter Horváth',
      company: 'Warehouse Ltd.',
      avatar: '/images/avatar3.jpg',
    },
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  return (
    <section className="py-24 bg-gradient-to-br from-neutral-background to-white">
      <div className="container-custom">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="inline-block p-4 mb-4 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 animate-bounce-subtle">
                <span className="text-3xl">{stat.icon}</span>
              </div>
              <h3 className="text-5xl font-bold text-primary-600 mb-2">{stat.number}</h3>
              <p className="text-neutral-text-secondary font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Čo hovoria naši klienti</h2>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex gap-6 transition-transform duration-500" style={{ transform: `translateX(-${currentTestimonial * 33.333}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full md:w-1/3 p-8 bg-white rounded-2xl shadow-lg border border-gray-100"
                  >
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-secondary-400 text-secondary-400" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-neutral-text mb-6 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-neutral-text-secondary">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation arrows */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Logo Cloud - Trusted by */}
        <div className="text-center">
          <p className="text-neutral-text-secondary mb-8">Dôverujú nám</p>
          <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            {/* Placeholder for client logos */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-400 text-sm">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

