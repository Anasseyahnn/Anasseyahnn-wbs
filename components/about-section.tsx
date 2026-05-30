"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Mail } from "lucide-react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { t, language } = useLanguage()

  const renderBioWithLinks = (text: string) => {
    // Replace link placeholders with actual JSX links
    const processedText = text
      .replace(
        /\[ASMA\]/g,
        '<span class="text-white font-semibold">ASMA</span>',
      )
      .replace(
        /\[US Embassy in Abidjan\]/g,
        '<a href="https://ci.usembassy.gov/" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">l\'Ambassade des États-Unis à Abidjan</a>',
      )
      .replace(
        /\[US Embassy\]/g,
        '<a href="https://ci.usembassy.gov/" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">US Embassy</a>',
      )
      .replace(
        /\[VerbatimAI Pro\]/g,
        '<span class="text-white font-semibold">VerbatimAI Pro</span>',
      )

    // Process bold text
    const parts = processedText.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        const boldContent = part.slice(2, -2)
        return (
          <strong key={index} className="text-white font-semibold" dangerouslySetInnerHTML={{ __html: boldContent }} />
        )
      }
      return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute -inset-4 glass rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <Image
                  src="/images/profile.jpg"
                  alt="Anassé Yahanan - Data Scientist, AI & LLM Specialist Professional Headshot"
                  width={380}
                  height={380}
                  className="relative rounded-full border-4 border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 object-cover aspect-square"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder-user.jpg"
                  }}
                />
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                {language === "en" ? "About Me – Anassé Yahanan" : "À propos de moi – Anassé Yahanan"}
              </h2>

              <div className="space-y-4 text-white/75 leading-relaxed text-sm sm:text-base">
                <p>{renderBioWithLinks(t("about.bio1"))}</p>
                <p>{renderBioWithLinks(t("about.bio2"))}</p>
                <p>{renderBioWithLinks(t("about.bio3"))}</p>
              </div>

              <div className="flex justify-center lg:justify-start">
                <Button
                  className="glass glass-hover border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 mt-8 group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
                  onClick={() =>
                    window.open("mailto:anasseyahanan@gmail.com", "_blank")
                  }
                >
                  <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  {t("about.cta")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
