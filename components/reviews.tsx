"use client"

const reviews = [
  {
    text: "This thermometer made me feel like a pro.",
    author: "Mike T.",
  },
  {
    text: "My dad said it's the best Father's Day gift he's ever had.",
    author: "Sarah L.",
  },
  {
    text: "Feels handmade — looks fire.",
    author: "James K.",
  },
  {
    text: "Finally, BBQ tools that match my passion for grilling!",
    author: "Carlos R.",
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="py-24 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-handwritten text-5xl md:text-7xl text-[#3C2A21] text-center mb-16">
          Voices from the Grill
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="relative">
              {/* Smoke cloud shape */}
              <div
                className="hand-drawn-border bg-white p-8 rounded-3xl hover:scale-105 transition-all cursor-pointer"
                style={{
                  animation: `smoke-rise ${3 + index * 0.5}s ease-in-out infinite alternate`,
                }}
              >
                <p className="text-lg text-[#3C2A21] mb-4 leading-relaxed italic">"{review.text}"</p>
                <p className="font-handwritten text-2xl text-[#E4572E]">— {review.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
