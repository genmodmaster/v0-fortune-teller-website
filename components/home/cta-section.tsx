import Link from "next/link"
import { Sparkles, Star } from "lucide-react"

export function CTASection() {
  return (
    <section id="kontakt" className="py-24 px-6 relative">
      {/* Decorative stars */}
      <div className="absolute top-12 left-1/4 text-primary/30 animate-float">
        <Star size={16} />
      </div>
      <div className="absolute bottom-16 right-1/4 text-accent/40 animate-float" style={{ animationDelay: "1.5s" }}>
        <Sparkles size={20} />
      </div>
      <div className="absolute top-1/2 left-10 text-[var(--mystical-purple)]/30 animate-twinkle" style={{ animationDelay: "0.8s" }}>
        <Star size={12} />
      </div>
      <div className="absolute top-1/3 right-10 text-[var(--celestial-pink)]/30 animate-twinkle" style={{ animationDelay: "2s" }}>
        <Sparkles size={14} />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <div className="relative inline-block">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-[var(--mystical-purple)]/15 to-primary/20 blur-3xl -z-10 animate-pulse" style={{ animationDuration: "4s" }} />

          <div className="p-12 md:p-16 rounded-3xl border border-primary/40 bg-card/70 backdrop-blur-sm glow-celestial card-mystical">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Gotowy na <span className="text-primary">odkrycie</span>?
            </h2>

            <p className="text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
              Umów się na sesję i pozwól, że poprowadzę Cię przez karty, gwiazdy lub ustawienia systemowe ku odpowiedziom, których szukasz.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+48502903419"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium transition-all duration-300 hover:scale-105 animate-pulse-glow flex items-center gap-2"
              >
                <span>Zadzwoń teraz</span>
              </a>
              <a
                href="mailto:hanna-prus@wp.pl"
                className="px-8 py-4 border border-primary/50 text-foreground rounded-full font-medium transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:glow-gold"
              >
                Napisz email
              </a>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Sesje stacjonarne w Warszawie oraz online
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
