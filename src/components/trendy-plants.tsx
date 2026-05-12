'use client'

export default function TrendyPlants() {
  const trendyItems = [
    {
      id: 1,
      title: 'For Your Desks Decorations',
      price: '৳ 599/-',
      description: 'Enhance your workspace with a beautiful small plant decoration perfect for your work desk',
    },
    {
      id: 2,
      title: 'For Your Desks Decorations',
      price: '৳ 399/-',
      description: 'Add a touch of nature to your desk with these stylish plant holders',
    },
  ]

  return (
    <section className="bg-transparent py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Our Trendy plants
        </h2>

        <div className="flex flex-col gap-8">
          {trendyItems.map((item) => (
            <div
              key={item.id}
              className="bg-transparent backdrop-blur-sm border border-white/15 rounded-3xl overflow-hidden hover:bg-transparent transition w-full max-w-5xl mx-auto shadow-none"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Image Placeholder */}
                <div className="bg-transparent h-48 sm:h-auto sm:w-48 flex items-center justify-center border-r border-white/10">
                  <span className="text-gray-400">Plant Image</span>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                  <p className="text-green-400 font-bold text-lg mb-4">{item.price}</p>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-transparent hover:bg-transparent text-white px-4 py-2 rounded-lg transition border border-white/20">
                      Explore
                    </button>
                    <button className="bg-transparent hover:bg-transparent text-white px-4 py-2 rounded-lg transition border border-white/20">
                      🛒
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
