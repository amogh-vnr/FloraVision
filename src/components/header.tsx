'use client'

import { Search, ShoppingBag, ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobilePlantsOpen, setMobilePlantsOpen] = useState(false)

  return (
    <header className="bg-transparent backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
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
              <span data-fallback className="hidden text-white font-bold text-sm">F</span>
            </div>
            <span className="text-white font-bold text-[22px] tracking-wide font-sans">FloraVision.</span>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-12"
            style={{ fontFamily: '"Indie Flower", cursive', fontSize: '24px', fontWeight: 400 }}
          >
            <a href="#" className="hover:text-brand-accent transition tracking-wide" style={{ color: '#EFEFEF' }}>
              Home
            </a>
            <PlantsTypeDropdown />
            <a href="#" className="hover:text-white transition tracking-wide" style={{ color: '#EFEFEF' }}>
              More
            </a>
            <a href="#" className="hover:text-white transition tracking-wide" style={{ color: '#EFEFEF' }}>
              Contact
            </a>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-7">
            <button className="text-white hover:text-brand-accent transition">
              <Search size={22} strokeWidth={1.5} />
            </button>
            <button className="text-white hover:text-brand-accent transition">
              <ShoppingBag size={22} strokeWidth={1.5} />
            </button>
            <button
              className="text-white hover:text-brand-accent transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="3" y1="15" x2="21" y2="15"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav
            className="md:hidden pb-4 flex flex-col gap-3"
            style={{ fontFamily: '"Indie Flower", cursive', fontSize: '22px' }}
          >
            <a href="#" className="hover:text-brand-accent transition block" style={{ color: '#EFEFEF' }}>Home</a>

            {/* Mobile Plants Type accordion */}
            <div>
              <button
                onClick={() => setMobilePlantsOpen(!mobilePlantsOpen)}
                className="flex items-center gap-2 hover:text-brand-accent transition w-full text-left"
                style={{ color: '#EFEFEF' }}
              >
                Plants Type
                <ChevronDown
                  size={16}
                  className="mt-0.5 transition-transform duration-300"
                  style={{ transform: mobilePlantsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>
              {mobilePlantsOpen && (
                <div className="pl-4 mt-2 flex flex-col gap-1" style={{ fontSize: '18px' }}>
                  {[
                    { label: 'Indoor Plants', emoji: '🪴' },
                    { label: 'Outdoor Plants', emoji: '🌳' },
                    { label: 'Succulents', emoji: '🌵' },
                    { label: 'Flowering Plants', emoji: '🌸' },
                    { label: 'Air Purifiers', emoji: '🍃' },
                    { label: 'Rare & Exotic', emoji: '✨' },
                  ].map((cat) => (
                    <a
                      key={cat.label}
                      href="#"
                      className="flex items-center gap-2 py-1.5 hover:text-brand-accent transition"
                      style={{ color: '#b0b8a0' }}
                    >
                      <span>{cat.emoji}</span>
                      <span>{cat.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#" className="hover:text-white transition block" style={{ color: '#EFEFEF' }}>More</a>
            <a href="#" className="hover:text-white transition block" style={{ color: '#EFEFEF' }}>Contact</a>
          </nav>
        )}
      </div>
    </header>
  )
}

function PlantsTypeDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const categories = [
    { label: 'Indoor Plants', emoji: '🪴' },
    { label: 'Outdoor Plants', emoji: '🌳' },
    { label: 'Succulents', emoji: '🌵' },
    { label: 'Flowering Plants', emoji: '🌸' },
    { label: 'Air Purifiers', emoji: '🍃' },
    { label: 'Rare & Exotic', emoji: '✨' },
  ]

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 tracking-wide hover:text-brand-accent transition focus:outline-none cursor-pointer"
        style={{ color: '#EFEFEF', fontFamily: '"Indie Flower", cursive', fontSize: '24px', fontWeight: 400 }}
      >
        Plants Type
        <ChevronDown
          size={16}
          className="mt-0.5 transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      {/* Dropdown Panel */}
      <div
        className="absolute top-full left-1/2 mt-4 w-56 rounded-2xl border border-[#383d31] shadow-2xl"
        style={{
          background: '#282d22',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transform: open
            ? 'translateX(-50%) translateY(0px)'
            : 'translateX(-50%) translateY(-8px)',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
          fontFamily: '"Indie Flower", cursive',
          fontSize: '18px',
        }}
      >
        {/* Arrow tip */}
        <div
          className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 rotate-45 border-t border-l border-[#383d31]"
          style={{ background: '#282d22' }}
        />

        <div className="py-3 px-1 relative z-10">
          {categories.map((cat, i) => (
            <a
              key={cat.label}
              href="#"
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl transition-colors duration-150 hover:bg-white/5 group"
              style={{
                color: '#EFEFEF',
                borderTop: i !== 0 ? '1px solid rgba(56,61,49,0.4)' : 'none',
              }}
            >
              <span className="text-xl">{cat.emoji}</span>
              <span className="group-hover:text-brand-accent transition-colors">{cat.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
