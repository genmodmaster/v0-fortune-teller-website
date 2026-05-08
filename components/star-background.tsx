"use client"

import { useEffect, useState } from "react"

interface Star {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  color: "gold" | "purple" | "white"
}

export function StarBackground() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = []
      const colors: ("gold" | "purple" | "white")[] = ["gold", "purple", "white"]
      for (let i = 0; i < 80; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2.5 + 0.5,
          delay: Math.random() * 5,
          duration: Math.random() * 4 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
      setStars(newStars)
    }
    generateStars()
  }, [])

  const getStarColor = (color: "gold" | "purple" | "white") => {
    switch (color) {
      case "gold":
        return "oklch(0.82 0.14 80 / 0.7)"
      case "purple":
        return "oklch(0.5 0.2 290 / 0.5)"
      case "white":
        return "oklch(0.95 0.05 90 / 0.6)"
    }
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-mystical-gradient">
      {/* Nebula effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[var(--mystical-purple)] opacity-[0.03] blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[var(--mystical-blue)] opacity-[0.04] blur-3xl" />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-[var(--celestial-pink)] opacity-[0.02] blur-3xl" />
      
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: getStarColor(star.color),
            boxShadow: star.size > 1.5 ? `0 0 ${star.size * 2}px ${getStarColor(star.color)}` : undefined,
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      {/* Cosmic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
    </div>
  )
}
