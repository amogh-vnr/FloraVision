'use client'

export default function TopSellingPlants() {
  const plants = [
    {
      id: 1,
      name: 'Aglaonema plant',
      price: '৳ 300/-',
      description: 'Vibrant tropical plant perfect for indoor spaces',
    },
    {
      id: 2,
      name: 'Plantain Lilies',
      price: '৳ 380/-',
      description: 'Beautiful flowering plant with unique patterns',
    },
    {
      id: 3,
      name: 'Cactus',
      price: '৳ 259/-',
      description: 'Low maintenance succulent plant',
    },
    {
      id: 4,
      name: 'Swiss cheese Plant',
      price: '৳ 400/-',
      description: 'Popular climbing plant with unique leaves',
    },
    {
      id: 5,
      name: 'Sanseviereia plant',
      price: '৳ 450/-',
      description: 'Snake plant with air purifying properties',
    },
    {
      id: 6,
      name: 'Argan plant',
      price: '৳ 359/-',
      description: 'Exotic plant with wonderful foliage',
    },
  ]

  return (
    <section className="bg-slate-950/45 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Our Top Selling Plants
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plants.map((plant) => (
            <div key={plant.id} className="bg-slate-950/60 rounded-lg overflow-hidden hover:bg-slate-950/70 transition">
              {/* Image Placeholder */}
              <div className="bg-slate-700 h-40 flex items-center justify-center">
                <span className="text-gray-500">Plant Image</span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2">{plant.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{plant.description}</p>
                <p className="text-green-400 font-bold text-lg mb-4">{plant.price}</p>

                <button className="w-full bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition border border-slate-600">
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
