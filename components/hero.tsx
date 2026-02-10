"use client"

import { useEffect, useState } from "react"
import { BlumoraIcon } from "./blumora-icon"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float transition-transform duration-300 ease-out"
          style={{
            animationDelay: "0s",
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float transition-transform duration-300 ease-out"
          style={{
            animationDelay: "2s",
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
          }}
        />
        <div
          className="absolute top-1/3 right-1/3 opacity-5 animate-float transition-transform duration-300 ease-out"
          style={{
            animationDelay: "1s",
            transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px) rotate(${mousePosition.x * 0.5}deg)`,
          }}
        >
          <BlumoraIcon className="w-64 h-64" />
        </div>
      </div>

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8 animate-fadeInUp">
            {"Strategic Creative Agency"}
          </p> */}

          <br />
          <br />
          <br />
          <br />
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-[0.95] mb-12 text-balance">
            {"Helping brands"}
            <br />
            <span className="text-secondary font-normal italic">{"bloom"}</span>
            {" with"}
            <br />
            {"clarity & strategy"}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            {"We craft thoughtful strategies and elegant design solutions that help your brand grow with purpose"}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-10 py-4 bg-primary text-primary-foreground rounded-full text-sm tracking-wide uppercase hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
            >
              {"Let's Connect"}
            </a>
            <a
              href="#services"
              className="px-10 py-4 border-2 border-border text-foreground rounded-full text-sm tracking-wide uppercase hover:border-foreground transition-all hover:scale-105 hover:shadow-lg"
            >
              {"Explore Services"}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
