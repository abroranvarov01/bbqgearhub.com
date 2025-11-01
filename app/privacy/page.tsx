export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFE5D1] via-[#FFC857] to-[#F9C5A1] py-24 px-4">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 hand-drawn-border">
        <h1 className="font-handwritten text-5xl md:text-6xl text-[#3C2A21] mb-8">Privacy Policy</h1>

        <div className="space-y-6 text-[#3C2A21] leading-relaxed">
          <section>
            <h2 className="font-handwritten text-3xl mb-4">Information We Collect</h2>
            <p>
              At BBQGearHub, we respect your privacy. We collect minimal information necessary to provide you with the
              best BBQ gear recommendations and affiliate shopping experience.
            </p>
          </section>

          <section>
            <h2 className="font-handwritten text-3xl mb-4">Cookies</h2>
            <p>
              We use cookies to enhance your browsing experience and remember your preferences. You can manage cookie
              settings through our cookie banner.
            </p>
          </section>

          <section>
            <h2 className="font-handwritten text-3xl mb-4">Amazon Affiliate Disclosure</h2>
            <p>
              BBQGearHub is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
              program designed to provide a means for sites to earn advertising fees by advertising and linking to
              Amazon.com.
            </p>
          </section>

          <section>
            <h2 className="font-handwritten text-3xl mb-4">Third-Party Links</h2>
            <p>
              Our website contains links to Amazon and other third-party websites. We are not responsible for the
              privacy practices of these external sites.
            </p>
          </section>

          <section>
            <h2 className="font-handwritten text-3xl mb-4">Contact Us</h2>
            <p>If you have any questions about our privacy policy, please contact us through our contact page.</p>
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
