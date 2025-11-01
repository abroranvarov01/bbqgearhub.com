"use client"

import Link from "next/link"
import { Flame } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-[#3C2A21]/90 backdrop-blur-sm border-b-2 border-[#3C2A21]/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Flame className="h-8 w-8 text-[#E4572E] group-hover:scale-110 transition-transform" />
          <span className="font-handwritten text-2xl md:text-3xl text-[#3C2A21] dark:text-[#FFE5D1]">BBQGearHub</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/about"
            className="text-[#3C2A21] dark:text-[#FFE5D1] hover:text-[#E4572E] dark:hover:text-[#F9C5A1] transition-colors font-medium"
          >
            About
          </Link>
          <Link
            href="/products"
            className="text-[#3C2A21] dark:text-[#FFE5D1] hover:text-[#E4572E] dark:hover:text-[#F9C5A1] transition-colors font-medium"
          >
            Products
          </Link>
          <Link
            href="/reviews"
            className="text-[#3C2A21] dark:text-[#FFE5D1] hover:text-[#E4572E] dark:hover:text-[#F9C5A1] transition-colors font-medium"
          >
            Reviews
          </Link>
          <Link
            href="/tips"
            className="text-[#3C2A21] dark:text-[#FFE5D1] hover:text-[#E4572E] dark:hover:text-[#F9C5A1] transition-colors font-medium"
          >
            Tips
          </Link>
        </nav>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </header>
  )
}
