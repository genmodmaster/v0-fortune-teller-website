import { Layers, Sun, Users } from "lucide-react"

const services = [
  {
    icon: Layers,
    title: "Tarot",
    description: "Odkryj ukryte znaczenia i odpowiedzi na nurtujące Cię pytania poprzez starożytną mądrość kart tarota. Każda sesja to głęboka podróż w świat symboli i intuicji.",
  },
  {
    icon: Sun,
    title: "Astrologia",
    description: "Poznaj wpływ gwiazd i planet na Twoje życie. Horoskopy natalne, tranzytowe i synastrie - odkryj kosmiczny plan zapisany na niebie w chwili Twoich narodzin.",
  },
  {
    icon: Users,
    title: "Ustawienia systemowe",
    description: "Metoda terapeutyczna pozwalająca zrozumieć i uwolnić ukryte dynamiki rodzinne. Odkryj źródła blokad i znajdź drogę do harmonii i spełnienia.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Moje <span className="text-primary">usługi</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Każda sesja jest dostosowana do Twoich indywidualnych potrzeb i pytań
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card/60 rounded-2xl border border-border/50 transition-all duration-500 hover:border-primary/50 hover:bg-card/90 card-mystical"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-[var(--mystical-purple)]/10 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-accent/20 transition-all duration-500 glow-gold-hover">
                <service.icon className="w-7 h-7 text-primary group-hover:text-glow transition-all" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
