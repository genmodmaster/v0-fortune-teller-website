import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Mateusz Radel",
    text: "Profesjonalizm, intuicja i niezwykła trafność – Regelinda pomogła mi zrozumieć sytuacje, które wydawały się bez wyjścia. Gorąco polecam!",
    // service: "Mateusz Radel",
    rating: 5,
  },
  {
    name: "Paulina Górska",
    text: "Dzięki konsultacji z Regelindą poczułam się pewniejsza siebie i swoich wyborów. To było inspirujące i bardzo wartościowe doświadczenie!",
    // service: "Ustawienia systemowe",
    rating: 5,
  },
  {
    name: "Magdalena Wiśniewska",
    text: "Ustawienia systemowe u Regelindy pomogły mi lepiej zrozumieć dynamikę mojej rodziny",
    // service: "Astrologia",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Opinie <span className="text-primary">klientów</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Zaufało mi już setki osób. Oto co mówią o naszych sesjach.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card/60 border border-border/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 card-mystical hover:glow-gold"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary drop-shadow-[0_0_3px_var(--primary)]" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {`"${testimonial.text}"`}
              </p>

              <div className="flex items-center justify-between">
                <span className="font-medium text-foreground">{testimonial.name}</span>
                <span className="text-xs text-primary/70 bg-primary/10 px-3 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Więcej opinii znajdziesz na{" "}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Facebook
            </a>
          </p>
        </div> */}
      </div>
    </section>
  )
}
