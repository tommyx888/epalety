'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/contexts/CartContext'

export function StickyHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const { itemCount } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      setScrollProgress((winScroll / height) * 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Domov' },
    { href: '/products', label: 'Produkty' },
    { href: '/services', label: 'Služby' },
    { href: '/about', label: 'O nás' },
    { href: '/pobocky', label: 'Pobočky' },
    { href: '/contact', label: 'Kontakt' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 transition-all duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`}
      data-scrolled={scrolled}
    >
      {/* Progress bar */}
      <div
        className="h-1 bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="container-custom py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition-all duration-300 group">
          <Image
            src="/logo.jpg"
            alt="EPALETY.SK Logo"
            width={180}
            height={60}
            className="h-16 md:h-20 w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-neutral-text font-medium hover:text-primary-600 transition-all duration-300 relative group"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-primary-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          <Link
            href="/cart"
            className="relative p-2 hover:text-primary-600 transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg animate-pulse">
                {itemCount}
              </span>
            )}
          </Link>
          {/* CTA Button */}
          <Link
            href="/quote"
            className="btn-primary hidden md:inline-block"
          >
            Získať ponuku
          </Link>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

