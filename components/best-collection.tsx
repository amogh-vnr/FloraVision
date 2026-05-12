'use client'

export default function BestCollection() {
  return (
    <section className="bg-slate-950/45 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Our Best 02
        </h2>

        <div className="bg-slate-950/60 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 md:p-12">
            {/* Image Placeholder */}
            <div className="bg-slate-700 rounded-lg h-64 md:h-80 flex items-center justify-center">
              <span className="text-gray-500">Plant Image</span>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                We Have Small And Best 02 Plants Collections
              </h3>

              <p className="text-gray-300 mb-4 leading-relaxed">
                Oxygen-rich environment for your plants. Often referred to as the &apos;02 collection&apos;, these plants thrive through the process of photosynthesis.
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Many plants can help filter indoor air, reducing dust and toxins. Bromeliads and other tropical plants help air circulation.
              </p>

              <button className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg transition border border-slate-600">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
