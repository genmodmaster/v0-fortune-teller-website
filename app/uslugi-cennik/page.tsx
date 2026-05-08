import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StarBackground } from "@/components/star-background"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { HowToBook } from "@/components/services/how-to-book"

export const metadata = {
  title: "Usługi i cennik | Wróżka Regelinda",
  description: "Poznaj ofertę usług Wróżki Regelindy - tarot, astrologia, ustawienia systemowe. Cennik sesji online i stacjonarnych w Warszawie.",
}

export default function UslugiCennikPage() {
  return (
    <div className="min-h-screen relative">
      <StarBackground />
      <Navigation />
      <main className="relative z-10 pt-24">
        <ServicesHero />
        <ServicesList />
        <HowToBook />
      </main>
      <Footer />
    </div>
  )
}
