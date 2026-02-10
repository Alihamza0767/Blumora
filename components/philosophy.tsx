"use client"

import { useEffect, useRef, useState } from "react"

export function Philosophy() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="philosophy" ref={sectionRef} className="py-32 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div
          className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-secondary mb-6">{"Our Philosophy"}</p>

          <h2 className="text-5xl md:text-7xl font-light leading-tight mb-12 text-balance">
            {"Growth rooted in"}
            <br />
            <span className="text-secondary italic">{"authenticity"}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-xl text-foreground/80 leading-relaxed mb-8">
                {
                  "We believe that every brand has a unique story waiting to bloom. Our approach combines strategic thinking with creative intuition to help you communicate with clarity and purpose."
                }
              </p>
              <p className="text-xl text-foreground/80 leading-relaxed">
                {
                  "Like a garden that needs both patience and intention, your brand deserves thoughtful cultivation not rushed trends or hollow tactics."
                }
              </p>
            </div>

            <div className="space-y-8">
              {[
                { title: "Clarity", description: "We distill complex ideas into simple, powerful messages" },
                { title: "Intention", description: "Every decision is purposeful and aligned with your values" },
                { title: "Growth", description: "Sustainable strategies that evolve with your brand" },
              ].map((value, index) => (
                <div
                  key={value.title}
                  className={`p-6 rounded-xl transition-all duration-700 cursor-pointer ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  } ${
                    hoveredIndex === index
                      ? "bg-secondary/5 shadow-lg -translate-y-2 border-l-4 border-secondary"
                      : "bg-transparent border-l-4 border-transparent"
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <h3
                    className="text-2xl font-semibold mb-3 text-primary transition-transform duration-300"
                    style={{ transform: hoveredIndex === index ? "translateX(8px)" : "translateX(0)" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-lg text-foreground/70 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
