import { Layers, Sun, Users, Monitor, MapPin, Star, Moon } from "lucide-react"

const serviceCategories = [
  {
    title: "Tarot",
    icon: Layers,
    description: "Doświadcz magii kart Tarota z Wróżką Regelindą, gdy odkrywa tajemnice twojej przeszłości, teraźniejszości i przyszłości.",
    services: [
      {
        name: "Sesja Kart Tarota",
        description: "Każda sesja jest indywidualnie dopasowana, aby dać ci nowe spojrzenie na sytuację i pomóc w podjęciu decyzji.",
        duration: "60 min",
        price: "350 zł",
      },
      // {
      //   name: "Rozkład rozszerzony",
      //   description: "Głębsza analiza sytuacji z wykorzystaniem pełnego rozkładu kart.",
      //   duration: "60 min",
      //   price: "200 zł",
      // },
      // {
      //   name: "Sesja kompleksowa",
      //   description: "Szczegółowa analiza wielu obszarów życia z interpretacją i poradami.",
      //   duration: "90 min",
      //   price: "280 zł",
      // },
    ],
  },
  {
    title: "Astrologia",
    icon: Sun,
    description: "Odkryj swoją unikalną ścieżkę życiową dzięki spersonalizowanym horoskopom.",
    services: [
      {
        name: "Horoskop osobisty",
        description: "Dokładna analiza cech, wyzwań i możliwości na podstawie daty, godziny i miejsca urodzenia oraz potencjałów w życiu.",
        duration: "60 min",
        price: "1500 zł",
      },
      // {
      //   name: "Tranzyt roczny",
      //   description: "Prognoza astrologiczna na nadchodzący rok z najważniejszymi datami.",
      //   duration: "60 min",
      //   price: "220 zł",
      // },
      // {
      //   name: "Synastria (związek)",
      //   description: "Analiza zgodności dwóch horoskopów - idealna dla par i relacji.",
      //   duration: "90 min",
      //   price: "350 zł",
      // },
    ],
  },
  {
    title: "Ustawienia systemowe",
    icon: Users,
    description: "Uwolnij ukryte dynamiki rodzinne i znajdź drogę do harmonii.",
    services: [
      {
        name: "Sesja indywidualna",
        description: "Praca nad jednym tematem lub problemem z wykorzystaniem figur.",
        duration: "90 min",
        price: "300 zł",
      },
      // {
      //   name: "Sesja pogłębiona",
      //   description: "Kompleksowa praca nad złożonymi wzorcami rodzinnymi.",
      //   duration: "120 min",
      //   price: "400 zł",
      // },
    ],
  },
]

const sessionTypes = [
  {
    icon: MapPin,
    title: "Sesje stacjonarne",
    description: "Spotkania osobiste ze mną w gabinecie - al. Jana Pawła II, wysokość ul. Grzybowskiej, w samym centrum Warszawy.",
    note: "Dostępne 24/7",
  },
  {
    icon: Monitor,
    title: "Sesje online",
    description: "Wygodne spotkania przez WhatsApp z dowolnego miejsca na świecie.",
    note: "Ceny takie same jak sesje stacjonarne",
  },
  // {
  //   icon: MapPin,
  //   title: "Sesje stacjonarne",
  //   description: "Osobiste spotkania w kameralnym gabinecie w centrum Warszawy.",
  //   note: "Dostępne od poniedziałku do piątku",
  // },
]

export function ServicesList() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Service Categories */}
        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground">{category.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid gap-4">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="group p-6 bg-card/50 rounded-2xl border border-border/50 transition-all duration-300 hover:border-primary/30 hover:bg-card/70"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                      <div className="flex items-center gap-6 md:gap-8">
                        <div className="text-center">
                          <div className="text-sm text-muted-foreground mb-1">Czas</div>
                          <div className="text-foreground font-medium">{service.duration}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-muted-foreground mb-1">Cena</div>
                          <div className="text-primary font-serif text-xl">{service.price}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative divider */}
              {categoryIndex < serviceCategories.length - 1 && (
                <div className="flex items-center justify-center gap-3 mt-12">
                  <div className="h-px w-24 bg-gradient-to-r from-transparent to-border" />
                  <Star className="w-3 h-3 text-primary/40" />
                  <Moon className="w-4 h-4 text-accent/30" />
                  <Star className="w-3 h-3 text-primary/40" />
                  <div className="h-px w-24 bg-gradient-to-l from-transparent to-border" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Session Types */}
        <div className="mt-20">
          <h2 className="font-serif text-2xl md:text-3xl text-center text-foreground mb-10">
            Rodzaje <span className="text-primary">sesji</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {sessionTypes.map((type, index) => (
              <div
                key={index}
                className="p-6 bg-card/50 rounded-2xl border border-border/50 transition-all duration-300 hover:border-primary/30"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <type.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-2">{type.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                    <p className="text-xs text-primary/80">{type.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
