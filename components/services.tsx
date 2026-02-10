"use client"

import { useEffect, useRef, useState } from "react"
import { Lightbulb, TrendingUp, Palette, Target } from "lucide-react"

const services = [
  {
    icon: Target,
    title: "Brand Strategy",
    description: "Define your unique position and craft a compelling narrative that resonates with your audience",
  },
  {
    icon: Lightbulb,
    title: "Creative Direction",
    description: "Bring your vision to life with thoughtful design that balances beauty and function",
  },
  {
    icon: Palette,
    title: "Visual Identity",
    description: "Create cohesive brand systems that communicate your values across every touchpoint",
  },
  {
    icon: TrendingUp,
    title: "Growth Consulting",
    description: "Develop sustainable strategies that help your brand bloom in meaningful ways",
  },
]

export function Services() {
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
    <section id="services" ref={sectionRef} className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-secondary mb-6">{"What We Offer"}</p>
          <h2 className="text-5xl md:text-7xl font-light leading-tight text-balance">
            {"Services that help"}
            <br />
            {"you "}
            <span className="text-secondary italic">{"flourish"}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`flip-card h-80 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${200 + index * 100}ms`,
                }}
              >
                <div className="flip-card-inner">
                  {/* Front of card */}
                  <div className="flip-card-front p-10 rounded-2xl bg-card border border-border flex flex-col shadow-sm">
                    <div className="mb-6 w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="text-3xl font-semibold mb-4 text-foreground">{service.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                    <div className="mt-auto pt-6 text-sm text-secondary/70 uppercase tracking-wide">
                      {"Hover to explore"}
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="flip-card-back p-10 rounded-2xl bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/50 flex flex-col justify-center shadow-xl">
                    <h3 className="text-2xl font-semibold mb-6 text-foreground">{`${service.title} includes:`}</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-secondary mt-1">{"•"}</span>
                        <span>{"Discovery & research phase"}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-secondary mt-1">{"•"}</span>
                        <span>{"Strategic planning & insights"}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-secondary mt-1">{"•"}</span>
                        <span>{"Implementation support"}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-secondary mt-1">{"•"}</span>
                        <span>{"Ongoing optimization"}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
