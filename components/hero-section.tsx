"use client"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ChevronDown, BarChart3, Cpu, ShieldCheck, GraduationCap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function HeroSection() {
  const { t, language } = useLanguage()

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-28 md:pt-32 pb-12">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(/images/background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div>
          {/* Profile Introduction */}
          <div className="flex items-center justify-center mb-4 sm:mb-8">
            <div className="glass rounded-full p-1 mr-3 sm:mr-4">
              <Image
                src="/images/profile.jpg"
                alt="Anassé Yahanan - Data Scientist, AI & LLM Engineer profile photo"
                width={50}
                height={50}
                className="rounded-full sm:w-[60px] sm:h-[60px] object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder-user.jpg"
                }}
              />
            </div>
            <div className="text-center">
              <p className="text-sm sm:text-lg text-white/75">
                {language === "en" ? (
                  <>
                    Welcome to my <strong>personal portfolio</strong> 👋
                  </>
                ) : (
                  <>
                    Bienvenue sur mon <strong>portfolio personnel</strong> 👋
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="relative mb-6 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white px-2 mb-4">
              {t("hero.title")} <br />
              <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-normal text-white/70 block mt-4 max-w-3xl mx-auto">
                {t("hero.subtitle")}
              </span>
            </h1>

            {/* Python Floating Icon (Top Left) */}
            <div className="absolute -top-8 sm:-top-12 -left-4 sm:-left-8 animate-float-1 transform rotate-12">
              <div className="glass glass-hover rounded-xl sm:rounded-2xl p-2 sm:p-4 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center" title="Python">
                <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.895 2C8.618 2 7.02 3.197 7.02 5.589V7.18H11.97V7.647H5.04C2.868 7.647 2 9.006 2 11.895C2 14.784 2.87 16.143 5.04 16.143H6.883V14.28C6.883 12.186 8.358 10.74 10.452 10.74H16.96V5.589C16.96 3.197 15.172 2 11.895 2ZM9.704 3.75C10.22 3.75 10.638 4.168 10.638 4.684C10.638 5.2 10.22 5.618 9.704 5.618C9.188 5.618 8.77 5.2 8.77 4.684C8.77 4.168 9.188 3.75 9.704 3.75Z" fill="#387EB8"/>
                  <path d="M12.105 22C15.382 22 16.98 20.803 16.98 18.411V16.82H12.03V16.353H18.96C21.132 16.353 22 14.994 22 12.105C22 9.216 21.13 7.857 18.96 7.857H17.117V9.72C17.117 11.814 15.642 13.26 13.548 13.26H7.04V18.411C7.04 20.803 8.828 22 12.105 22ZM14.296 20.25C13.78 20.25 13.362 19.832 13.362 19.316C13.362 18.8 13.78 18.382 14.296 18.382C14.812 18.382 15.23 18.8 15.23 19.316C15.23 19.832 14.812 20.25 14.296 20.25Z" fill="#FFE873"/>
                </svg>
              </div>
            </div>

            {/* R Floating Icon (Middle Left) */}
            <div className="absolute top-12 sm:top-16 -left-4 sm:-left-8 animate-float-2 transform -rotate-6">
              <div className="glass glass-hover rounded-xl sm:rounded-2xl p-2 sm:p-4 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center" title="R Programming">
                <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12S6.477 22 12 22S22 17.523 22 12S17.523 2 12 2ZM11.16 6.32H13.62C15.93 6.32 17.38 7.37 17.38 9.38C17.38 10.97 16.32 11.96 14.73 12.28L17.7 17H14.88L12.06 12.44H11.16V17H8.76V6.32H11.16ZM11.16 8.35V10.45H13.25C14.36 10.45 14.98 9.94 14.98 9.4C14.98 8.86 14.36 8.35 13.25 8.35H11.16Z" fill="#276BBE"/>
                </svg>
              </div>
            </div>

            {/* Docker Floating Icon (Top Right) */}
            <div className="absolute -top-8 sm:-top-12 -right-4 sm:-right-8 animate-float-3 transform rotate-6">
              <div className="glass glass-hover rounded-xl sm:rounded-2xl p-2 sm:p-4 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center" title="Docker">
                <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.983 11.078h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186Zm-2.913 0h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186H11.07c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186Zm-2.913 0h2.118c.103 0 .187-.084.187-.186V8.773c0-.102-.084-.186-.187-.186H8.157c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186Zm-2.912 0h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186H5.245c-.103 0-.187.084-.187.186v2.119c0 .102.084.186.187.186Zm2.912-2.912h2.118c.103 0 .187-.084.187-.186V5.861c0-.102-.084-.186-.187-.186H8.157c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186Zm2.913 0h2.119c.102 0 .186-.084.186-.186V5.861c0-.102-.084-.186-.186-.186H11.07c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186Zm-5.825 0h2.119c.102 0 .186-.084.186-.186V5.861c0-.102-.084-.186-.186-.186H5.245c-.103 0-.187.084-.187.186v2.119c0 .102.084.186.187.186Zm5.825-2.913h2.119c.102 0 .186-.084.186-.186V2.949c0-.103-.084-.187-.186-.187H11.07c-.102 0-.186.084-.186.187v2.118c0 .102.084.186.186.186ZM23.99 12.38c-.287-2.611-2.451-2.937-2.451-2.937s-.186-.03-.231-.03c-.015-.078-.066-.35-.297-.68-.37-.532-.989-.844-1.841-.93-.162-1.393-1.072-2.39-2.584-2.736-.312-.07-.63-.109-.949-.115-.052-.516-.279-1.009-.646-1.378-.456-.459-1.096-.713-1.785-.713H13.1v1.642H11.19c-.312 0-.583.178-.71.442l-.841 1.761H5.438c-.689 0-1.328.254-1.784.713-.377.38-.606.892-.647 1.432-.947.01-1.637.288-2.051.826-.418.543-.5.143-.51 1.056-.035 3.037 1.83 5.485 4.887 6.136.273.058.552.097.832.117.818.06 1.77.067 2.766-.021 5.92-.525 8.948-3.486 10.963-5.26 1.258-1.107 1.828-1.393 2.15-2.02.321-.627.399-.861.34-1.036Z" fill="#2496ED"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-12 px-2">
            <Card className="glass glass-hover p-3 sm:p-6 text-center group">
              <div className="flex items-start justify-center space-x-2 sm:space-x-3">
                <div className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                </div>
                <div>
                  <p className="font-semibold text-white text-xs sm:text-base">{t("hero.card1")}</p>
                </div>
              </div>
            </Card>

            <Card className="glass glass-hover p-3 sm:p-6 text-center group">
              <div className="flex items-start justify-center space-x-2 sm:space-x-3">
                <div className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
                </div>
                <div>
                  <p className="font-semibold text-white text-xs sm:text-base">{t("hero.card2")}</p>
                </div>
              </div>
            </Card>

            <Card className="glass glass-hover p-3 sm:p-6 text-center group">
              <div className="flex items-start justify-center space-x-2 sm:space-x-3">
                <div className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400" />
                </div>
                <div>
                  <p className="font-semibold text-white text-xs sm:text-base">{t("hero.card3")}</p>
                </div>
              </div>
            </Card>

            <Card className="glass glass-hover p-3 sm:p-6 text-center group">
              <div className="flex items-start justify-center space-x-2 sm:space-x-3">
                <div className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
                </div>
                <div>
                  <p className="font-semibold text-white text-xs sm:text-base">{t("hero.card4")}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Scroll Button */}
          <div className="flex justify-center">
            <button
              onClick={scrollToAbout}
              className="animate-gentle-bounce hover:scale-105 transition-all duration-500 group"
            >
              <div className="glass glass-hover rounded-full p-2 sm:p-4 w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center">
                <ChevronDown className="w-5 h-5 sm:w-8 sm:h-8 text-white group-hover:text-white/80 transition-colors duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
