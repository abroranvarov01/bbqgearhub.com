"use client"

import { Shield, Flame, Users } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Trusted Brands",
    description: "Only the best-reviewed and most reliable BBQ gear makes our list",
  },
  {
    icon: Flame,
    title: "Real Reviews by Real Grillers",
    description: "Honest feedback from people who actually use these tools",
  },
  {
    icon: Users,
    title: "Designed for Connection",
    description: "Tools that bring people together around great food",
  },
]

export function WhyChoose() {
  return (
    <section className="py-24 px-4 bg-white/70">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-handwritten text-5xl md:text-7xl text-[#3C2A21] text-center mb-16">
          Why Choose BBQGearHub
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="hand-drawn-border bg-white p-8 text-center group hover:scale-105 transition-all cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FFE5D1] mb-6 group-hover:bg-[#E4572E] transition-colors">
                  <Icon className="h-10 w-10 text-[#E4572E] group-hover:text-white transition-colors" />
                </div>

                <h3 className="font-handwritten text-3xl text-[#3C2A21] mb-4">{reason.title}</h3>

                <p className="text-[#3C2A21]/80 leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
