import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function BestCollection() {
  const collectionData = [
    {
      id: 1,
      title: "We Have Small And Best O2 Plants Collection's",
      desc1: 'Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.',
      desc2: 'Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.',
      imageSrc: '/aglaonema.png',
    },
    {
      id: 2,
      title: "Discover Our Exclusive Premium O2 Plants Collection",
      desc1: 'These amazing indoor plants naturally purify your space while adding a touch of vibrant green aesthetics to your daily living environment.',
      desc2: 'They are specifically cultivated to thrive indoors with minimal maintenance, ensuring you get the best air quality effortlessly and it is healther to breathe with a clean air.',
      desc3: 'it refreshes the mood',
      imageSrc: '/argan.png',
    },
    {
      id: 3,
      title: "Breathe Easy With Our Hand-Picked Air Purifiers",
      desc1: 'Incorporating greenery into your space has been proven to reduce stress and increase focus, alongside the immense physical health benefits. It creates perfect asthetic look to your homes',
      desc2: 'Our collection includes resilient varieties that adapt well to different lighting conditions, making them perfect for any room.',
      desc3: 'it refreshes the mood',
      imageSrc: '/sanse.png',
    },
    {
      id: 4,
      title: "Elevate Your Space With Our Top O2 Plants",
      desc1: 'Transform your home into a natural sanctuary. These selected plants are known for their high oxygen output during both day and night.',
      desc2: 'Experience a fresher atmosphere and better sleep quality by simply adding these beautiful botanical companions to your bedroom or living area. It Provides a postive vibe in the overall environment',
      desc3: 'it refreshes the mood',
      imageSrc: '/swiss.png',
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === collectionData.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? collectionData.length - 1 : prev - 1))
  }

  const currentItem = collectionData[currentIndex]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center font-sans">
      
      {/* Title with bracket corners */}
      <div className="mb-24 mt-10 relative inline-block px-6 py-3">
        <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-accent rounded-tl-sm"></span>
        <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-accent rounded-br-sm"></span>
        <h2 style={{ fontFamily: '"Inter", sans-serif', fontSize: '55px', fontWeight: 600, lineHeight: '100%', letterSpacing: '0%', color: '#ffffff' }}>
          Our Best o2
        </h2>
      </div>

      <div className="max-w-5xl mx-auto w-full relative pt-16">
        {/* Sliding Card */}
        <div className="bg-[#282d22] rounded-[3rem] p-8 md:p-14 flex flex-col md:flex-row items-center border border-[#383d31] shadow-2xl relative overflow-visible transition-all duration-500 ease-in-out">
          
          {/* Popping Image on the left — overflows above the card */}
          <div className="w-full md:w-[45%] flex justify-center relative z-10 order-1 md:order-1 mb-8 md:mb-0">
            <div className="w-72 h-80 md:w-96 md:h-[420px] -mt-24 md:-mt-36 drop-shadow-2xl">
              <img
                src={currentItem.imageSrc}
                alt="O2 Plant Collection"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Content on the right */}
          <div className="flex-1 md:pl-10 order-2 md:order-2 z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-wide leading-tight">
              {currentItem.title}
            </h3>
            
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              {currentItem.desc1}
            </p>
            
            <p className="text-gray-300 text-sm mb-10 leading-relaxed">
              {currentItem.desc2}
            </p>

            <div className="flex items-center justify-between mt-auto">
              <button className="border border-white/60 text-white px-8 py-2 rounded-xl hover:bg-white hover:text-brand-dark transition text-sm font-bold tracking-wide">
                Explore
              </button>

              {/* Navigation Controls */}
              <div className="flex items-center gap-4">
                <button onClick={prevSlide} className="text-gray-400 hover:text-white transition">
                  <ChevronLeft size={16} />
                </button>
                <span className="text-white text-xs font-bold tracking-widest">
                  0{currentIndex + 1}/0{collectionData.length}
                </span>
                <button onClick={nextSlide} className="text-gray-400 hover:text-white transition">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Global Pagination Dots Below Card */}
        <div className="flex justify-center gap-2 mt-12">
          {collectionData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-6 bg-white' : 'w-1.5 bg-gray-500'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
