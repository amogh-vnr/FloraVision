'use client'

import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-slate-950/60 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-white font-bold text-lg">FloraVision</span>
            </div>
            <p className="text-gray-400 text-sm">
              From lush indoor gardens to vibrant outdoor spaces, our plants are cultivated to thrive and bring natural beauty to your surroundings.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">FAQs</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-4">For Every Update</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-slate-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">FloraVision © All rights reserved</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">FB</a>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">TW</a>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">LI</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
