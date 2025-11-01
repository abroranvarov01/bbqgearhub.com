"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#3C2A21] text-[#FFE5D1] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="font-handwritten text-5xl mb-4">BBQGearHub</h3>
          <p className="text-[#F9C5A1] leading-relaxed">Handpicked BBQ tools and gear for moments that matter</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <Link href="/privacy" className="hover:text-[#FFC857] transition-colors">
            Privacy
          </Link>
          <span className="text-[#F9C5A1]">|</span>
          <Link href="/terms" className="hover:text-[#FFC857] transition-colors">
            Terms
          </Link>
          <span className="text-[#F9C5A1]">|</span>
          <Link href="/about" className="hover:text-[#FFC857] transition-colors">
            About
          </Link>
          <span className="text-[#F9C5A1]">|</span>
          <Link href="/contact" className="hover:text-[#FFC857] transition-colors">
            Contact
          </Link>
        </div>

        <div className="text-center text-sm text-[#F9C5A1] space-y-2">
          <p>© 2025 BBQGearHub.com — All Rights Reserved.</p>
          <p className="flex items-center justify-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            Amazon Affiliate Partner — As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  )
}

function ShoppingCart({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  )
}
