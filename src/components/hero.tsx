'use client'

export default function Hero() {
  return (
    <section className="bg-transparent py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Earth&apos;s Exhale
            </h1>
            <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
              Breathe in nature. Exhale peace. Bring the essence of greenery to your space, filling it with fresh air and the incredible magic of nature&apos;s breathing companion.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition">
              Discover More
            </button>
          </div>

          {/* Right Featured Product */}
          <div className="flex flex-col items-center">
            <div className="bg-transparent backdrop-blur-sm border border-white/15 rounded-2xl p-6 w-full max-w-sm shadow-none">
              {/* Product Image Placeholder */}
              <div className="bg-transparent rounded-2xl h-64 mb-4 flex items-center justify-center overflow-hidden border border-white/10">
                <img
                  src="/images/plants/aglaonema.png"
                  alt="Aglaonema plant"
                  className="h-full w-full object-contain p-6"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement
                    // If we haven't tried the root fallback yet, try it first
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
                <div data-fallback className="hidden h-full w-full items-center justify-center">
                  <span className="text-gray-400">Aglaonema Image</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-transparent border border-white/20 rounded-full"></div>
                  <span className="text-gray-400 text-sm">Special Plant</span>
                </div>

                <h3 className="text-xl font-bold text-white">Aglaonema plant</h3>

                <p className="text-gray-400 text-sm">Beautiful and easy to maintain tropical plant</p>

                <div className="flex items-center gap-2 pt-2">
                  <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition border border-slate-600">
                    Buy Now
                  </button>
                  <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition">
                    ♡
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
