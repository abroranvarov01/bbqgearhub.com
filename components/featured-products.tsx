"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ExternalLink } from "lucide-react"
import Link from "next/link"
import { products } from "@/lib/products-data"

export function FeaturedProducts() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {products.map((product, index) => (
          <Link key={index} href={`/products/${product.slug}`} className="block">
            <Card className="hand-drawn-border bg-white/90 dark:bg-[#3C2A21]/90 backdrop-blur-sm overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer h-full">
              <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-[#FFE5D1] to-[#F9C5A1]">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-3 space-y-1.5">
                <h3 className="font-handwritten text-base text-[#3C2A21] dark:text-[#FFE5D1] leading-tight">
                  {product.name}
                </h3>

                <p className="text-xs text-[#3C2A21]/70 dark:text-[#F9C5A1]/80 leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-2.5 w-2.5 ${
                        i < product.rating
                          ? "fill-[#FFC857] text-[#FFC857]"
                          : "text-[#3C2A21]/20 dark:text-[#FFE5D1]/20"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Button size="sm" className="bg-[#E4572E] hover:bg-[#E4572E]/90 text-white text-xs px-2 py-0.5">
                    View <ExternalLink className="ml-1 h-2 w-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
