"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function CompaniesSection() {
  const { t, language } = useLanguage()

  const renderTextWithBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="text-white font-semibold">
            {part.slice(2, -2)}
          </strong>
        )
      }
      return part
    })
  }

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* VerbatimAI Pro Section - Styled Title Left, SaaS Dashboard Mockup Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Branding, Description, Button */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                VerbatimAI Pro
              </span>
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                SaaS Showcase
              </span>
            </div>

            <p className="text-white/75 leading-relaxed text-sm sm:text-base">
              {renderTextWithBold(t("companies.desafia.description"))}
            </p>

            <Button
              className="glass glass-hover border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://github.com/Anasseyahnn", "_blank")}
            >
              {t("companies.desafia.button")}
            </Button>
          </div>

          {/* Right: Modern CSS Mockup representing a premium SaaS Sentiment & Text Dashboard */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            
            <div className="relative glass border border-white/10 rounded-2xl p-4 sm:p-6 bg-black/60 backdrop-blur-xl shadow-2xl transition-all duration-300 group-hover:scale-[1.01]">
              {/* Browser bar */}
              <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="text-xs text-white/40 font-mono pl-4">verbatimai.pro/dashboard</div>
              </div>

              {/* Dashboard mock interface */}
              <div className="grid grid-cols-3 gap-3">
                {/* Stats cards */}
                <div className="col-span-1 glass p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-white/50">{language === "en" ? "SENTIMENT" : "SENTIMENT"}</div>
                  <div className="text-sm font-bold text-emerald-400 mt-1">87.5% Pos.</div>
                </div>
                <div className="col-span-1 glass p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-white/50">{language === "en" ? "VERBATIMS" : "VERBATIMS"}</div>
                  <div className="text-sm font-bold text-blue-400 mt-1">12,450</div>
                </div>
                <div className="col-span-1 glass p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] text-white/50">{language === "en" ? "ACCURACY" : "PRÉCISION"}</div>
                  <div className="text-sm font-bold text-purple-400 mt-1">98.2%</div>
                </div>

                {/* Analytical chart mockup */}
                <div className="col-span-3 glass p-4 rounded-xl bg-white/5 border border-white/5 h-36 flex flex-col justify-between">
                  <div className="text-xs text-white/70 font-semibold">{language === "en" ? "Topic Classification over time" : "Classification Thématique"}</div>
                  {/* Bar graph bars simulated with CSS divs */}
                  <div className="flex items-end justify-between h-20 px-2 pt-2 gap-2">
                    <div className="w-full bg-blue-500/30 hover:bg-blue-500/50 rounded-t h-[40%] transition-all duration-300"></div>
                    <div className="w-full bg-purple-500/30 hover:bg-purple-500/50 rounded-t h-[65%] transition-all duration-300"></div>
                    <div className="w-full bg-blue-500/50 hover:bg-blue-500/70 rounded-t h-[80%] transition-all duration-300"></div>
                    <div className="w-full bg-emerald-500/50 hover:bg-emerald-500/70 rounded-t h-[55%] transition-all duration-300"></div>
                    <div className="w-full bg-indigo-500/50 hover:bg-indigo-500/70 rounded-t h-[95%] transition-all duration-300"></div>
                  </div>
                </div>

                {/* Code list mockup */}
                <div className="col-span-3 glass p-3 rounded-xl bg-white/5 border border-white/5 space-y-2">
                  <div className="flex justify-between items-center text-[10px] text-white/40 font-mono">
                    <span>API Response</span>
                    <span className="text-emerald-400">FASTAPI 200 OK</span>
                  </div>
                  <div className="text-xs text-white/80 font-mono bg-black/40 p-2 rounded border border-white/5 overflow-hidden text-ellipsis whitespace-nowrap">
                    {`{"id": "vbt_721", "tokens": 142, "sentiment": "positive", "code": "Customer Support"}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
