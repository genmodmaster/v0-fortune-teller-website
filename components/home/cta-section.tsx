import Link from "next/link"
import { Sparkles, Star } from "lucide-react"

export function CTASection() {
  return (
    <section id="kontakt" className="py-24 px-6 relative">
      {/* Decorative stars */}
      <div className="absolute top-12 left-1/4 text-primary/20 animate-pulse">
        <Star size={16} />
      </div>
      <div className="absolute bottom-16 right-1/4 text-accent/30 animate-pulse" style={{ animationDelay: "1.5s" }}>
        <Sparkles size={20} />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 blur-3xl -z-10" />
          
          <div className="p-12 md:p-16 rounded-3xl border border-primary/30 bg-card/60 backdrop-blur-sm glow-gold">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Gotowa na <span className="text-primary">odkrycie</span>?
            </h2>
            
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
              Umów się na sesję i pozwól, że poprowadzę Cię przez karty, gwiazdy lub ustawienia systemowe ku odpowiedziom, których szukasz.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+48123456789"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium transition-all hover:scale-105 glow-gold-hover flex items-center gap-2"
              >
                <span>Zadzwoń teraz</span>
              </a>
              <a
                href="mailto:kontakt@wrozka-regelinda.pl"
                className="px-8 py-4 border border-primary/50 text-foreground rounded-full font-medium transition-all hover:border-primary hover:bg-primary/10"
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
