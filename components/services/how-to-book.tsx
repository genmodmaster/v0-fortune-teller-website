import Link from "next/link"
import { Phone, Mail, Calendar, MessageCircle, Sparkles } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    title: "Wybierz usługę",
    description: "Zdecyduj, która forma konsultacji najlepiej odpowiada Twoim potrzebom.",
  },
  {
    icon: Phone,
    title: "Skontaktuj się",
    description: "Zadzwoń lub napisz, aby umówić termin sesji.",
  },
  {
    icon: Calendar,
    title: "Potwierdź termin",
    description: "Otrzymasz potwierdzenie z wszystkimi szczegółami spotkania.",
  },
]

export function HowToBook() {
  return (
    <section className="py-20 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Jak umówić <span className="text-primary">wizytę</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Umówienie sesji jest proste. Wystarczy kilka kroków.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative inline-block mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-medium flex items-center justify-center">
                  {index + 1}
                </div>
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 blur-2xl -z-10" />
          
          <div className="p-8 md:p-12 rounded-3xl border border-primary/30 bg-card/60 backdrop-blur-sm text-center glow-gold">
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
            
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Gotowa na odkrycie?
            </h3>
            
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Skontaktuj się ze mną, aby umówić sesję i rozpocząć swoją podróż ku odpowiedziom.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+48123456789"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium transition-all hover:scale-105 glow-gold-hover flex items-center gap-2"
              >
                <Phone size={18} />
                <span>Zadzwoń</span>
              </a>
              <a
                href="mailto:kontakt@wrozka-regelinda.pl"
                className="px-8 py-4 border border-primary/50 text-foreground rounded-full font-medium transition-all hover:border-primary hover:bg-primary/10 flex items-center gap-2"
              >
                <Mail size={18} />
                <span>Napisz email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
