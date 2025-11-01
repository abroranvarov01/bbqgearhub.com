export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFE5D1] via-[#FFC857] to-[#F9C5A1] py-24 px-4">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 hand-drawn-border">
        <h1 className="font-handwritten text-5xl md:text-6xl text-[#3C2A21] mb-8">Terms of Service</h1>

        <div className="space-y-6 text-[#3C2A21] leading-relaxed">
          <section>
            <h2 className="font-handwritten text-3xl mb-4">Acceptance of Terms</h2>
            <p>
              By accessing and using BBQGearHub, you accept and agree to be bound by the terms and provision of this
              agreement.
            </p>
          </section>

          <section>
            <h2 className="font-handwritten text-3xl mb-4">Affiliate Relationships</h2>
            <p>
              BBQGearHub participates in affiliate marketing programs. When you click on product links and make a
              purchase, we may earn a commission at no additional cost to you.
            </p>
          </section>

          <section>
            <h2 className="font-handwritten text-3xl mb-4">Product Information</h2>
            <p>
              We strive to provide accurate product information and recommendations. However, product specifications,
              availability, and prices are subject to change by the retailers.
            </p>
          </section>

          <section>
            <h2 className="font-handwritten text-3xl mb-4">User Conduct</h2>
            <p>
              You agree to use BBQGearHub only for lawful purposes and in a way that does not infringe the rights of
              others or restrict their use of the website.
            </p>
          </section>

          <section>
            <h2 className="font-handwritten text-3xl mb-4">Limitation of Liability</h2>
            <p>
              BBQGearHub is not responsible for any damages or losses resulting from your use of the website or purchase
              of products through affiliate links.
            </p>
          </section>

          <section>
            <h2 className="font-handwritten text-3xl mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the website constitutes
              acceptance of modified terms.
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
