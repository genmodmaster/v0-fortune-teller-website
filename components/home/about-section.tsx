import { Star } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-primary/40" />
          <Star className="w-5 h-5 text-primary" />
          <div className="h-px w-12 bg-primary/40" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-12">
          O mnie
        </h2>

        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <p>
            Jestem <span className="text-primary font-medium">Wróżka Regelinda</span>, w rzeczywistości <span className="text-primary font-medium">Hanna Prus</span> - wróżbitka, astrolożka i praktyk ustawień systemowych z wieloletnim doświadczeniem. Od ponad 30 lat pomagam ludziom odnaleźć odpowiedzi na wszelkie pytania życiowe.
          </p>

          <p>
            Moja praktyka łączy starożytną mądrość tarota z wiedzą astrologiczną i nowoczesnymi metodami terapeutycznymi. Każdą sesję traktuję jako spotkanie dwóch dusz - z pełnym szacunkiem i otwartością.
          </p>

          <p>
            Przyjmuję w Warszawie oraz prowadzę sesje online dla osób z całej Polski i zagranicy. Niezależnie od przyjętej formy naszego spotkania, zapewniam przestrzeń pełną zaufania i wsparcia.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="font-serif text-3xl md:text-4xl text-primary mb-2">30+</div>
            <div className="text-sm text-muted-foreground">lat doświadczenia</div>
          </div>
          <div>
            <div className="font-serif text-3xl md:text-4xl text-primary mb-2">?+</div>
            <div className="text-sm text-muted-foreground">przeprowadzonych sesji</div>
          </div>
          <div>
            <div className="font-serif text-3xl md:text-4xl text-primary mb-2">Stacjonarnie</div>
            <div className="text-sm text-muted-foreground">oraz online</div>
          </div>
        </div>
      </div>
    </section>
  )
}
