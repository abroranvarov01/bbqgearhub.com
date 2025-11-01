import type React from "react"
import type { Metadata } from "next"
import { Caveat, Quicksand } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/header"
import "./globals.css"

const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" })
const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-quicksand" })

export const metadata: Metadata = {
  title: "BBQGearHub - Handcrafted Heat for Your Grill",
  description: "Handpicked BBQ tools and gear. Fire-tested and made for moments that matter.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${caveat.variable} ${quicksand.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
