"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error("Failed")

      setSuccess(true)
      setFormData({ name: "", phone: "", email: "", message: "" })

      setTimeout(() => setSuccess(false), 4000)
    } catch (error) {
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-secondary mb-6">
          Let's Connect
        </p>

        <h2 className="text-5xl md:text-7xl font-light mb-8">
          Ready to help your brand{" "}
          <span className="text-secondary italic">bloom</span>?
        </h2>

        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Share your story with us. We'll get back to you as soon as possible.
        </p>

        {success && (
          <div className="mb-8 px-6 py-4 rounded-xl bg-secondary/10 text-secondary">
            ✅ We got your message and will get back to you ASAP.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-6 py-4 rounded-full border-2 border-border"
            />

            <input
              name="phone"
              placeholder="Mobile number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="px-6 py-4 rounded-full border-2 border-border"
            />
          </div>

          <input
            name="email"
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 rounded-full border-2 border-border"
          />

          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            className="w-full px-6 py-4 rounded-3xl border-2 border-border resize-none"
          />

          <Button
            type="submit"
            disabled={loading}
            className="px-12 py-4 rounded-full hover:scale-105 transition-all"
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  )
}
