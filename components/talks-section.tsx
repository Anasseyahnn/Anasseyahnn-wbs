"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { Mail, BookOpen, BarChart3 } from "lucide-react"

export default function TalksSection() {
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

  const marketResearchExperience = [
    {
      title: language === "en" ? "OpinionWay Subsaharian Africa" : "OpinionWay Afrique Subsaharienne",
      role: language === "en" ? "Senior Statistical & Market Research Analyst" : "Chargé d'Études Statistique & Marketing Senior",
      date: "2025 - Present",
      bullets: language === "en" 
        ? ["Managed 10+ end-to-end market research projects for corporate clients.", "Optimized client segmentation accuracy via K-means clustering (reducing analysis time by 40%).", "Designed analytical Power BI dashboards adopted by decision-makers.", "Automated ETL pipelines using R & Python (reducing report generation time by 40%)."]
        : ["Dirige plus de 10 études de marché de bout en bout pour des clients grands comptes.", "Optimise la précision des segmentations clients via des modèles de clustering (K-means).", "Élabore des tableaux de bord analytiques sous Power BI pour piloter les ventes.", "Automatise les pipelines de traitement de données sous R/Python (diminution du temps de 40%)."]
    },
    {
      title: "Cabinet InsightPlus",
      role: language === "en" ? "Consultant - Statistical & Marketing Analyst" : "Consultant - Chargé d'Étude Statistique & Marketing",
      date: "2024",
      bullets: language === "en"
        ? ["Conducted 3 full-scope market studies in 3 months using regression models and segmentations.", "Formulated data-driven strategic recommendations for clients' offerings."]
        : ["Mène 3 études de marché complètes en 3 mois (analyses de régression, tests d'hypothèses).", "Formule des recommandations stratégiques fondées sur les données pour le repositionnement."]
    },
    {
      title: "Banque Atlantique Côte d'Ivoire (BACI)",
      role: language === "en" ? "Junior Revenue Assurance Analyst" : "Analyste Revenu Assurance Junior",
      date: "2022",
      bullets: language === "en"
        ? ["Analyzed and controlled monthly financial data with a 100% reporting reliability.", "Detected and corrected recurrent accounting discrepancies to improve reporting accuracy."]
        : ["Analyse et contrôle les données financières mensuelles, assurant une fiabilité à 100% des rapports.", "Détecte et corrige des écarts comptables récurrents, réduisant les erreurs de reporting."]
    }
  ]

  const mealAndEducationExperience = [
    {
      title: language === "en" ? "US Embassy / ASMA" : "Ambassade des USA / ASMA",
      role: language === "en" ? "MEAL Officer - 'Back To School' Project" : "Chargé MEAL – Projet « Back To School »",
      date: "2024 - 2025",
      bullets: language === "en"
        ? ["Designed the complete project logical framework and formalized 15+ performance indicators (PIRS).", "Deployed a real-time Power BI dashboard, enabling data-driven decisions in less than 24 hours.", "Produced impact reports submitted to donors, contributing to institutional trust."]
        : ["Conçoit le cadre logique intégral du projet et formalise plus de 15 indicateurs d'impact (PIRS).", "Déploie un tableau de bord Power BI en temps réel pour des décisions éclairées en moins de 24h.", "Produit l'ensemble des rapports d'impact soumis aux bailleurs de fonds."]
    },
    {
      title: "INSSEDS",
      role: language === "en" ? "Consultant Trainer - R & Python for Data Analysis" : "Consultant Formateur – R & Python pour l'Analyse de Données",
      date: "2024 - Present",
      bullets: language === "en"
        ? ["Instructed over 50 students in descriptive statistics and data workflows using R & Python.", "Designed a practical curriculum focused on real-world case studies to bridge academic-industry gaps."]
        : ["Forme plus de 50 étudiants aux outils R et Python avec un taux de satisfaction supérieur à 85%.", "Conçoit un programme pédagogique axé sur des cas réels (théorie vs pratique professionnelle)."]
    },
    {
      title: language === "en" ? "US Embassy / ASMA" : "Ambassade des USA / ASMA",
      role: language === "en" ? "MEAL Assistant - 'Binkélema' Project" : "Assistant MEAL – Projet « Binkélema »",
      date: "2022 - 2024",
      bullets: language === "en"
        ? ["Monitored over 2 years of field data across 2 countries, ensuring indicator compliance for US donors.", "Co-authored quarterly and semi-annual reports with zero non-conformity flagged over the period."]
        : ["Assure le suivi de plus de 2 ans de données terrain dans 2 pays (indicateurs bailleurs américains).", "Conçoit des outils de visualisation augmentant la lisibilité et accélérant la validation.", "Co-rédige les rapports trimestriels et semestriels (zéro non-conformité signalée)."]
    }
  ]

  return (
    <section id="talks" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t("talks.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_2fr] gap-8">
          {/* Speaker / CV Card */}
          <div className="lg:col-span-1">
            <Card className="glass p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group h-full flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-full h-64 rounded-lg overflow-hidden relative bg-gray-900/50">
                  <Image
                    src="/images/im10.jpeg"
                    alt="Anassé Yahanan Data Scientist, AI & LLM Specialist"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.jpg"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <p className="text-white/75 leading-relaxed group-hover:text-white/90 transition-colors duration-300 text-sm sm:text-base">
                  {renderTextWithBold(t("talks.description"))}
                </p>
              </div>

              <Button 
                className="w-full glass glass-hover border border-white/20 hover:border-blue-400/60 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/20 group/btn mt-6"
                onClick={() => window.open("/CV_BOUAGBA_Anasse_ATS_v2.pdf", "_blank")}
              >
                <Mail className="w-5 h-5 mr-2 transition-transform duration-300 group-hover/btn:rotate-12 group-hover/btn:text-blue-400" />
                {t("talks.cta")}
              </Button>
            </Card>
          </div>

          {/* Market Research Experience Column */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="glass p-6 hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 group h-full">
              <div className="flex items-center mb-6">
                <BarChart3 className="w-6 h-6 mr-2 text-blue-400" />
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {t("talks.argentina")}
                </h3>
              </div>
              
              <div className="space-y-6">
                {marketResearchExperience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-blue-500/20 pl-4 space-y-2 hover:border-blue-400 transition-colors">
                    <div className="flex justify-between items-start flex-wrap gap-1">
                      <h4 className="text-base font-bold text-white">{exp.title}</h4>
                      <span className="text-xs text-blue-400 font-semibold">{exp.date}</span>
                    </div>
                    <p className="text-xs text-white/60 font-medium italic">{exp.role}</p>
                    <ul className="list-disc list-inside space-y-1 text-white/70 text-xs">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="leading-relaxed pl-1 -indent-4 list-none">• {bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* MEAL & Education Experience Column */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="glass p-6 hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 group h-full">
              <div className="flex items-center mb-6">
                <BookOpen className="w-6 h-6 mr-2 text-purple-400" />
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                  {t("talks.international")}
                </h3>
              </div>

              <div className="space-y-6">
                {mealAndEducationExperience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-purple-500/20 pl-4 space-y-2 hover:border-purple-400 transition-colors">
                    <div className="flex justify-between items-start flex-wrap gap-1">
                      <h4 className="text-base font-bold text-white">{exp.title}</h4>
                      <span className="text-xs text-purple-400 font-semibold">{exp.date}</span>
                    </div>
                    <p className="text-xs text-white/60 font-medium italic">{exp.role}</p>
                    <ul className="list-disc list-inside space-y-1 text-white/70 text-xs">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="leading-relaxed pl-1 -indent-4 list-none">• {bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
