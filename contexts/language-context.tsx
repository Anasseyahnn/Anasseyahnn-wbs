"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "Bio",
    "nav.portfolio": "Portfolio",
    "nav.articles": "Articles",
    "nav.talks": "CV & Experience",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Welcome to my **personal portfolio**",
    "hero.title": "Data Scientist, AI Engineer & LLM Specialist",
    "hero.subtitle": "I transform complex data into actionable strategic insights and deploy robust pipelines in production.",
    "hero.card1": "Expert in predictive analytics, dashboard design & statistical modeling.",
    "hero.card2": "Passionate about MLOps, Docker/Kubernetes & cloud deployments.",
    "hero.card3": "MEAL Officer managing anti-misinformation projects funded by the US Embassy.",
    "hero.card4": "R & Python instructor helping professionals master data analysis.",

    // Trusted By Section
    "trustedBy.title": "Organizations & Partners",
    "trustedBy.subtitle":
      "Collaborations and organizations that have trusted my analytical expertise to drive social impact and technical excellence.",

    // Portfolio Section
    "portfolio.title": "Portfolio",
    "portfolio.subtitle": "Genuine public GitHub repositories showing analytical workflows, AI pipelines, and custom SaaS engineering",

    // About Section
    "about.title": "ABOUT ME",
    "about.bio1":
      "Bouagba Anassé Yahanan is an Abidjan-based **Data Scientist, AI Engineer, and LLM Specialist** with over 3 years of proven experience in advanced AI development, data science, and Monitoring, Evaluation, Accountability, and Learning (MEAL) for USAID and US Embassy funded projects.",
    "about.bio2":
      "Expert in **Python, R, and SQL**, Anassé designs and deploys advanced artificial intelligence models, **LLM-powered applications**, and automates complex data pipelines using **FastAPI, Docker, and Kubernetes**. He excels at translating cutting-edge AI technologies into high-value Data Products.",
    "about.bio3":
      "An active contributor to the tech ecosystem, he is a **Consultant R & Python Trainer** at INSSEDS. He is the lead developer of **[VerbatimAI Pro]**, a FastAPI and Next.js semantic analysis SaaS designed to automate verbatim text coding using state-of-the-art AI.",
    "about.links.title": "Links & Resources",
    "about.cta": "GET IN TOUCH",

    // Companies Section
    "companies.desafia.title": "SaaS Spotlight: VerbatimAI Pro",
    "companies.desafia.description":
      "**VerbatimAI Pro** is a comprehensive **SaaS platform** designed for **verbatim coding and text feedback analysis**. Leveraging a modern full-stack architecture with **FastAPI, Next.js, and Supabase**, it allows researchers to ingest thousands of qualitative responses, classify sentiments, and automatically code complex qualitative data using integrated **state-of-the-art Large Language Models (LLMs)** with high accuracy and minimal latency.",
    "companies.desafia.button": "View Project Repository",

    // Talks Section
    "talks.title": "Professional Experience",
    "talks.description":
      "Leveraging a strong foundation in statistical modeling and data engineering, I specialize in two core pillars: **Market Research & Analytics** at leading consulting firms, and **MEAL (Suivi-Évaluation)** for international, high-stakes development projects. Passionate about knowledge transfer, I also serve as an R & Python consultant.",
    "talks.cta": "DOWNLOAD FULL CV (PDF)",
    "talks.argentina": "Market Research & Analytics",
    "talks.international": "MEAL & Education",

    // Blog Section
    "blog.title": "Articles & Case Studies",
    "blog.subtitle": "Latest insights, coding tutorials, and analytical guides written to democratize data science",
    "blog.readMore": "Read Article",
    "blog.noArticles": "No articles found. Check back soon!",
    "blog.viewAll": "View Latest Articles",

    // Footer
    "footer.portfolio": "PORTFOLIO",
    "footer.portfolio.design": "Case Studies & SaaS",
    "footer.about": "BIOGRAPHY",
    "footer.about.bio": "About Me",
    "footer.about.talks": "Experience",
    "footer.about.articles": "Articles",
    "footer.connect": "LET'S CONNECT",
    "footer.connect.project": "Interested in a collaboration?",
    "footer.connect.touch": "Reach out directly",
    "footer.made": "MADE BY",

    // Podcast Section
    "podcast.title": "Data Science & AI Podcast Appearances",
    "podcast.description1": "I regularly share insights on **predictive modeling**, **R and Python programming**, and **DevOps/MLOps best practices** on various tech podcasts and platforms.",
    "podcast.description2": "In these episodes, we discuss the future of **Large Language Models (LLMs)**, operationalizing data workflows, and how to build secure **data pipelines** in enterprise environments.",
    "podcast.description3": "We also explore the intersection of **statistics and Monitoring & Evaluation (MEAL)** for international development projects.",
    "podcast.stats": "Over **5,000+ views** across Spotify, YouTube, and specialized tech channels.",
    "podcast.latestEpisodes": "Featured Episodes & Interventions",
    
    // Online CV translations
    "cv.back": "Back to Portfolio",
    "cv.profile.title": "Professional Profile",
    "cv.education.title": "Education & Certifications",
    "cv.education.master": "Master in Data Science",
    "cv.education.master.desc": "Higher Institute of Statistics, Econometrics and Data Science (INSSEDS) – Abidjan (2020 - 2022)",
    "cv.education.licence": "Bachelor's Degree in Physics",
    "cv.education.licence.desc": "Université Félix Houphouët-Boigny – Cocody, Abidjan (2017 - 2020)",
    "cv.education.bac": "Scientific Baccalaureate",
    "cv.education.bac.desc": "Lycée Moderne Abobo – Abidjan (2016 - 2017)",
    "cv.education.meal": "MEAL Training – USAID / PELAII Project",
    "cv.education.meal.desc": "Logical frameworks, KPIs, qualitative/quantitative data collection, reporting & visualization tools.",
    "cv.skills.tech": "Technical Skills",
    "cv.skills.soft": "Soft Skills",
    "cv.languages.title": "Languages",
    "cv.languages.fr": "French – Native",
    "cv.languages.en": "English – Professional",
    "cv.references.title": "References",
    "cv.references.ref1.name": "Mr. PAULIN KOUASSI",
    "cv.references.ref1.role": "MEAL Officer – World Bank",
    "cv.references.ref2.name": "Mr. JOEL KANGHA",
    "cv.references.ref2.role": "Project Manager – ASMA",
    "cv.viewOnline": "View Online CV",
  },
  fr: {
    // Navbar
    "nav.home": "Accueil",
    "nav.about": "Bio",
    "nav.portfolio": "Portfolio",
    "nav.articles": "Articles",
    "nav.talks": "CV & Expérience",
    "nav.contact": "Contact",

    // Hero Section
    "hero.greeting": "Bienvenue sur mon **portfolio personnel**",
    "hero.title": "Data Scientist, Ingénieur IA & Spécialiste LLM",
    "hero.subtitle": "Je transforme les données complexes en insights stratégiques actionnables et déploie des pipelines robustes en production.",
    "hero.card1": "Expert en analyse prédictive, tableaux de bord et modélisation statistique.",
    "hero.card2": "Passionné par le MLOps, Docker/Kubernetes et les déploiements cloud.",
    "hero.card3": "Responsable MEAL sur des projets de lutte contre la désinformation (Ambassade des USA).",
    "hero.card4": "Formateur R et Python accompagnant les professionnels dans la maîtrise de la data.",

    // Trusted By Section
    "trustedBy.title": "Organisations & Partenaires",
    "trustedBy.subtitle":
      "Des collaborations et structures qui font confiance à mon expertise analytique pour porter des projets à fort impact social et technique.",

    // Portfolio Section
    "portfolio.title": "Portfolio",
    "portfolio.subtitle": "Véritables dépôts publics GitHub illustrant des workflows analytiques, des pipelines d'IA et de l'ingénierie SaaS",

    // About Section
    "about.title": "À PROPOS DE MOI",
    "about.bio1":
      "Bouagba Anassé Yahanan est un **Data Scientist, Ingénieur IA et Spécialiste LLM** basé à Abidjan, doté de plus de 3 ans d'expérience reconnue dans le développement de solutions d'IA, la data science et le suivi-évaluation (MEAL) de projets d'envergure financés par l'USAID et l'Ambassade des États-Unis.",
    "about.bio2":
      "Expert en **Python, R et SQL**, Anassé conçoit et déploie des modèles d'intelligence artificielle avancés, des applications basées sur les **LLMs (Large Language Models)** et automatise des pipelines de données complexes avec **FastAPI, Docker et Kubernetes**. Il excelle à traduire des technologies complexes en produits de données (*Data Products*) à forte valeur ajoutée.",
    "about.bio3":
      "Acteur impliqué dans la transmission de compétences, il exerce comme **Consultant Formateur R & Python** à l'INSSEDS. Il est également le créateur de **[VerbatimAI Pro]**, une plateforme SaaS d'analyse sémantique et de codification de verbatims par IA développée sous FastAPI et Next.js.",
    "about.links.title": "Ressources & Liens",
    "about.cta": "CONTACTEZ-MOI",
    // Companies Section
    "companies.desafia.title": "SaaS à l'honneur : VerbatimAI Pro",
    "companies.desafia.description":
      "**VerbatimAI Pro** est une **plateforme SaaS** complète conçue pour la **codification de verbatims et l'analyse de retours textuels**. S'appuyant sur une architecture full-stack moderne avec **FastAPI, Next.js et Supabase**, elle permet aux chercheurs d'intégrer des milliers de réponses qualitatives, de classifier les sentiments et de coder automatiquement des données qualitatives complexes à l'aide de **modèles de langage de pointe (LLMs)** intégrés, avec une précision élevée et une latence minimale.",
    "companies.desafia.button": "Voir le Répertoire du Projet",

    // Talks Section
    "talks.title": "Expérience Professionnelle",
    "talks.description":
      "Fort de solides compétences en modélisation statistique et ingénierie de données, je structure mon activité autour de deux piliers : **les études statistiques et le marketing** en cabinet de conseil, et **le suivi-évaluation (MEAL)** pour des projets humanitaires internationaux. Je transmets également ces savoirs en tant que formateur.",
    "talks.cta": "TÉLÉCHARGER LE CV COMPLET (PDF)",
    "talks.argentina": "Études de Marché & Analyses",
    "talks.international": "Suivi-Évaluation (MEAL) & Enseignement",

    // Blog Section
    "blog.title": "Articles & Études de Cas",
    "blog.subtitle": "Dernières publications, tutoriels de programmation et guides d'analyse rédigés pour démocratiser la data science",
    "blog.readMore": "Lire l'article",
    "blog.noArticles": "Aucun article trouvé. Revenez bientôt !",
    "blog.viewAll": "Voir les derniers articles",

    // Footer
    "footer.portfolio": "PORTFOLIO",
    "footer.portfolio.design": "Études de cas & SaaS",
    "footer.about": "BIOGRAPHIE",
    "footer.about.bio": "À Propos de Moi",
    "footer.about.talks": "Expérience",
    "footer.about.articles": "Articles",
    "footer.connect": "COMMUNIQUER",
    "footer.connect.project": "Intéressé par une collaboration ?",
    "footer.connect.touch": "Me contacter directement",
    "footer.made": "RÉALISÉ PAR",

    // Podcast Section
    "podcast.title": "Interventions & Podcasts sur la Data Science",
    "podcast.description1": "Je partage régulièrement des insights sur la **modélisation prédictive**, la **programmation R & Python**, et les **meilleures pratiques DevOps/MLOps** sur divers podcasts tech et plateformes éducatives.",
    "podcast.description2": "Dans ces épisodes, nous discutons de l'avenir des **modèles de langage (LLMs)**, de l'opérationnalisation des flux de données et de la création de **pipelines de données** robustes.",
    "podcast.description3": "Nous explorons également l'intersection entre **statistiques avancées** et le **suivi-évaluation (MEAL)** pour les projets à fort impact.",
    "podcast.stats": "Plus de **5 000+ écoutes et vues** cumulées sur Spotify, YouTube et les canaux partenaires.",
    "podcast.latestEpisodes": "Épisodes phares & Interventions",
    
    // Online CV translations
    "cv.back": "Retour au Portfolio",
    "cv.profile.title": "Profil Professionnel",
    "cv.education.title": "Formation & Certifications",
    "cv.education.master": "Master en Data Science",
    "cv.education.master.desc": "Institut Supérieur de Statistique, Économétrie et Data Science (INSSEDS) – Abidjan (2020 - 2022)",
    "cv.education.licence": "Licence de Physique",
    "cv.education.licence.desc": "Université Félix Houphouët-Boigny – Cocody, Abidjan (2017 - 2020)",
    "cv.education.bac": "Baccalauréat Scientifique",
    "cv.education.bac.desc": "Lycée Moderne Abobo – Abidjan (2016 - 2017)",
    "cv.education.meal": "Formation MEAL – Projet USAID / PELAII",
    "cv.education.meal.desc": "Cadres logiques, KPIs, collecte et analyse de données qualitatives/quantitatives, outils de reporting et de visualisation.",
    "cv.skills.tech": "Compétences Techniques",
    "cv.skills.soft": "Compétences Interpersonnelles",
    "cv.languages.title": "Langues",
    "cv.languages.fr": "Français – Natif",
    "cv.languages.en": "Anglais – Professionnel",
    "cv.references.title": "Références",
    "cv.references.ref1.name": "M. PAULIN KOUASSI",
    "cv.references.ref1.role": "Chargé Suivi-Évaluation – Banque Mondiale",
    "cv.references.ref2.name": "M. JOEL KANGHA",
    "cv.references.ref2.role": "Chef de Projet – ASMA",
    "cv.viewOnline": "Consulter le CV en Ligne",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
