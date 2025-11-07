'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // For now, we'll use quotes API for contact form
      // In production, create a separate contact API endpoint
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          product: formData.subject,
          quantity: 1,
          message: formData.message,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit contact form')
      }

      setSubmitted(true)
    } catch (error) {
      console.error('Contact form error:', error)
      alert('Chyba pri odosielaní správy. Skúste to znova.')
    }
  }

  const contactInfo = [
    {
      icon: '📞',
      title: 'Telefón',
      content: '+421 905 896 685 | +421 910 444 024',
      link: 'tel:+421905896685',
    },
    {
      icon: '✉️',
      title: 'Email',
      content: 'info@epalety.sk',
      link: 'mailto:info@epalety.sk',
    },
    {
      icon: '🕐',
      title: 'Otváracie hodiny',
      content: 'Pon - Pia: 08.00 - 16.00',
      link: '#',
    },
  ]

  const pobocky = [
    {
      name: 'Malacky 1',
      address: 'Poľná ulica 3589',
      detail: 'smer na Veľké Leváre',
      phone: '+421 905 896 685',
      email: 'info@epalety.sk',
      hours: 'Pon - Pia: 08.00 - 16.00',
    },
    {
      name: 'Malacky 2',
      address: 'Pezinská ulica 5547/1',
      detail: 'pri Shell pumpe',
      phone: '+421 905 896 685',
      email: 'info@epalety.sk',
      hours: 'Pon - Pia: 08.00 - 16.00',
    },
    {
      name: 'Kúty',
      address: 'Bratislavská cesta 1352',
      detail: '',
      phone: '+421 905 896 685',
      email: 'info@epalety.sk',
      hours: 'Pon - Pia: 08.00 - 16.00',
    },
  ]

  if (submitted) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-2xl">
          <div className="card text-center">
            <div className="text-6xl mb-4">✓</div>
            <h2 className="text-3xl font-heading font-bold text-forest mb-4">
              Správa odoslaná!
            </h2>
            <p className="text-gray-600 mb-6">
              Ďakujeme za vašu správu. Odpovieme vám čo najskôr.
            </p>
            <Button onClick={() => setSubmitted(false)}>
              Odoslať ďalšiu správu
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-forest mb-4">
            Kontaktujte nás
          </h1>
          <p className="text-lg text-gray-600">
            Máte otázky? Radi vám pomôžeme
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="card space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Meno a priezvisko *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ján Novák"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jan.novak@example.sk"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefón
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+421 900 123 456"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Predmet *
                </label>
                <Input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Predmet správy"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Správa *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-field"
                  placeholder="Vaša správa..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto">
                Odoslať správu
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="card">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{info.icon}</div>
                  <div>
                    <h3 className="font-heading font-semibold text-forest mb-1">
                      {info.title}
                    </h3>
                    {info.link !== '#' ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-orange transition-colors text-sm"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 text-sm">{info.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pobočky Section */}
        <div id="pobocky" className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-forest mb-4">
              Naše pobočky
            </h2>
            <p className="text-lg text-gray-600">
              Vďaka pobočkám sme Vám vždy na blízku a máme dostatočné kapacity pre Vaše potreby
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pobocky.map((pobocka, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-heading font-semibold text-forest mb-3">
                  {pobocka.name}
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600">
                    <strong>Adresa:</strong> {pobocka.address}
                    {pobocka.detail && <span className="block text-gray-500">{pobocka.detail}</span>}
                  </p>
                  <p className="text-gray-600">
                    <strong>Telefón:</strong>{' '}
                    <a href={`tel:${pobocka.phone.replace(/\s/g, '')}`} className="text-orange hover:underline">
                      {pobocka.phone}
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <strong>Email:</strong>{' '}
                    <a href={`mailto:${pobocka.email}`} className="text-orange hover:underline">
                      {pobocka.email}
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <strong>Otváracie hodiny:</strong> {pobocka.hours}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

