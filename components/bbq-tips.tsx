"use client"

import { useEffect, useRef, useState } from "react"

const tips = [
  "Don't rush the smoke.",
  "Let your tools rest as your meat does.",
  "Season your grill, not just your food.",
  "Low and slow wins the race.",
  "A clean grill is a happy grill.",
]

export function BBQTips() {
  const [visibleTips, setVisibleTips] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tips.forEach((_, index) => {
            setTimeout(() => {
              setVisibleTips((prev) => [...prev, index])
            }, index * 300)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="tips" ref={sectionRef} className="py-24 px-4 bg-white/70">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-handwritten text-5xl md:text-7xl text-[#3C2A21] text-center mb-16">Handwritten Wisdom</h2>

        <div className="hand-drawn-border bg-[#FFF8F0] p-12 relative">
          {/* Notebook lines */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute left-0 right-0 border-b border-[#E4572E]/10"
                style={{ top: `${(i + 1) * 10}%` }}
              />
            ))}
          </div>

          <div className="space-y-8 relative z-10">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="flex items-start gap-4"
                style={{
                  opacity: visibleTips.includes(index) ? 1 : 0,
                  transform: visibleTips.includes(index) ? "translateX(0)" : "translateX(-20px)",
                  transition: "all 0.5s ease-out",
                }}
              >
                <span className="text-[#E4572E] text-2xl">✍️</span>
                <p className="font-handwritten text-3xl text-[#3C2A21] leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
