import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Philosophy } from "@/components/philosophy"
import { Process } from "@/components/process"
import { Reviews } from "@/components/reviews"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Philosophy />
      <Services />
      <Process />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  )
}
