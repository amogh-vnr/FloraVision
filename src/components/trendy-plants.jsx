import { ShoppingBag } from 'lucide-react'

export default function TrendyPlants() {
  const trendyItems = [
    {
      id: 1,
      title: 'For Your Desks Decorations',
      price: 'Rs. 599/-',
      description: 'I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!',
      imageSrc: '/desk-decoration.png',
    },
    {
      id: 2,
      title: 'For Your Desks Decorations',
      price: 'Rs. 399/-',
      description: 'The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming',
      imageSrc: '/desk-decoration-2.png',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center relative overflow-hidden">
      {/* Title with bracket corners */}
      <div className="mb-24 mt-10 relative inline-block px-6 py-3">
        <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-accent rounded-tl-sm"></span>
        <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-accent rounded-br-sm"></span>
        <h2 style={{ fontFamily: '"Inter", sans-serif', fontSize: '55px', fontWeight: 600, lineHeight: '100%', letterSpacing: '0%', color: '#ffffff' }}>
          Our Trendy Plants
        </h2>
      </div>

      <div className="w-full max-w-5xl flex flex-col gap-24 md:gap-32 mt-10">
        
        {/* Top Card (Image Left, Text Right) */}
        <div className="relative flex flex-col md:flex-row items-center bg-brand-card/60 backdrop-blur-md rounded-[3rem] p-8 md:p-12 md:pl-0 gap-8 md:gap-12 md:ml-auto w-full md:w-[90%]">
          
          <div className="w-full md:w-1/2 flex justify-center md:-ml-24 relative z-10">
            <div className="w-64 h-64 md:w-80 md:h-80 -mt-20 md:-mt-32">
              <img
                src={trendyItems[0].imageSrc}
                alt="Desk Decoration"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left z-10 md:pr-12">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-wide">{trendyItems[0].title}</h3>
            <p className="text-brand-muted text-sm mb-6 leading-relaxed">
              {trendyItems[0].description}
            </p>
            <div className="flex items-center gap-6 justify-center md:justify-start">
              <span className="text-xl font-bold text-white">{trendyItems[0].price}</span>
              <button className="border border-white/40 text-white px-8 py-2 rounded-xl hover:bg-white hover:text-brand-dark transition text-sm font-medium">
                Explore
              </button>
              <button className="w-10 h-10 rounded-xl border border-white/40 flex items-center justify-center hover:bg-white hover:text-brand-dark text-white transition">
                <ShoppingBag size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Card (Text Left, Image Right) */}
        <div className="relative flex flex-col md:flex-row items-center bg-brand-card/60 backdrop-blur-md rounded-[3rem] p-8 md:p-12 md:pr-0 gap-8 md:gap-12 md:mr-auto w-full md:w-[90%]">
          
          <div className="flex-1 text-center md:text-left z-10 md:pl-12 order-2 md:order-1">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-wide">{trendyItems[1].title}</h3>
            <p className="text-brand-muted text-sm mb-6 leading-relaxed">
              {trendyItems[1].description}
            </p>
            <div className="flex items-center gap-6 justify-center md:justify-start">
              <span className="text-xl font-bold text-white">{trendyItems[1].price}</span>
              <button className="border border-white/40 text-white px-8 py-2 rounded-xl hover:bg-white hover:text-brand-dark transition text-sm font-medium">
                Explore
              </button>
              <button className="w-10 h-10 rounded-xl border border-white/40 flex items-center justify-center hover:bg-white hover:text-brand-dark text-white transition">
                <ShoppingBag size={16} />
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:-mr-24 relative z-10 order-1 md:order-2">
            <div className="w-64 h-64 md:w-80 md:h-80 -mt-20 md:-mb-24">
              <img
                src={trendyItems[1].imageSrc}
                alt="Desk Decoration"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
          
        </div>

      </div>
    </section>
  )
}
