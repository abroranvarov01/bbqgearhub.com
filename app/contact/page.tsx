"use client"

import type React from "react"

import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Contact form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFE5D1] via-[#FFC857] to-[#F9C5A1] py-24 px-4">
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 hand-drawn-border">
        <h1 className="font-handwritten text-5xl md:text-6xl text-[#3C2A21] mb-8">Contact Us</h1>

        <div className="space-y-6 text-[#3C2A21] leading-relaxed mb-8">
          <p>
            Have a question about our BBQ gear recommendations? Want to suggest a product for review? We'd love to hear
            from you!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-handwritten text-2xl mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-[#3C2A21] focus:outline-none focus:ring-2 focus:ring-[#FFC857]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-handwritten text-2xl mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-[#3C2A21] focus:outline-none focus:ring-2 focus:ring-[#FFC857]"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block font-handwritten text-2xl mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-[#3C2A21] focus:outline-none focus:ring-2 focus:ring-[#FFC857]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-handwritten text-2xl mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 rounded-xl border-2 border-[#3C2A21] focus:outline-none focus:ring-2 focus:ring-[#FFC857] resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-[#3C2A21] text-[#FFE5D1] rounded-full hover:bg-[#2A1F1A] transition-colors font-handwritten text-2xl"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-block px-8 py-3 bg-[#3C2A21] text-[#FFE5D1] rounded-full hover:bg-[#2A1F1A] transition-colors font-handwritten text-xl"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
