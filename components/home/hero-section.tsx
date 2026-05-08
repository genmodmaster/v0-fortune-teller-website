import { Sparkles, Star, Moon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 bg-mystical-gradient">
      {/* Celestial glow overlay */}
      <div className="absolute inset-0 bg-celestial-glow" />
      
      {/* Decorative elements */}
      <div className="absolute top-32 left-10 text-primary/40 animate-float">
        <Star size={24} />
      </div>
      <div className="absolute top-40 right-20 text-accent/50 animate-float" style={{ animationDelay: "1s" }}>
        <Moon size={32} />
      </div>
      <div className="absolute bottom-40 left-20 text-primary/30 animate-float" style={{ animationDelay: "2s" }}>
        <Sparkles size={28} />
      </div>
      <div className="absolute top-1/3 right-10 text-accent/30 animate-twinkle" style={{ animationDelay: "0.5s" }}>
        <Star size={16} />
      </div>
      <div className="absolute bottom-1/3 left-1/4 text-primary/20 animate-twinkle" style={{ animationDelay: "1.5s" }}>
        <Sparkles size={20} />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        {/* Portrait with mystical glow */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-10 animate-float" style={{ animationDuration: "8s" }}>
          <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/40 via-accent/30 to-[var(--mystical-purple)]/20 blur-3xl animate-pulse-glow" />
          <div className="relative w-full h-full rounded-full bg-card border-2 border-primary/40 overflow-hidden glow-celestial">
            <Image
              src="/images/HANKA_2.png"
              alt="Wróżka Regelinda - portret"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Name and tagline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 text-glow">
          <span className="gradient-gold">Wróżka Regelinda</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground tracking-widest uppercase mb-8">
          Tarot • Astrologia • Ustawienia systemowe
        </p>
        
        <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          Odkryj mądrość kart, gwiazd i energii systemowych. Pozwól, że poprowadzę Cię ku jaśniejszej przyszłości.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#kontakt"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium transition-all hover:scale-105 glow-gold glow-gold-hover"
          >
            Umów konsultację
          </Link>
          <Link
            href="/uslugi-cennik"
            className="px-8 py-4 border border-primary/50 text-foreground rounded-full font-medium transition-all hover:border-primary hover:bg-primary/10"
          >
            Zobacz usługi
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}
