"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm py-4 shadow-sm"
          : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group ml-10">
          <div className="w-10 h-10 flex items-center justify-center overflow-visible transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
          <Image
            src="/blumora logo.png"
            alt="Blumora logo"
            width={564}
            height={564}
            className="object-contain scale-525"
            priority
          />
        </div>

          {/* <span className="text-2xl font-semibold">
            <span className="text-primary">blu</span>
            <span className="text-secondary">mora</span>
          </span> */}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          <a
            href="#philosophy"
            className="text-sm tracking-wide uppercase text-foreground/70 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:transition-all hover:after:w-full"
          >
            Philosophy
          </a>

          <a
            href="#services"
            className="text-sm tracking-wide uppercase text-foreground/70 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:transition-all hover:after:w-full"
          >
            Services
          </a>

          <a
            href="#process"
            className="text-sm tracking-wide uppercase text-foreground/70 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:transition-all hover:after:w-full"
          >
            Process
          </a>

          <a
            href="#contact"
            className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm tracking-wide uppercase hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            Connect
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-foreground/10 py-4">
          <div className="container mx-auto px-6 flex flex-col gap-4 max-w-7xl">
            <a
              href="#philosophy"
              onClick={closeMobileMenu}
              className="text-sm tracking-wide uppercase text-foreground/70 hover:text-foreground transition-colors py-2"
            >
              Philosophy
            </a>

            <a
              href="#services"
              onClick={closeMobileMenu}
              className="text-sm tracking-wide uppercase text-foreground/70 hover:text-foreground transition-colors py-2"
            >
              Services
            </a>

            <a
              href="#process"
              onClick={closeMobileMenu}
              className="text-sm tracking-wide uppercase text-foreground/70 hover:text-foreground transition-colors py-2"
            >
              Process
            </a>

            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm tracking-wide uppercase hover:bg-primary/90 transition-all inline-block w-fit"
            >
              Connect
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
