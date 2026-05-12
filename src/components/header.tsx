'use client'

import { FaBars, FaSearch } from 'react-icons/fa'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-transparent backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/flora-vision-logo.png"
                alt="FloraVision logo"
                className="h-full w-full object-contain"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement
                  img.style.display = 'none'
                  const fallback = img.parentElement?.querySelector('[data-fallback]') as HTMLElement | null
                  if (fallback) fallback.style.display = 'flex'
                }}
              />
              <span
                data-fallback
                className="hidden text-white font-bold text-sm"
              >
                F
              </span>
            </div>
            <span className="text-white font-bold text-xl">FloraVision</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-300 hover:text-white transition">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition">How It Works</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Tips</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Contact</a>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="text-gray-300 hover:text-white transition">
              <FaSearch size={20} />
            </button>
            <button
              className="md:hidden text-gray-300 hover:text-white transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FaBars size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <a href="#" className="text-gray-300 hover:text-white transition block">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition block">How It Works</a>
            <a href="#" className="text-gray-300 hover:text-white transition block">Tips</a>
            <a href="#" className="text-gray-300 hover:text-white transition block">Contact</a>
          </nav>
        )}
      </div>
    </header>
  )
}
