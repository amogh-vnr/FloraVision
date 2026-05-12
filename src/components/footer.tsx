'use client'

import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="pt-24 pb-12 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center shrink-0">
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
                    className="hidden text-white font-bold text-sm bg-brand-light w-full h-full items-center justify-center rounded-lg"
                  >
                    F
                  </span>
                </div>
                <span className="text-white font-bold text-2xl tracking-wide">FloraVision.</span>
              </div>
              <p className="text-white font-medium text-[15px] leading-relaxed max-w-sm">
                "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
              </p>
            </div>
            
            <div className="flex gap-8 mt-16 md:mt-32">
              <a href="#" className="text-white font-bold hover:text-brand-accent transition">FB</a>
              <a href="#" className="text-white font-bold hover:text-brand-accent transition">TW</a>
              <a href="#" className="text-white font-bold hover:text-brand-accent transition">LI</a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 pt-2">
            <h4 className="text-white font-bold text-lg mb-8">Quick Link's</h4>
            <ul className="space-y-6">
              <li><a href="#" className="text-white hover:text-brand-accent transition text-sm border-b border-white pb-1 inline-block">Home</a></li>
              <li><a href="#" className="text-white hover:text-brand-accent transition text-sm border-b border-white pb-1 inline-block">Type's Of plant's</a></li>
              <li><a href="#" className="text-white hover:text-brand-accent transition text-sm border-b border-white pb-1 inline-block">Contact</a></li>
              <li><a href="#" className="text-white hover:text-brand-accent transition text-sm border-b border-white pb-1 inline-block">Privacy</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-4 pt-2 flex flex-col justify-between">
            <div>
              <h4 className="text-white font-bold text-lg mb-8">For Every Update.</h4>
              <div className="flex border border-white rounded-sm overflow-hidden h-12 w-full max-w-sm">
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent text-white px-4 py-2 focus:outline-none placeholder:text-gray-300 text-sm"
                />
                <button className="bg-white text-brand-dark px-6 py-2 font-bold text-sm hover:bg-gray-200 transition">
                  SUBSCRIBE
                </button>
              </div>
            </div>

            <div className="mt-16 md:mt-auto pb-1">
              <p className="text-white text-sm">FloraVision © all right reserve</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
