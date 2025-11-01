"use client"

import { Button } from "@/components/ui/button"

interface CookieBannerProps {
  onAccept: () => void
}

export function CookieBanner({ onAccept }: CookieBannerProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#3C2A21] text-white shadow-2xl">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm leading-relaxed">
          🍪 This website uses cookies to enhance your experience and analyze usage. By continuing, you consent to our
          use of cookies.
        </p>
        <Button
          onClick={onAccept}
          className="hand-drawn-border bg-[#E4572E] hover:bg-[#E4572E]/90 text-white whitespace-nowrap"
        >
          Got It 🔥
        </Button>
      </div>
    </div>
  )
}
