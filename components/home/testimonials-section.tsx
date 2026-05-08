import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Anna K.",
    text: "Sesja z Regelindą otworzyła mi oczy na wiele spraw, których wcześniej nie dostrzegałam. Jej interpretacja kart była niezwykle trafna i pomocna.",
    service: "Tarot",
    rating: 5,
  },
  {
    name: "Marta W.",
    text: "Ustawienia systemowe pomogły mi zrozumieć dynamikę w mojej rodzinie. Regelinda prowadzi sesje z wielką wrażliwością i profesjonalizmem.",
    service: "Ustawienia systemowe",
    rating: 5,
  },
  {
    name: "Katarzyna M.",
    text: "Horoskop urodzeniowy, który otrzymałam, był niesamowicie szczegółowy. Regelinda ma dar do wyjaśniania skomplikowanych aspektów w przystępny sposób.",
    service: "Astrologia",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Opinie <span className="text-primary">klientek</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Zaufało mi już setki osób. Oto co mówią o naszych sesjach.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-card/60 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
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

        <div className="mt-12 text-center">
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
        </div>
      </div>
    </section>
  )
}
