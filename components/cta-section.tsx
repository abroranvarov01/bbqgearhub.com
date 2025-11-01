"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          background: "linear-gradient(135deg, #FFE5D1 0%, #FFD1DC 50%, #F9C5A1 100%)",
        }}
      />

      {/* Smoke and glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="smoke-particle absolute w-20 h-20 rounded-full bg-white/20 blur-2xl"
            style={{
              left: `${10 + i * 12}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-handwritten text-6xl md:text-8xl text-[#3C2A21] mb-8 leading-tight">
          Grab the Heat.
          <br />
          Join the Crew.
        </h2>

        <p className="text-xl md:text-2xl text-[#3C2A21]/80 mb-12 leading-relaxed">
          Start your journey to better BBQ today
        </p>

        <Link href="/products">
          <Button
            size="lg"
            className="hand-drawn-border bg-[#E4572E] hover:bg-[#E4572E]/90 text-white px-12 py-8 text-2xl font-semibold transition-all hover:scale-110 shadow-2xl"
          >
            <ShoppingCart className="mr-3 h-6 w-6" />
            Shop Now →
          </Button>
        </Link>
      </div>
    </section>
  )
}
