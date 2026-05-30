"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Mail, Github, Linkedin, Notebook } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          {/* Portfolio */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">{t("footer.portfolio")}</h3>
            <div className="space-y-3">
              <div
                className="text-white/75 hover:text-white transition-colors cursor-pointer"
                onClick={() => scrollToSection("portfolio")}
              >
                {t("footer.portfolio.design")}
              </div>
            </div>
          </div>

          {/* About Me */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">{t("footer.about")}</h3>
            <div className="space-y-3">
              <div
                className="text-white/75 hover:text-white transition-colors cursor-pointer"
                onClick={() => scrollToSection("about")}
              >
                {t("footer.about.bio")}
              </div>
              <div
                className="text-white/75 hover:text-white transition-colors cursor-pointer"
                onClick={() => scrollToSection("talks")}
              >
                {t("footer.about.talks")}
              </div>
              <div
                className="text-white/75 hover:text-white transition-colors cursor-pointer"
                onClick={() => scrollToSection("blog")}
              >
                {t("footer.about.articles")}
              </div>
            </div>
          </div>

          {/* Let's Connect */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">{t("footer.connect")}</h3>
            <p className="text-white/75 mb-4">
              {t("footer.connect.project")}
            </p>
            <p className="text-white/75 mb-6 text-lg font-mono">anasseyahanan@gmail.com</p>

            <div className="mb-6">
              <Button
                className="glass glass-hover border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 group transition-all duration-300 hover:scale-105"
                onClick={() =>
                  window.open("mailto:anasseyahanan@gmail.com", "_blank")
                }
              >
                <Mail className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                {t("about.cta")}
              </Button>
            </div>

            <div className="flex space-x-4 justify-center md:justify-start">
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                onClick={() => window.open("https://github.com/Anasseyahnn", "_blank")}
                title="GitHub"
              >
                <Github className="w-5 h-5 text-white" />
              </Button>
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                onClick={() => window.open("https://linkedin.com/in/anasse-yahanan-bouagba-3b39aa242/", "_blank")}
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </Button>
              <Button
                size="icon"
                className="glass glass-hover rounded-full border-white/20 hover:border-white/40"
                onClick={() => window.open("https://kaggle.com/anasseyahanan", "_blank")}
                title="Kaggle"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.825 2.25c-.22 0-.44.08-.6.24l-5.6 5.6c-.33.33-.33.87 0 1.2l5.6 5.6c.16.16.38.24.6.24s.44-.08.6-.24c.33-.33.33-.87 0-1.2l-5.0-5.0 5.0-5.0c.33-.33.33-.87 0-1.2a.84.84 0 0 0-.6-.24zM5.175 2.25c-.48 0-.87.39-.87.87v17.75c0 .48.39.87.87.87h2.25c.48 0 .87-.39.87-.87V3.12c0-.48-.39-.87-.87-.87H5.175zm8.05 13.38l-4.5 4.5c-.33.33-.33.87 0 1.2.16.16.38.24.6.24s.44-.08.6-.24l4.5-4.5c.33-.33.33-.87 0-1.2a.84.84 0 0 0-1.2 0z"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center items-center pt-8 border-t border-white/10">
          <div className="text-white/75 text-sm uppercase tracking-wider">
            {t("footer.made")} <span className="font-bold text-white">ANASSÉ YAHANAN</span> © 2026
          </div>
        </div>
      </div>
    </footer>
  )
}
