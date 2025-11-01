"use client"

import { Star, ExternalLink } from "lucide-react"

const products = [
  {
    name: "ThermoPro TP20",
    type: "Thermometer",
    heatResistance: "716°F",
    wireless: "Yes",
    rating: 5,
  },
  {
    name: "Weber Grill Set",
    type: "Tools",
    heatResistance: "600°F",
    wireless: "No",
    rating: 4,
  },
  {
    name: "GrillMan Mat",
    type: "Mat",
    heatResistance: "500°F",
    wireless: "-",
    rating: 4,
  },
  {
    name: "Cuisinart Tool Set",
    type: "Tools",
    heatResistance: "550°F",
    wireless: "No",
    rating: 5,
  },
]

export function ComparisonTable() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, #FFE5D1 0%, #F9C5A1 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-handwritten text-5xl md:text-7xl text-[#3C2A21] text-center mb-16">
          Tested by Hands, Not Machines
        </h2>

        <div className="hand-drawn-border bg-white p-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-[#3C2A21]">
                <th className="text-left p-4 font-handwritten text-2xl text-[#3C2A21]">Product</th>
                <th className="text-left p-4 font-handwritten text-2xl text-[#3C2A21]">Type</th>
                <th className="text-left p-4 font-handwritten text-2xl text-[#3C2A21]">Heat Resistance</th>
                <th className="text-left p-4 font-handwritten text-2xl text-[#3C2A21]">Wireless</th>
                <th className="text-left p-4 font-handwritten text-2xl text-[#3C2A21]">Rating</th>
                
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="border-b border-[#3C2A21]/20 hover:bg-[#FFE5D1]/30 transition-colors group">
                  <td className="p-4 font-semibold text-[#3C2A21]">{product.name}</td>
                  <td className="p-4 text-[#3C2A21]">{product.type}</td>
                  <td className="p-4 text-[#3C2A21]">{product.heatResistance}</td>
                  <td className="p-4 text-[#3C2A21]">{product.wireless}</td>
                  <td className="p-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < product.rating ? "fill-[#FFC857] text-[#FFC857]" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
