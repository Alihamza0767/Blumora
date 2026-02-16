"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Fawad M Mirza",
    company: "Musanif PVT Limited",
    rating: 5,
    text: "Working with Blumora was excellent. Their team provided clear guidance on management and marketing, took time to understand our vision, and offered thoughtful solutions. Highly recommend for practical, honest marketing advice.",
  },
  {
    name: "James Chen",
    company: "Elevate Design Studio",
    rating: 5,
    text: "Working with Blumora was a game-changer. They didn't just create a design, they cultivated a strategy that has genuinely helped our business flourish.",
  },
  {
    name: "Emma Rodriguez",
    company: "Sustainable Living Co",
    rating: 5,
    text: "The level of intention and clarity in their work is remarkable. Every touchpoint of our brand now reflects our values, and our clients have taken notice.",
  },
  {
    name: "David Park",
    company: "Creative Ventures",
    rating: 5,
    text: "What impressed me most was how Blumora balanced beauty with functionality. Our new visual identity is stunning and converts.",
  },
]

export function Reviews() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
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
    <section id="reviews" ref={sectionRef} className="py-20 px-6 bg-background overflow-hidden">
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .reviews-scroll {
          animation: scroll-left 60s linear infinite;
        }
      `}</style>

      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-secondary mb-6">{"Client Stories"}</p>
          <h2 className="text-5xl md:text-7xl font-light leading-tight text-balance">
            {"Words from those who"}
            <br />
            <span className="text-secondary italic">{"bloomed"}</span>
            {" with us"}
          </h2>
        </div>

        <div className="w-full overflow-hidden">
          <div className="reviews-scroll flex gap-6 w-1000">
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="min-w-[200px] p-6 rounded-xl border border-border/50 bg-muted/30 backdrop-blur-sm transition-all duration-300 hover:border-secondary/30 hover:bg-muted/50"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-lg text-foreground/80 leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>

                {/* Author Info */}
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-secondary">{review.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
