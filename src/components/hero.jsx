import { useState } from 'react'
import { Play, ChevronRight, ChevronLeft, Star } from 'lucide-react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const plants = [
    {
      id: 1,
      name: 'Aglaonema plant',
      category: 'Indoor Plant',
      imageSrc: '/images/plants/aglaonema.png',
      fallbackSrc: '/aglaonema.png',
    },
    {
      id: 2,
      name: 'Plantain Lilies',
      category: 'Flowering Plant',
      imageSrc: '/desk-decoration.png',
      fallbackSrc: '/aglaonema.png',
    },
    {
      id: 3,
      name: 'Cactus',
      category: 'Succulent',
      imageSrc: '/cactus.png',
      fallbackSrc: '/aglaonema.png',
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % plants.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + plants.length) % plants.length)
  }

  return (
    <section className="relative pt-32 pb-20 min-h-[90vh] flex items-center justify-center overflow-hidden">
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
                  <img
                    src="/ronie.png"
                    alt="Ronnie Hamill"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
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

        {/* Right Floating Plant Card (Slider) */}
        <div className="mt-16 md:mt-0 self-end md:self-center md:mr-10">
          <div className="bg-[#282d22] rounded-b-[2rem] pt-0 p-6 pb-8 flex flex-col items-center w-[300px] border-x border-b border-[#383d31] relative mt-12 transition-colors duration-300">
            {/* Custom Wavy Top Shape using SVG (Subtle Curve) */}
            <svg 
              viewBox="0 0 100 20" 
              preserveAspectRatio="none" 
              className="absolute -top-12 left-[-1px] h-12 pointer-events-none block"
              style={{ width: 'calc(100% + 2px)' }}
            >
              <path d="M0,20 L0,6 Q0,0 6,0 C25,0 25,4 50,4 C75,4 75,0 94,0 Q100,0 100,6 L100,20 Z" fill="#282d22" />
              <path d="M0,20 L0,6 Q0,0 6,0 C25,0 25,4 50,4 C75,4 75,0 94,0 Q100,0 100,6 L100,20" fill="none" stroke="#383d31" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            </svg>

            {/* Plant Image */}
            <div className="w-48 h-56 -mt-32 mb-6 relative z-10 flex justify-center">
              <div className="w-full h-full drop-shadow-2xl">
                  <img
                    key={currentSlide}
                    src={plants[currentSlide].imageSrc}
                    alt={plants[currentSlide].name}
                    className="w-full h-full object-contain animate-in fade-in slide-in-from-right-4 duration-300"
                    onError={(e) => {
                      e.currentTarget.src = plants[currentSlide].fallbackSrc
                    }}
                  />
              </div>
            </div>
            
            <div className="w-full text-left z-10 px-2">
              <p className="text-xs text-brand-muted mb-1">{plants[currentSlide].category}</p>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-medium text-white tracking-wide">{plants[currentSlide].name}</h3>
                <div className="flex items-center gap-1">
                  <button 
                    onClick={prevSlide}
                    className="hover:bg-white/10 p-1 rounded-full transition-colors group cursor-pointer"
                  >
                    <ChevronLeft size={18} className="text-white group-hover:text-brand-accent transition-colors" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="hover:bg-white/10 p-1 rounded-full transition-colors group cursor-pointer"
                  >
                    <ChevronRight size={18} className="text-white group-hover:text-brand-accent transition-colors" />
                  </button>
                </div>
              </div>
              
              <button className="border border-white/60 text-white px-8 py-2 rounded-xl hover:bg-white hover:text-brand-dark transition text-sm font-medium w-3/4">
                Buy Now
              </button>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-1.5 mt-8">
                {plants.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'w-4 bg-white' : 'w-1 bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
