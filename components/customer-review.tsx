'use client'

import { FaStar } from 'react-icons/fa'

export default function CustomerReview() {
  const reviews = [
    {
      id: 1,
      name: 'Shelly Russell',
      rating: 5,
      text: 'Just got the plants delivered and I&apos;m so happy with the quality. Great service and fast delivery. Highly recommended!',
      avatar: 'S',
    },
    {
      id: 2,
      name: 'Lula Rofison',
      rating: 5,
      text: 'Best quality plants I&apos;ve ever ordered online. Customer service was excellent and they answered all my questions quickly.',
      avatar: 'L',
    },
    {
      id: 3,
      name: 'Carol Huels',
      rating: 5,
      text: 'Amazing selection of plants and wonderful customer care. The plants arrived in perfect condition. Will definitely order again!',
      avatar: 'C',
    },
  ]

  return (
    <section className="bg-slate-950/45 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Customer Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-slate-950/60 p-6 rounded-lg hover:bg-slate-950/70 transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{review.avatar}</span>
                </div>
                <div>
                  <h3 className="text-white font-bold">{review.name}</h3>
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <FaStar key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
