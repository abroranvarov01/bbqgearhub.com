import { notFound } from "next/navigation"
import { Star, ShoppingCart, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { products } from "@/lib/products-data"

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFE5D1] via-[#F9C5A1] to-[#FFC857] pt-32 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link href="/products">
          <Button className="bg-[#E4572E] hover:bg-[#E4572E]/90 text-white">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </Button>
        </Link>

        <Card className="hand-drawn-border bg-white p-8 md:p-12 mt-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden hand-drawn-border">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="font-handwritten text-4xl md:text-5xl text-[#3C2A21] mb-4 leading-tight">
                  {product.name}
                </h1>
                <p className="text-lg text-[#3C2A21]/70 leading-relaxed">{product.description}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < product.rating ? "fill-[#FFC857] text-[#FFC857]" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-[#3C2A21]/70">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div></div>

              {/* Full Description */}
              <div className="prose prose-sm">
                <p className="text-[#3C2A21]/80 leading-relaxed">{product.fullDescription}</p>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-semibold text-xl text-[#3C2A21] mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-[#3C2A21]/80">
                      <span className="text-[#E4572E] mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="hand-drawn-border bg-[#E4572E] hover:bg-[#E4572E]/90 text-white flex-1"
                  asChild
                >
                  <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Buy on Amazon
                  </a>
                </Button>
              </div>

              {/* Affiliate Disclosure */}
              <p className="text-xs text-[#3C2A21]/60 italic pt-4 border-t border-[#3C2A21]/10">
                As an Amazon Associate, we earn from qualifying purchases. This helps support our site at no extra cost
                to you.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
