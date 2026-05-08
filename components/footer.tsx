import Link from "next/link"
import { Facebook, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="font-serif text-xl text-primary">
              Wróżka Regelinda
            </Link>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-2 text-muted-foreground text-sm">
              <MapPin size={14} />
              <span>Warszawa</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Wróżka Regelinda. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  )
}
