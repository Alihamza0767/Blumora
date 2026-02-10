"use client"

import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We begin by understanding your story, values, and aspirations through thoughtful conversation",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Together, we craft a clear roadmap that aligns your goals with authentic brand expression",
  },
  {
    number: "03",
    title: "Creation",
    description: "Our team brings the strategy to life through elegant design and compelling storytelling",
  },
  {
    number: "04",
    title: "Growth",
    description: "We support your ongoing evolution with guidance that helps you bloom sustainably",
  },
]

export function Process() {
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
    <section id="process" ref={sectionRef} className="py-32 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-secondary mb-6">{"Our Process"}</p>
          <h2 className="text-5xl md:text-7xl font-light leading-tight text-balance">
            {"A journey of"}
            <br />
            <span className="text-secondary italic">{"intentional"}</span>
            {" growth"}
          </h2>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${200 + index * 150}ms`, transition: "all 0.8s ease-out" }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} text-center md:text-left`}>
                    <div className={`inline-block ${isEven ? "md:float-right" : "md:float-left"}`}>
                      <p className="text-6xl font-light text-secondary/30 mb-4">{step.number}</p>
                      <h3 className="text-3xl font-semibold mb-4 text-foreground">{step.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed max-w-md">{step.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:block w-4 h-4 rounded-full bg-secondary border-4 border-background shadow-lg z-10" />

                  {/* Spacer */}
                  <div className="flex-1" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
