import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StarBackground } from "@/components/star-background"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/services-section"
import { AboutSection } from "@/components/home/about-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <StarBackground />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
