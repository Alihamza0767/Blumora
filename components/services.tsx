"use client"

import { useEffect, useRef, useState } from "react"
import { Video, TrendingUp, Palette, Instagram, Network, FolderCode } from "lucide-react"

const services = [
  {
    icon: Instagram,
    title: "Social Media Management",
    description: "We build and manage your social presence to drive engagement, growth, and brand authority",
    features: [
      "Content creation",
      "Posting & Scheduling",
      "Community management",
      "Performance monitoring & optimization",
    ],
  },
  {
    icon: Video,
    title: "Meta Ads",
    description: "We create and scale high-converting Meta ad campaigns that turn clicks into customers",
    features: [
      "Campaign setup & targeting",
      "Creative ad design & copywriting",
      "A/B testing & optimization",
      "ROI tracking & performance scaling",
    ],
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "We craft distinctive brand identities that make your business instantly recognizable",
    features: [
      "Logo & visual system",
      "Color & typography guidelines",
      "Brand messaging & voice",
      "Asset library for web & social",
    ],
  },
  {
    icon: TrendingUp,
    title: "Brand Strategy",
    description: "We develop strategic roadmaps that position your brand for sustainable growth",
    features: [
      "Market & competitor analysis",
      "Positioning & value props",
      "Roadmap & KPI definition",
      "Go-to-market planning",
    ],
  },
  {
    icon: Network,
    title: "Analytics & Reporting",
    description: "We transform data into actionable insights that fuel smarter business decisions",
    features: [
      "KPI tracking & dashboard setup",
      "Campaign performance analysis",
      "Monthly performance reports",
      "Data-driven recommendations",
    ],
  },
  {
    icon: FolderCode,
    title: "Website Development",
    description: "We design and develop high-performing websites that convert visitors into clients",
    features: [
      "Responsive UI & accessibility",
      "Performance & SEO basics",
      "CMS or e-commerce setup",
      "Post-launch monitoring",
    ],
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
          <p className="text-sm uppercase tracking-[0.5em] text-secondary mb-6">{"What We Offer"}</p>
          <h2 className="text-5xl md:text-7xl font-light leading-tight text-balance">
            {"Services that help"}
            <br />
            {"you "}
            <span className="text-secondary italic">{"flourish"}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon
            return ( 
              <div
                key={`${service.title}-${index}`}
                className={`flip-card h-80 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${200 + index * 100}ms`,
                }}
              >
                <div className="flip-card-inner mt-10">
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
                      {service.features?.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-secondary mt-1">{"•"}</span>
                          <span>{feat}</span>
                        </li>
                      ))}
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
