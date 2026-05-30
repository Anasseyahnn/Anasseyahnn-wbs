"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Printer, Download, Mail, Phone, MapPin, Linkedin, Github, GraduationCap, Award, CheckCircle2, Star, Users } from "lucide-react"
import Link from "next/link"

export default function CVPage() {
  const { t, language, setLanguage } = useLanguage()

  const handlePrint = () => {
    window.print()
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en")
  }

  // Skills lists
  const techSkills = [
    "R / Tidyverse / ggplot2",
    "Python / Pandas / Seaborn",
    "Power BI",
    "SQL",
    "Excel avancé",
    "Machine Learning & Modèles prédictifs",
    "Études de marché & Segmentation client",
    "Cadre logique & Suivi-Évaluation (MEAL)",
    "Data Storytelling"
  ]

  const softSkills = [
    language === "en" ? "Clear communication" : "Communication claire",
    language === "en" ? "Teamwork" : "Travail en équipe",
    language === "en" ? "Pedagogy & Knowledge transfer" : "Pédagogie & Transmission",
    language === "en" ? "Project management" : "Gestion de projet",
    language === "en" ? "Analytical rigor" : "Rigueur analytique",
    language === "en" ? "Multicultural adaptability" : "Adaptabilité multiculturelle",
    language === "en" ? "Data-driven decision making" : "Prise de décision fondée sur les données",
    language === "en" ? "Reporting & Popularization" : "Reporting & Vulgarisation",
    language === "en" ? "Autonomy & Proactivity" : "Autonomie & Proactivité"
  ]

  const experiences = [
    {
      title: language === "en" ? "OpinionWay Subsaharian Africa" : "OpinionWay Afrique Subsaharienne",
      role: language === "en" ? "Senior Statistical & Market Research Analyst" : "Chargé d'Études Statistique & Marketing Senior",
      date: language === "en" ? "Apr 2025 - Present" : "Avril 2025 - Présent",
      bullets: language === "en" 
        ? [
            "Managed 10+ end-to-end market research projects for corporate clients (design, collection, analysis, delivery).",
            "Optimized client segmentation accuracy via K-means clustering, reducing analysis time by 40% and improving targeting.",
            "Designed analytical Power BI dashboards adopted by decision-makers to pilot sales in Subsaharian Africa.",
            "Automated data cleaning and processing pipelines using R & Python, reducing report generation time by 40%."
          ]
        : [
            "Dirige plus de 10 études de marché de bout en bout (conception, collecte, analyse, livraison), générant des insights actionnables pour des clients grands comptes.",
            "Optimise la précision des segmentations clients via des modèles de clustering (K-means), réduisant de 40% le temps d'analyse et améliorant le ciblage marketing.",
            "Élabore des tableaux de bord analytiques sous Power BI, adoptés par les décideurs pour piloter les stratégies commerciales sur les marchés d'Afrique subsaharienne.",
            "Automatise les pipelines de traitement de données sous R et Python, diminuant de 40% le temps de production des rapports."
          ]
    },
    {
      title: language === "en" ? "US Embassy / ASMA" : "Ambassade des USA / ASMA",
      role: language === "en" ? "MEAL Officer - 'Back To School' Project" : "Chargé MEAL – Projet « Back To School »",
      date: language === "en" ? "Oct 2024 - Feb 2025" : "Oct. 2024 - Fév. 2025",
      bullets: language === "en"
        ? [
            "Designed the complete project logical framework and formalized 15+ performance indicators (PIRS) validated by the US Embassy.",
            "Deployed a real-time Power BI M&E tracking dashboard, enabling data-driven decisions in less than 24 hours.",
            "Produced impact reports submitted to donors, contributing to the renewal of institutional trust.",
            "Established iterative feedback loops, strengthening organizational learning and intervention quality."
          ]
        : [
            "Conçu le cadre logique intégral du projet et formalisé plus de 15 indicateurs de performance (PIRS) validés par l'ambassade des États-Unis.",
            "Déployé un tableau de bord Power BI de suivi en temps réel, permettant des décisions éclairées en moins de 24h.",
            "Produit l'ensemble des rapports d'impact soumis aux bailleurs de fonds, contribuant au renouvellement de la confiance institutionnelle.",
            "Instauré des mécanismes de feedback itératifs, renforçant l'apprentissage organisationnel et la qualité des interventions."
          ]
    },
    {
      title: "INSSEDS",
      role: language === "en" ? "Consultant Trainer - R & Python for Data Analysis" : "Consultant Formateur – R & Python pour l'Analyse de Données",
      date: language === "en" ? "Oct 2024 - Present" : "Oct. 2024 - Présent",
      bullets: language === "en"
        ? [
            "Instructed over 50 students in descriptive statistics and data workflows using R & Python with a satisfaction rate above 85%.",
            "Designed a practical curriculum focused on real-world case studies to bridge academic-industry gaps."
          ]
        : [
            "Forme plus de 50 étudiants aux outils R et Python avec un taux de satisfaction supérieur à 85% selon les évaluations de fin de module.",
            "Conçu un programme pédagogique axé sur des cas réels, diminuant l'écart entre théorie académique et pratique professionnelle."
          ]
    },
    {
      title: "Cabinet InsightPlus",
      role: language === "en" ? "Consultant - Statistical & Marketing Analyst" : "Consultant - Chargé d'Étude Statistique & Marketing",
      date: language === "en" ? "Feb 2024 - Apr 2024" : "Fév. 2024 - Avril 2024",
      bullets: language === "en"
        ? [
            "Conducted 3 full-scope market studies in 3 months using regression models, hypothesis tests, and client segmentations.",
            "Formulated data-driven strategic recommendations, contributing to offerings repositioning on under-exploited segments."
          ]
        : [
            "Mène 3 études de marché complètes en 3 mois, mobilisant des analyses de régression, tests d'hypothèses et segmentation clients.",
            "Formule des recommandations stratégiques fondées sur les données, contribuant au repositionnement de l'offre clients sur des segments sous-exploités."
          ]
    },
    {
      title: language === "en" ? "US Embassy / ASMA" : "Ambassade des USA / ASMA",
      role: language === "en" ? "MEAL Assistant - 'Binkélema' Project" : "Assistant MEAL – Projet « Binkélema »",
      date: language === "en" ? "Dec 2022 - Oct 2024" : "Déc. 2022 - Octobre 2024",
      bullets: language === "en"
        ? [
            "Monitored over 2 years of field data across 2 countries, ensuring indicator reliability and compliance for US donors.",
            "Designed visual reporting tools that increased reports readability and accelerated stakeholder validation.",
            "Co-authored quarterly and semi-annual reports with zero non-conformity flagged over the entire project period."
          ]
        : [
            "Assure le suivi de plus de 2 ans de données terrain dans 2 pays, garantissant la fiabilité des indicateurs communiqués aux bailleurs américains.",
            "Conçu des outils de visualisation ayant augmenté la lisibilité des rapports et accéléré la validation par les parties prenantes.",
            "Co-rédige les rapports trimestriels et semestriels soumis à l'ambassade des États-Unis, avec zéro non-conformité signalée sur toute la période."
          ]
    },
    {
      title: "Banque Atlantique Côte d'Ivoire (BACI)",
      role: language === "en" ? "Junior Revenue Assurance Analyst" : "Analyste Revenu Assurance Junior",
      date: language === "en" ? "Jun 2022 - Dec 2022" : "Juin 2022 - Déc. 2022",
      bullets: language === "en"
        ? [
            "Analyzed and controlled monthly financial data with a 100% reporting reliability sent to the direction.",
            "Detected and corrected recurrent accounting discrepancies, improving finance team reporting accuracy."
          ]
        : [
            "Analyse et contrôle les données financières mensuelles, assurant une fiabilité à 100% des rapports acheminés vers la direction.",
            "Détecte et corrige des écarts comptables récurrents, réduisant les erreurs de reporting de l'équipe finance."
          ]
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white pb-20 font-sans print:bg-white print:text-black">
      {/* Styles d'impression personnalisés intégrés */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          .no-print {
            display: none !important;
          }
          .print-card {
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            margin-bottom: 1.5rem !important;
            color: black !important;
          }
          .print-text-muted {
            color: #4b5563 !important;
          }
          .print-border {
            border-bottom: 2px solid #e5e7eb !important;
            padding-bottom: 0.5rem !important;
          }
          a {
            text-decoration: none !important;
            color: black !important;
          }
        }
      `}</style>

      {/* Top Navbar no-print */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10 px-6 py-4 no-print">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors font-semibold">
            <ArrowLeft className="w-5 h-5" />
            <span>{t("cv.back")}</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Button
              onClick={toggleLanguage}
              className="glass border border-white/20 hover:border-white/40 text-white px-3 py-2 text-sm rounded-lg"
            >
              <span>{language === "en" ? "FR" : "EN"}</span>
            </Button>
            <Button
              onClick={handlePrint}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl flex items-center shadow-lg shadow-blue-600/20"
            >
              <Printer className="w-4 h-4 mr-2" />
              <span>{language === "en" ? "Print / Save PDF" : "Imprimer / PDF"}</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Main CV Layout */}
      <div className="max-w-5xl mx-auto px-6 pt-24 md:pt-32">
        <Card className="glass border border-white/10 bg-gray-900/40 backdrop-blur-md rounded-3xl p-8 sm:p-12 print-card">
          {/* Header Info */}
          <div className="border-b border-white/10 pb-8 mb-8 print-border">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2 print:text-black">
                  BOUAGBA Anassé Yahanan
                </h1>
                <p className="text-lg sm:text-xl font-bold text-blue-400 print:text-blue-600 mb-4 uppercase tracking-wider">
                  Data Analyst | Statisticien | Data Scientist
                </p>
                <p className="text-sm text-white/60 print-text-muted leading-relaxed max-w-2xl">
                  {language === "en" 
                    ? "3 years of experience | Market Research & Analytics | MEAL & Impact Analysis | R & Python Developer"
                    : "3 ans d'expérience | Études de marché & Analyses | Suivi-Évaluation (MEAL) | R & Python Developer"
                  }
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-xs sm:text-sm text-white/80 print-text-muted">
                <div className="flex items-start space-x-2.5">
                  <Mail className="w-4 h-4 text-blue-400 no-print mt-0.5 shrink-0" />
                  <a href="mailto:anasseyahanan@gmail.com" className="hover:underline break-all">
                    anasseyahanan@gmail.com
                  </a>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Phone className="w-4 h-4 text-blue-400 no-print mt-0.5 shrink-0" />
                  <a href="tel:+2250748466748" className="hover:underline">
                    +225 07 48 46 67 48
                  </a>
                </div>
                <div className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-blue-400 no-print mt-0.5 shrink-0" />
                  <span>Cocody, Abidjan, Côte d'Ivoire</span>
                </div>
                <div className="flex items-start space-x-2.5">
                  <Linkedin className="w-4 h-4 text-blue-400 no-print mt-0.5 shrink-0" />
                  <a href="https://linkedin.com/in/anasse-yahanan-bouagba-3b39aa242" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">
                    linkedin.com/in/anasse-yahanan
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Profile */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white print:text-black mb-4 flex items-center">
              <span className="w-1.5 h-6 bg-blue-500 rounded-md mr-3 no-print"></span>
              {t("cv.profile.title")}
            </h2>
            <p className="text-white/80 print-text-muted text-sm sm:text-base leading-relaxed">
              {language === "en"
                ? "Data Analyst and Statistician with over 3 years of experience in advanced data analysis, quantitative market research, and MEAL monitoring for USAID/US Embassy funded social projects. Skilled in statistical modeling, customer segmentation, and data storytelling. Proven ability to bridge academic theory and industry applications. Recognized for multicultural adaptability, analytical rigor, and teaching skills in high-stakes environments."
                : "Data Analyst et Statisticien avec plus de 3 ans d'expérience dans l'analyse de données, les études de marché et le suivi-évaluation de projets financés par l'USAID. Expertise en modélisation statistique, segmentation client et data storytelling. Reconnu pour ma capacité à transformer des données complexes en décisions stratégiques mesurables. Collaboratif, rigoureux et pédagogique, avec une expérience prouvée de formation et de gestion de livrables dans des environnements multiculturels exigeants."
              }
            </p>
          </div>

          {/* Grid Sections: Experiences vs Formations/Compétences */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Col: Experience (width: 2 cols) */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white print:text-black mb-6 flex items-center">
                  <span className="w-1.5 h-6 bg-blue-500 rounded-md mr-3 no-print"></span>
                  {t("talks.title")}
                </h2>
                
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="border-l-2 border-blue-500/20 pl-4 space-y-2 hover:border-blue-400 transition-colors">
                      <div className="flex justify-between items-start flex-wrap gap-1">
                        <h3 className="text-base font-bold text-white print:text-black">{exp.title}</h3>
                        <span className="text-xs text-blue-400 font-semibold">{exp.date}</span>
                      </div>
                      <p className="text-xs text-white/60 font-medium italic print-text-muted">{exp.role}</p>
                      <ul className="list-disc list-inside space-y-1 text-white/70 text-xs print-text-muted">
                        {exp.bullets.map((bullet, idx) => (
                          <li key={idx} className="leading-relaxed pl-1 -indent-4 list-none">• {bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Education, Skills, Languages, References (width: 1 col) */}
            <div className="space-y-8">
              {/* Technical & Soft Skills */}
              <div>
                <h2 className="text-2xl font-bold text-white print:text-black mb-6 flex items-center">
                  <span className="w-1.5 h-6 bg-blue-500 rounded-md mr-3 no-print"></span>
                  {t("cv.skills.tech")}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {techSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-xs font-semibold rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 print:bg-gray-100 print:text-black print:border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white print:text-black mb-6 flex items-center">
                  <span className="w-1.5 h-6 bg-blue-500 rounded-md mr-3 no-print"></span>
                  {t("cv.skills.soft")}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 text-xs font-semibold rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20 print:bg-gray-100 print:text-black print:border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-2xl font-bold text-white print:text-black mb-6 flex items-center">
                  <span className="w-1.5 h-6 bg-blue-500 rounded-md mr-3 no-print"></span>
                  {t("cv.education.title")}
                </h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-purple-500/20 pl-4 space-y-1">
                    <h3 className="text-sm font-bold text-white print:text-black">{t("cv.education.master")}</h3>
                    <p className="text-[11px] text-white/60 print-text-muted leading-relaxed">{t("cv.education.master.desc")}</p>
                  </div>
                  <div className="border-l-2 border-purple-500/20 pl-4 space-y-1">
                    <h3 className="text-sm font-bold text-white print:text-black">{t("cv.education.licence")}</h3>
                    <p className="text-[11px] text-white/60 print-text-muted leading-relaxed">{t("cv.education.licence.desc")}</p>
                  </div>
                  <div className="border-l-2 border-purple-500/20 pl-4 space-y-1">
                    <h3 className="text-sm font-bold text-white print:text-black">{t("cv.education.bac")}</h3>
                    <p className="text-[11px] text-white/60 print-text-muted leading-relaxed">{t("cv.education.bac.desc")}</p>
                  </div>
                  <div className="border-l-2 border-purple-500/20 pl-4 space-y-1">
                    <h3 className="text-sm font-bold text-white print:text-black">{t("cv.education.meal")}</h3>
                    <p className="text-[11px] text-white/60 print-text-muted leading-relaxed">{t("cv.education.meal.desc")}</p>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h2 className="text-2xl font-bold text-white print:text-black mb-6 flex items-center">
                  <span className="w-1.5 h-6 bg-blue-500 rounded-md mr-3 no-print"></span>
                  {t("cv.languages.title")}
                </h2>
                <div className="space-y-2 text-sm text-white/80 print-text-muted">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>{language === "en" ? "French" : "Français"}</span>
                    <span className="font-semibold text-blue-400 print:text-blue-600">{t("cv.languages.fr")}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>{language === "en" ? "English" : "Anglais"}</span>
                    <span className="font-semibold text-blue-400 print:text-blue-600">{t("cv.languages.en")}</span>
                  </div>
                </div>
              </div>

              {/* References */}
              <div>
                <h2 className="text-2xl font-bold text-white print:text-black mb-6 flex items-center">
                  <span className="w-1.5 h-6 bg-blue-500 rounded-md mr-3 no-print"></span>
                  {t("cv.references.title")}
                </h2>
                <div className="space-y-4">
                  <div className="border-l-2 border-emerald-500/20 pl-4">
                    <h3 className="text-sm font-bold text-white print:text-black">{t("cv.references.ref1.name")}</h3>
                    <p className="text-xs text-emerald-400 font-medium">{t("cv.references.ref1.role")}</p>
                    <p className="text-[11px] text-white/50 print-text-muted">paulinkouassi212@gmail.com</p>
                  </div>
                  <div className="border-l-2 border-emerald-500/20 pl-4">
                    <h3 className="text-sm font-bold text-white print:text-black">{t("cv.references.ref2.name")}</h3>
                    <p className="text-xs text-emerald-400 font-medium">{t("cv.references.ref2.role")}</p>
                    <p className="text-[11px] text-white/50 print-text-muted">jokangha@gmail.com</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}
