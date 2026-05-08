import Link from "next/link"
import { Phone, Mail, Calendar, MessageCircle, Sparkles, Facebook } from "lucide-react"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

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
    <section id="kontakt" className="py-20 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        {/* <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Jak umówić <span className="text-primary">wizytę</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Umówienie sesji jest proste. Wystarczy kilka kroków.
          </p>
        </div> */}

        {/* Steps */}
        {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
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
        </div> */}

        {/* CTA Box */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 blur-2xl -z-10" />

          <div className="p-8 md:p-12 rounded-3xl border border-primary/30 bg-card/60 backdrop-blur-sm text-center glow-gold">
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />

            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              Gotowy na odkrycie?
            </h3>

            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Skontaktuj się ze mną, aby umówić sesję i rozpocząć swoją podróż ku odpowiedziom.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+48502903419"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium transition-all hover:scale-105 glow-gold-hover flex items-center gap-2"
              >
                <Phone size={18} />
                <span>Zadzwoń</span>
              </a>
              <a
                href="mailto:hanna-prus@wp.pl"
                className="px-8 py-4 border border-primary/50 text-foreground rounded-full font-medium transition-all hover:border-primary hover:bg-primary/10 flex items-center gap-2"
              >
                <Mail size={18} />
                <span>Napisz email</span>
              </a>
            </div>

            {/* Social media icons */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <a
                href="https://www.facebook.com/profile.php?id=100063656aboratory"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary/20 hover:border-primary/50 hover:scale-110 glow-gold-hover"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/48502903419"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary/20 hover:border-primary/50 hover:scale-110 glow-gold-hover"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
