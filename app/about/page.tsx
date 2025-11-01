export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFE5D1] via-[#FFC857] to-[#F9C5A1] py-24 px-4">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 hand-drawn-border">
        <h1 className="font-handwritten text-5xl md:text-6xl text-[#3C2A21] mb-8">About BBQGearHub</h1>

        <div className="space-y-6 text-[#3C2A21] leading-relaxed">
          <section>
            <h2 className="font-handwritten text-3xl mb-4">Our Story</h2>
            <p>
              BBQGearHub was born from a passion for great BBQ and the belief that the right tools make all the
              difference. We're not just about selling products—we're about creating moments that bring people together
              around the grill.
            </p>
          </section>

          <section>
            <h2 className="font-handwritten text-3xl mb-4">Our Mission</h2>
            <p>
              We handpick every piece of BBQ gear with care, ensuring that each recommendation meets our high standards
              for quality, functionality, and value. Our goal is to help you find the perfect tools for your grilling
              adventures.
            </p>
          </section>

          <section>
            <h2 className="font-handwritten text-3xl mb-4">What We Do</h2>
            <p>
              We curate the best BBQ tools, grills, and accessories from trusted brands. Every product we feature is
              carefully selected based on performance, durability, and customer reviews. We test, research, and compare
              so you don't have to.
            </p>
          </section>

          <section>
            <h2 className="font-handwritten text-3xl mb-4">Why Trust Us?</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Honest, unbiased reviews from real BBQ enthusiasts</li>
              <li>Detailed product comparisons to help you make informed decisions</li>
              <li>Expert tips and guides for better grilling</li>
              <li>Transparent affiliate relationships—we only recommend what we believe in</li>
            </ul>
          </section>

          <section>
            <h2 className="font-handwritten text-3xl mb-4">Join Our Community</h2>
            <p>
              Whether you're a weekend warrior or a BBQ master, we're here to support your grilling journey. Explore our
              curated collection, read our guides, and discover the tools that will take your BBQ to the next level.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-block px-8 py-3 bg-[#3C2A21] text-[#FFE5D1] rounded-full hover:bg-[#2A1F1A] transition-colors font-handwritten text-xl"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
