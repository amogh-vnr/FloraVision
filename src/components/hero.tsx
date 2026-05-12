'use client'

import { Play, ChevronRight, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Center Large Plant Background Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center z-0 mt-20">
         {/* The user's large topiary tree image goes here */}
         <div className="w-[800px] h-[800px] bg-brand-light rounded-full opacity-20 flex items-center justify-center">
            <span className="text-brand-muted text-sm">Large Topiary Image Background</span>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Content */}
        <div className="max-w-xl self-start pt-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Earth's Exhale
          </h1>
          <p className="text-brand-muted text-sm md:text-base mb-8 leading-relaxed max-w-sm">
            "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
          </p>
          
          <div className="flex items-center gap-6">
            <button className="border border-white/60 text-white px-8 py-2.5 rounded-xl hover:bg-white hover:text-brand-dark transition text-sm font-medium">
              Buy Now
            </button>
            <button className="flex items-center gap-3 text-white hover:text-brand-accent transition group text-sm font-medium">
              <div className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center group-hover:border-brand-accent transition">
                <Play size={14} className="ml-1 fill-transparent group-hover:fill-brand-accent" />
              </div>
              Live Demo...
            </button>
          </div>

          {/* Floating Review Card (Bottom Left) */}
          <div className="mt-20 md:mt-32">
            <div className="glass-card p-5 flex flex-col gap-4 max-w-xs hover:border-brand-accent transition-colors duration-300">
              <div className="flex items-center gap-3">
                {/* Avatar Placeholder */}
                <div className="w-10 h-10 bg-brand-light rounded-full border border-white/20 shrink-0 flex items-center justify-center overflow-hidden">
                  <span className="text-[10px] text-brand-muted">Avatar</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Ronnie Hamill</h4>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className="fill-brand-accent text-brand-accent" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-brand-muted leading-relaxed">
                I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
              </p>
            </div>
          </div>
        </div>

        {/* Right Floating Plant Card */}
        <div className="mt-16 md:mt-0 self-end md:self-center md:mr-10">
          <div className="glass-card p-6 flex flex-col items-center w-[300px] hover:border-brand-accent transition-colors duration-300">
            {/* Plant Image */}
            <div className="w-48 h-56 -mt-16 mb-4 drop-shadow-2xl flex items-center justify-center">
              <img
                src="/images/plants/aglaonema.png"
                alt="Aglaonema plant"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement
                  if (!img.dataset.fallbackTried) {
                    img.dataset.fallbackTried = '1'
                    img.src = '/aglaonema.png'
                    return
                  }
                  img.style.display = 'none'
                  const fallback = img.parentElement?.querySelector('[data-fallback]') as HTMLElement | null
                  if (fallback) fallback.style.display = 'flex'
                }}
              />
              <div data-fallback className="hidden h-full w-full items-center justify-center bg-brand-light rounded-2xl">
                <span className="text-brand-muted text-xs">Aglaonema</span>
              </div>
            </div>
            
            <div className="w-full text-left">
              <p className="text-xs text-brand-muted mb-1">Indoor Plant</p>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-medium text-white tracking-wide">Aglaonema plant</h3>
                <ChevronRight size={18} className="text-white" />
              </div>
              
              <button className="border border-white/60 text-white px-8 py-2 rounded-xl hover:bg-white hover:text-brand-dark transition text-sm font-medium w-3/4">
                Buy Now
              </button>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-1.5 mt-6">
                <div className="w-4 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
