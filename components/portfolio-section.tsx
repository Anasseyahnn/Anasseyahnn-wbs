"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { useEffect, useState } from "react"

interface PortfolioItem {
  id: string
  title: string
  image: string
  link: string
  delay: number
  tags: string[]
  description: {
    en: string
    fr: string
  }
}

const dataScienceItems: PortfolioItem[] = [
  {
    id: "assistant-droit",
    title: "Assistant Droit Ivoirien AI",
    image: "/images/portfolio/assistant-droit.png",
    link: "https://github.com/Anasseyahnn/Assistant_droit_ivoirien_AI",
    delay: 0,
    tags: ["Python", "NLP", "LlamaIndex", "Streamlit"],
    description: {
      fr: "Assistant IA intelligent pour l'analyse des textes juridiques et des lois ivoiriennes en langage naturel.",
      en: "Intelligent AI assistant for analyzing Ivorian legal texts and laws in natural language."
    }
  },
  {
    id: "cancer-predict",
    title: "Prediction Cancer du Sein",
    image: "/images/portfolio/cancer-predict.png",
    link: "https://github.com/Anasseyahnn/cancer_du_sein_predict",
    delay: 100,
    tags: ["Python", "Machine Learning", "Streamlit", "Scikit-Learn"],
    description: {
      fr: "Classificateur diagnostique interactif basé sur le machine learning pour la prédiction précoce du cancer du sein.",
      en: "Interactive machine learning classifier for early breast cancer diagnostic prediction."
    }
  },
  {
    id: "usa-arrest",
    title: "USA Arrests Stats",
    image: "/images/portfolio/usa-arrests.png",
    link: "https://github.com/Anasseyahnn/usa_arrest",
    delay: 200,
    tags: ["R", "Shiny", "Descriptive Stats", "ggplot2"],
    description: {
      fr: "Tableau de bord statistique interactif analysant les données de criminalité aux États-Unis.",
      en: "Interactive statistical dashboard analyzing crime data in the United States."
    }
  },
  {
    id: "olympic-games",
    title: "Tableau de Bord JO (R Quarto)",
    image: "/images/portfolio/olympics-dashboard.png",
    link: "https://anasseyahnn.github.io/Anasseyahnn-wbs/posts/dashboard/index.html",
    delay: 250,
    tags: ["R", "Quarto", "Data Visualization", "Dashboard"],
    description: {
      fr: "Dashboard analytique interactif explorant les résultats historiques des Jeux Olympiques d'été et d'hiver avec des graphiques de médailles.",
      en: "Interactive analytical dashboard exploring historical Olympic Games results for summer and winter editions."
    }
  },
  {
    id: "simputation",
    title: "Package Simputation (R)",
    image: "/images/portfolio/simputation-package.png",
    link: "https://anasseyahnn.github.io/Anasseyahnn-wbs/posts/simputation/index.html",
    delay: 300,
    tags: ["R", "Statistics", "Data Imputation", "Data Cleaning"],
    description: {
      fr: "Étude et guide d'application pratique du package Simputation en R pour la gestion et l'imputation avancée des valeurs manquantes.",
      en: "Practical application guide of the R Simputation package for modern handling and advanced imputation of missing values."
    }
  },
  {
    id: "mpg-analysis",
    title: "Analyse MPG (R & ggplot2)",
    image: "/images/portfolio/mpg-analysis.png",
    link: "https://anasseyahnn.github.io/Anasseyahnn-wbs/posts/post-with-code/index.html",
    delay: 350,
    tags: ["R", "ggplot2", "Exploratory Data Analysis"],
    description: {
      fr: "Analyse exploratoire rigoureuse de la consommation de carburant (MPG) avec des visualisations avancées.",
      en: "Rigorous exploratory fuel efficiency (MPG) analysis with advanced data visualizations."
    }
  },
]

const devopsItems: PortfolioItem[] = [
  {
    id: "verbatimai",
    title: "VerbatimAI Pro (SaaS)",
    image: "/images/portfolio/verbatimai.png",
    link: "https://github.com/Anasseyahnn",
    delay: 0,
    tags: ["FastAPI", "Next.js", "Supabase", "LLM"],
    description: {
      fr: "Plateforme SaaS d'analyse sémantique automatique et de codification de verbatim qualitatifs.",
      en: "SaaS platform automating qualitative verbatim text coding and sentiment classification."
    }
  },
  {
    id: "sql-query-llm",
    title: "SQL-Chat (SQL Generator)",
    image: "/images/portfolio/sql-query.png",
    link: "https://github.com/Anasseyahnn/sql_query_llm",
    delay: 100,
    tags: ["Python", "Ollama", "Streamlit", "SQLite"],
    description: {
      fr: "Application intuitive traduisant les questions en langage naturel en requêtes SQL exécutées localement.",
      en: "Intuitive application translating natural language questions into locally executed SQL queries."
    }
  },
  {
    id: "groq-r",
    title: "Groq R Integration",
    image: "/images/portfolio/groq-r.png",
    link: "https://github.com/Anasseyahnn/Groq_R",
    delay: 200,
    tags: ["R", "Groq LPU", "API Integration"],
    description: {
      fr: "Package d'intégration permettant de connecter des scripts statistiques R aux puces ultra-rapides de Groq.",
      en: "Integration package connecting R statistical scripts with Groq's high-speed LPU APIs."
    }
  },
  {
    id: "ai-text-extract",
    title: "Vision OCR Pro",
    image: "/images/portfolio/text-extract.png",
    link: "https://github.com/Anasseyahnn/ai_text_extract",
    delay: 300,
    tags: ["Python", "Ollama", "Gemma-3", "Streamlit"],
    description: {
      fr: "Extracteur de texte intelligent à partir d'images par IA 100% locale, préservant la confidentialité.",
      en: "Privacy-first, 100% local AI-powered text extraction from images using Gemma-3."
    }
  },
]

export default function PortfolioSection() {
  const { t, language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState<"science" | "devops">("science")

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const currentItems = activeCategory === "science" ? dataScienceItems : devopsItems

  return (
    <section
      id="portfolio"
      className="py-20 md:py-28 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            {t("portfolio.title")}
          </h2>
          <p
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {t("portfolio.subtitle")}
          </p>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setActiveCategory("science")}
              className={`px-8 py-3.5 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-102 ${
                activeCategory === "science"
                  ? "bg-blue-600 text-white shadow-xl shadow-blue-600/30"
                  : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              📊 {language === "fr" ? "Data Science & Analyses" : "Data Science & Analytics"}
            </button>
            <button
              onClick={() => setActiveCategory("devops")}
              className={`px-8 py-3.5 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-102 ${
                activeCategory === "devops"
                  ? "bg-blue-600 text-white shadow-xl shadow-blue-600/30"
                  : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              🐳 {language === "fr" ? "DevOps & Ingénierie SaaS" : "DevOps & SaaS Engineering"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto justify-center">
          {currentItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block relative overflow-hidden rounded-2xl border border-white/5 bg-gray-900/40 backdrop-blur-md transform transition-all duration-700 hover:border-blue-500/30 hover:bg-gray-900/60 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{
                transitionDelay: `${item.delay}ms`,
              }}
            >
              <div className="relative overflow-hidden aspect-[16/10] rounded-t-2xl">
                <Image
                  src={item.image}
                  alt={`${item.title} - Anassé Yahanan Portfolio`}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
              </div>

              <div className="p-6 flex flex-col h-full min-h-[160px] justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-3.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-white/60 leading-relaxed mb-4">
                    {language === "fr" ? item.description.fr : item.description.en}
                  </p>
                </div>

                <div className="flex items-center text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors mt-auto">
                  <span>{language === "fr" ? "Explorer le projet" : "Explore project"}</span>
                  <svg
                    className="w-4 h-4 ml-1.5 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
