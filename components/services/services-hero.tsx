import { Star, Moon } from "lucide-react"

export function ServicesHero() {
  return (
    <section className="py-16 px-6 text-center relative">
      {/* Decorative elements */}
      <div className="absolute top-8 left-1/4 text-primary/20 animate-pulse">
        <Star size={16} />
      </div>
      <div className="absolute top-12 right-1/3 text-accent/30 animate-pulse" style={{ animationDelay: "1s" }}>
        <Moon size={20} />
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <Star className="w-5 h-5 text-primary" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
          Usługi i <span className="text-primary">cennik</span>
        </h1>
        
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Wybierz formę konsultacji, która najlepiej odpowiada Twoim potrzebom. 
          Każda sesja jest prowadzona z pełnym zaangażowaniem i troską o Twoje dobro.
        </p>
      </div>
    </section>
  )
}
