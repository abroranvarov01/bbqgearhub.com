"use client"

import { Button } from "@/components/ui/button"
import { Flame, ChefHat } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          background: "linear-gradient(135deg, #FFE5D1 0%, #F9C5A1 50%, #FFD1DC 100%)",
        }}
      />

      {/* Smoke particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="smoke-particle absolute w-16 h-16 rounded-full bg-white/20 blur-xl"
            style={{
              left: `${20 + i * 15}%`,
              bottom: "10%",
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-32">
        <h1 className="font-handwritten text-6xl md:text-8xl lg:text-9xl text-[#3C2A21] mb-6 leading-tight">
          Taste the Heat.
          <br />
          Feel the Craft.
        </h1>

        <p className="font-handwritten text-3xl md:text-4xl text-[#3C2A21] mb-4">BBQ Gear with a Human Touch.</p>

        <p className="text-lg md:text-xl text-[#3C2A21]/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Handpicked, fire-tested, and made for moments that matter.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/products">
            <Button
              size="lg"
              className="hand-drawn-border bg-[#E4572E] hover:bg-[#E4572E]/90 text-white px-8 py-6 text-lg font-semibold transition-all hover:scale-105"
            >
              <ChefHat className="mr-2 h-5 w-5" />
              Explore Tools 🍖
            </Button>
          </Link>

          <Link href="/reviews">
            <Button
              size="lg"
              variant="outline"
              className="hand-drawn-border bg-white/80 hover:bg-white text-[#3C2A21] px-8 py-6 text-lg font-semibold transition-all hover:scale-105"
            >
              <Flame className="mr-2 h-5 w-5" />
              Read Reviews 🔥
            </Button>
          </Link>
        </div>

        {/* Hand-drawn grill illustration */}
        <div className="mt-16">
          <svg
            viewBox="0 0 400 200"
            className="w-full max-w-md mx-auto"
            style={{ filter: "drop-shadow(2px 2px 4px rgba(60, 42, 33, 0.3))" }}
          >
            {/* Grill grate */}
            <g className="draw-animation" stroke="#3C2A21" strokeWidth="3" fill="none">
              <line x1="50" y1="100" x2="350" y2="100" />
              <line x1="50" y1="120" x2="350" y2="120" />
              <line x1="50" y1="140" x2="350" y2="140" />
              {[...Array(8)].map((_, i) => (
                <line key={i} x1={70 + i * 40} y1="90" x2={70 + i * 40} y2="150" />
              ))}
            </g>

            {/* Smoke wisps */}
            <g opacity="0.4" stroke="#3C2A21" strokeWidth="2" fill="none">
              <path d="M 150 90 Q 160 70 150 50" className="draw-animation" style={{ animationDelay: "0.5s" }} />
              <path d="M 200 90 Q 210 65 200 40" className="draw-animation" style={{ animationDelay: "0.7s" }} />
              <path d="M 250 90 Q 240 70 250 50" className="draw-animation" style={{ animationDelay: "0.9s" }} />
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
