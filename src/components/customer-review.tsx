'use client'

import { Star } from 'lucide-react'

export default function CustomerReview() {
  const reviews = [
    {
      id: 1,
      name: 'Shelly Russel',
      rating: 5,
      text: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
      avatar: 'S',
      avatarSrc: '/shelly.png',
    },
    {
      id: 2,
      name: 'Lula Rolfson',
      rating: 5,
      text: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
      avatar: 'L',
      avatarSrc: '/luna.jpg',
    },
    {
      id: 3,
      name: 'Carol Huels',
      rating: 5,
      text: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
      avatar: 'C',
      avatarSrc: '/carol.png',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center font-sans">
      
      {/* Title with decorative border */}
      <div className="relative mb-20 inline-block mt-10">
        {/* Border box */}
        <div className="absolute inset-0 border border-brand-accent/80 rounded-xl pointer-events-none"></div>
        {/* Mask to hide the bottom border and create the bracket effect */}
        <div className="absolute -bottom-[2px] left-4 right-4 h-1 bg-[#1d2119] z-0 pointer-events-none"></div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-white relative z-10 px-8 py-3">
          Customer Review
        </h2>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#282d22] rounded-[3rem] p-10 md:p-12 transition-colors duration-300 flex flex-col shadow-lg border border-[#383d31]"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-brand-light rounded-full flex items-center justify-center overflow-hidden shrink-0">
                  {review.avatarSrc ? (
                    <img
                      src={review.avatarSrc}
                      alt={review.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement
                        img.style.display = 'none'
                        const fallback = img.parentElement?.querySelector('[data-fallback]') as HTMLElement | null
                        if (fallback) fallback.style.display = 'flex'
                      }}
                    />
                  ) : null}
                  <span
                    data-fallback
                    className={`${review.avatarSrc ? 'hidden' : 'flex'} text-white font-bold text-lg h-full w-full items-center justify-center`}
                  >
                    {review.avatar}
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1 tracking-wide">{review.name}</h3>
                  <div className="flex gap-1.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-brand-accent text-brand-accent" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-300 text-[15px] leading-relaxed tracking-wide">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
