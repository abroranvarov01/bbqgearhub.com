import Link from "next/link"
import { ArrowLeft, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BBQTips } from "@/components/bbq-tips"

export default function TipsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFE5D1] via-[#FFC857] to-[#F9C5A1] dark:from-[#3C2A21] dark:via-[#5C4033] dark:to-[#3C2A21]">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Lightbulb className="h-12 w-12 text-[#FFC857]" />
              <h1 className="font-handwritten text-5xl md:text-7xl text-[#3C2A21] dark:text-[#FFE5D1]">
                BBQ Tips & Tricks
              </h1>
            </div>
            <p className="text-lg text-[#3C2A21]/80 dark:text-[#F9C5A1] max-w-2xl mx-auto">
              Master the art of grilling with expert advice and techniques
            </p>
          </div>

          {/* Tips Section */}
          <BBQTips />

          {/* Back Button */}
          <div className="text-center mt-12">
            <Link href="/">
              <Button className="hand-drawn-border bg-[#E4572E] hover:bg-[#E4572E]/90 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
