import type React from "react"
import type { Metadata } from "next"
import { Crimson_Pro, Inter } from "next/font/google"
import "./globals.css"

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-crimson",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Blumora — Strategic Creative Agency",
  description: "Helping brands bloom with clarity and intention",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${crimsonPro.variable} ${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
