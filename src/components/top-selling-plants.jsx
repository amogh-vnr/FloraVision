import { ShoppingBag } from 'lucide-react'

export default function TopSellingPlants() {
  const plants = [
    {
      id: 1,
      name: 'Aglaonema plant',
      price: 'Rs. 300/-',
      description: 'The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care',
      imageSrc: '/images/plants/aglaonema.png',
    },
    {
      id: 2,
      name: 'Plantain Lilies',
      price: 'Rs. 380/-',
      description: 'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,',
      imageSrc: '/desk-decoration.png',
    },
    {
      id: 3,
      name: 'Cactus',
      price: 'Rs. 259/-',
      description: 'It is known for their ability to thrive in arid environments',
      imageSrc: '/cactus.png',
    },
    {
      id: 4,
      name: 'Swiss cheese Plant',
      price: 'Rs. 400/-',
      description: 'It is a popular tropical houseplant known for its distinctive, perforated leaves',
      imageSrc: '/swiss.png',
    },
    {
      id: 5,
      name: 'Sansevieria plant',
      price: 'Rs. 450/-',
      description: 'It is a popular indoor plant admired for its striking appearance and low-maintenance nature.',
      imageSrc: '/sanse.png',
    },
    {
      id: 6,
      name: 'Agave plant',
      price: 'Rs. 359/-',
      description: 'The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.',
      imageSrc: '/argan.png',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center font-sans">
      
      {/* Title with bracket corners */}
      <div className="mb-28 mt-10 relative inline-block px-6 py-3">
        {/* Top-left corner bracket */}
        <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-accent rounded-tl-sm"></span>
        {/* Bottom-right corner bracket */}
        <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-accent rounded-br-sm"></span>
        <h2 style={{ fontFamily: '"Inter", sans-serif', fontSize: '55px', fontWeight: 600, lineHeight: '100%', letterSpacing: '0%', color: '#ffffff' }}>
          Our Top Selling Plants
        </h2>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
          {plants.map((plant) => (
            <div
              key={plant.id}
              className="bg-[#282d22] rounded-b-[2rem] p-6 pb-8 pt-0 relative flex flex-col border-x border-b border-[#383d31] mt-16 transition-transform hover:-translate-y-2 duration-300"
            >
              {/* Custom Wavy Top Shape using SVG (Subtle Curve) */}
              <svg 
                viewBox="0 0 100 20" 
                preserveAspectRatio="none" 
                className="absolute -top-12 left-[-1px] h-12 pointer-events-none block"
                style={{ width: 'calc(100% + 2px)' }}
              >
                <path d="M0,20 L0,6 Q0,0 6,0 C25,0 25,15 50,15 C75,15 75,0 94,0 Q100,0 100,6 L100,20 Z" fill="#282d22" />
                <path d="M0,20 L0,6 Q0,0 6,0 C25,0 25,15 50,15 C75,15 75,0 94,0 Q100,0 100,6 L100,20" fill="none" stroke="#383d31" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              </svg>

              {/* Popping Image Placeholder */}
              <div className="w-full flex justify-center relative z-10 -mt-32 mb-6">
                <div className="w-48 h-56 drop-shadow-2xl">
                  <img
                    src={plant.imageSrc}
                    alt={plant.name}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col px-2">
                <h3 className="text-[17px] font-medium text-white mb-2 tracking-wide">{plant.name}</h3>
                
                <p className="text-brand-muted text-[11px] leading-[1.6] mb-6 flex-1 pr-4">
                  {plant.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-gray-300 font-medium text-lg">{plant.price}</span>
                  
                  <button className="w-9 h-9 rounded-lg border border-gray-500/50 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-300">
                    <ShoppingBag size={15} />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
