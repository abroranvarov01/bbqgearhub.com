"use client"

import { useEffect, useRef, useState } from "react"

export function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
    <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #FFE5D1 50%, transparent 100%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="font-handwritten text-5xl md:text-7xl text-[#3C2A21] text-center mb-20">From Grill to Chill</h2>

        <div className="relative">
          <svg
            viewBox="0 0 800 200"
            className="w-full"
            style={{ filter: "drop-shadow(2px 2px 4px rgba(60, 42, 33, 0.2))" }}
          >
            {/* Path line */}
            <path
              d="M 50 100 Q 200 50, 250 100 T 450 100 Q 600 150, 750 100"
              stroke="#E4572E"
              strokeWidth="4"
              fill="none"
              strokeDasharray="1000"
              strokeDashoffset={isVisible ? "0" : "1000"}
              style={{
                transition: "stroke-dashoffset 2s ease-out",
              }}
            />

            {/* Icons along the path */}
            <g opacity={isVisible ? "1" : "0"} style={{ transition: "opacity 0.5s ease-out 1s" }}>
              {/* Fire */}
              <circle cx="50" cy="100" r="30" fill="#E4572E" opacity="0.2" />
              <text x="50" y="110" textAnchor="middle" fontSize="30">
                🔥
              </text>

              {/* Grill */}
              <circle cx="250" cy="100" r="30" fill="#FFC857" opacity="0.2" />
              <text x="250" y="110" textAnchor="middle" fontSize="30">
                🍖
              </text>

              {/* Plate */}
              <circle cx="450" cy="100" r="30" fill="#F9C5A1" opacity="0.2" />
              <text x="450" y="110" textAnchor="middle" fontSize="30">
                🍽️
              </text>

              {/* Smiles */}
              <circle cx="750" cy="100" r="30" fill="#FFD1DC" opacity="0.2" />
              <text x="750" y="110" textAnchor="middle" fontSize="30">
                😊
              </text>
            </g>
          </svg>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-center">
            <div>
              <p className="font-handwritten text-2xl text-[#3C2A21]">Light the Fire</p>
            </div>
            <div>
              <p className="font-handwritten text-2xl text-[#3C2A21]">Perfect the Cook</p>
            </div>
            <div>
              <p className="font-handwritten text-2xl text-[#3C2A21]">Serve with Love</p>
            </div>
            <div>
              <p className="font-handwritten text-2xl text-[#3C2A21]">Share the Joy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
