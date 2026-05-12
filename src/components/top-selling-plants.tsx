'use client'

export default function TopSellingPlants() {
  const plants = [
    {
      id: 1,
      name: 'Aglaonema plant',
      price: '৳ 300/-',
      description: 'Vibrant tropical plant perfect for indoor spaces',
      imageSrc: '/images/plants/aglaonema.png',
    },
    {
      id: 2,
      name: 'Plantain Lilies',
      price: '৳ 380/-',
      description: 'Beautiful flowering plant with unique patterns',
      imageSrc: '/desk-decoration.png'
    },
    {
      id: 3,
      name: 'Cactus',
      price: '৳ 259/-',
      description: 'Low maintenance succulent plant',
      imageSrc: '/cactus.png'
    },
    {
      id: 4,
      name: 'Swiss cheese Plant',
      price: '৳ 400/-',
      description: 'Popular climbing plant with unique leaves',
      imageSrc: '/swiss.png'
    },
    {
      id: 5,
      name: 'Sanseviereia plant',
      price: '৳ 450/-',
      description: 'Snake plant with air purifying properties',
      imageSrc: '/sanse.png'
    },
    {
      id: 6,
      name: 'Argan plant',
      price: '৳ 359/-',
      description: 'Exotic plant with wonderful foliage',
      imageSrc: '/argan.png'
    },
  ]

  return (
    <section className="bg-transparent py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Our Top Selling Plants
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map((plant) => (
            <div
              key={plant.id}
              className="bg-transparent backdrop-blur-sm border border-white/15 rounded-3xl overflow-hidden hover:bg-transparent transition shadow-none"
            >
              {/* Image Placeholder */}
              <div className="bg-transparent w-full aspect-[3/4] overflow-hidden border-b border-white/10">
                {plant.imageSrc ? (
                  <img
                    src={plant.imageSrc}
                    alt={plant.name}
                    className="h-full w-full object-contain"
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
                ) : null}
                <div data-fallback className={`${plant.imageSrc ? 'hidden' : 'flex'} h-full w-full items-center justify-center`}>
                  <span className="text-gray-400">Plant Image</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2">{plant.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{plant.description}</p>
                <p className="text-green-400 font-bold text-lg mb-4">{plant.price}</p>

                <button className="w-full bg-slate-700/80 hover:bg-slate-700 text-white px-4 py-2 rounded-2xl transition border border-white/10">
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
