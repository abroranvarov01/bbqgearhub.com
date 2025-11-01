"use client"

const images = [
  { src: "/bbq-grill-with-smoke.jpg", label: "Perfect Smoke" },
  { src: "/friends-grilling-together.jpg", label: "Good Times" },
  { src: "/grilled-meat-close-up.jpg", label: "Delicious Results" },
  { src: "/bbq-tools-on-table.jpg", label: "Quality Tools" },
  { src: "/family-bbq-party.jpg", label: "Family Moments" },
  { src: "/sunset-bbq-scene.jpg", label: "Golden Hour" },
]

export function Gallery() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #FFD1DC 0%, #FFE5D1 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="font-handwritten text-5xl md:text-7xl text-[#3C2A21] text-center mb-16">
          Fire. Friends. Flavor.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              style={{
                transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (Math.random() * 2)}deg)`,
              }}
            >
              <div className="hand-drawn-border bg-white p-3 transition-all group-hover:scale-105 group-hover:shadow-2xl">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.label}
                  className="w-full aspect-square object-cover rounded"
                />
                <p className="font-handwritten text-2xl text-[#3C2A21] text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
