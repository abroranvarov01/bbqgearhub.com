"use client"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Watercolor texture background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, #F9C5A1 0%, transparent 50%), radial-gradient(circle at 80% 50%, #FFD1DC 0%, transparent 50%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-handwritten text-5xl md:text-7xl text-[#3C2A21] text-center mb-16">
          Why We Burn with Passion
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-lg leading-relaxed">
          <div className="space-y-4">
            <p className="text-[#3C2A21]">
              We believe barbecuing isn't just cooking — it's{" "}
              <span className="relative inline-block">
                <span className="relative z-10 font-semibold">connection</span>
                <svg className="absolute -bottom-1 left-0 w-full" height="8" viewBox="0 0 100 8">
                  <path
                    d="M 0 4 Q 25 2, 50 4 T 100 4"
                    stroke="#E4572E"
                    strokeWidth="2"
                    fill="none"
                    className="draw-animation"
                  />
                </svg>
              </span>
              .
            </p>
            <p className="text-[#3C2A21]">
              Our tools are designed to bring{" "}
              <span className="relative inline-block">
                <span className="relative z-10 font-semibold">warmth</span>
                <svg className="absolute -bottom-1 left-0 w-full" height="8" viewBox="0 0 100 8">
                  <path
                    d="M 0 4 Q 25 6, 50 4 T 100 4"
                    stroke="#FFC857"
                    strokeWidth="2"
                    fill="none"
                    className="draw-animation"
                    style={{ animationDelay: "0.3s" }}
                  />
                </svg>
              </span>
              , taste, and people together.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-[#3C2A21]">
              Every product we feature has been carefully selected for quality, durability, and the joy it brings to
              outdoor cooking.
            </p>
            <p className="text-[#3C2A21]">
              From wireless thermometers to premium tool sets, we're here to help you create unforgettable moments
              around the grill.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
