"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { href: "/", label: "Strona główna" },
    { href: "/uslugi-cennik", label: "Usługi i cennik" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl text-primary hover:text-glow transition-all">
            Wróżka Regelinda
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-all hover:text-primary ${
                  pathname === link.href 
                    ? "text-primary" 
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#kontakt"
              className="px-5 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium transition-all hover:glow-gold glow-gold-hover"
            >
              Umów sesję
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-sm tracking-wide transition-all hover:text-primary ${
                  pathname === link.href 
                    ? "text-primary" 
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#kontakt"
              className="inline-block px-5 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Umów sesję
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
