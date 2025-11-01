"use client"

import { useState, useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturedProducts } from "@/components/featured-products"
import { HowItWorks } from "@/components/how-it-works"
import { WhyChoose } from "@/components/why-choose"
import { Gallery } from "@/components/gallery"
import { Reviews } from "@/components/reviews"
import { ComparisonTable } from "@/components/comparison-table"
import { BBQTips } from "@/components/bbq-tips"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function Home() {
  const [showCookie, setShowCookie] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setShowCookie(true)
    }
  }, [])

  const handleCookieAccept = () => {
    localStorage.setItem("cookieConsent", "true")
    setShowCookie(false)
  }

  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturedProducts />
      <HowItWorks />
      <WhyChoose />
      <Gallery />
      <Reviews />
      <ComparisonTable />
      <BBQTips />
      <CTASection />
      <Footer />
      {showCookie && <CookieBanner onAccept={handleCookieAccept} />}
    </main>
  )
}
