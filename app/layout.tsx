import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
  preload: true,
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  title: "Anassé Yahanan — Data Scientist & DevOps",
  description:
    "Portfolio de Bouagba Anassé Yahanan: Statisticien, Data Analyst, Data Scientist et ingénieur DevOps basé à Abidjan, Côte d'Ivoire. Expert en R, Python, SQL et MLOps.",
  keywords: [
    "Anassé Yahanan",
    "Bouagba Anassé Yahanan",
    "Data Scientist Côte d'Ivoire",
    "Statisticien",
    "Data Analyst",
    "DevOps",
    "R",
    "Python",
    "SQL",
    "FastAPI",
    "Docker",
    "Kubernetes",
    "RShiny",
    "Streamlit",
    "VerbatimAI Pro",
    "MEAL Officer",
    "ASMA",
  ],
  authors: [{ name: "Anassé Yahanan" }],
  creator: "Anassé Yahanan",
  publisher: "Anassé Yahanan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    url: "https://anasseyahanan.github.io/Anasseyahnn-wbs/",
    siteName: "Anassé Yahanan Portfolio",
    title: "Anassé Yahanan — Data Scientist & DevOps",
    description:
      "Portfolio de Bouagba Anassé Yahanan: Statisticien, Data Analyst, Data Scientist et ingénieur DevOps basé à Abidjan, Côte d'Ivoire. Expert en R, Python, SQL et MLOps.",
    images: [
      {
        url: "/images/portfolioimage.png",
        width: 1200,
        height: 630,
        alt: "Anassé Yahanan — Data Scientist & DevOps Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anassé Yahanan — Data Scientist & DevOps",
    description:
      "Portfolio de Bouagba Anassé Yahanan: Statisticien, Data Analyst, Data Scientist et ingénieur DevOps basé à Abidjan, Côte d'Ivoire. Expert en R, Python, SQL et MLOps.",
    creator: "@anasse_yahanan",
    images: ["/images/portfolioimage.png"],
  },
  alternates: {
    canonical: "https://anasseyahanan.github.io/Anasseyahnn-wbs/",
    languages: {
      "fr-FR": "https://anasseyahanan.github.io/Anasseyahnn-wbs/fr",
      "en-US": "https://anasseyahanan.github.io/Anasseyahnn-wbs/en",
    },
  },
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${plusJakartaSans.variable} antialiased`}>
      <head>
        <link rel="preload" href="/images/portfolioimage.png" as="image" type="image/png" />
        <link rel="preload" href="/images/profile.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/background.jpg" as="image" type="image/jpeg" />
        <link rel="dns-prefetch" href="https://medium.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://anasseyahanan.github.io/Anasseyahnn-wbs/#person",
                  name: "Bouagba Anassé Yahanan",
                  alternateName: "Anassé Yahanan",
                  description:
                    "Statisticien, Data Scientist et ingénieur DevOps spécialisé dans la modélisation statistique, les déploiements de modèles (MLOps) et l'animation de formations.",
                  jobTitle: ["Data Scientist", "Statisticien", "DevOps Engineer", "MEAL Officer"],
                  worksFor: [
                    {
                      "@type": "Organization",
                      "@id": "https://anasseyahanan.github.io/Anasseyahnn-wbs/#asma",
                      name: "ASMA",
                      description: "ONG partenaire menant des projets de lutte contre la désinformation financés par l'Ambassade des États-Unis.",
                    },
                  ],
                  nationality: "Côte d'Ivoire",
                  birthPlace: "Côte d'Ivoire",
                  url: "https://anasseyahanan.github.io/Anasseyahnn-wbs/",
                  image: "https://anasseyahanan.github.io/Anasseyahnn-wbs/images/profile.jpg",
                  sameAs: [
                    "https://linkedin.com/in/anasse-yahanan-bouagba-3b39aa242/",
                    "https://github.com/Anasseyahnn",
                    "https://x.com/anasse_yahanan",
                    "https://medium.com/@anasseyahanan",
                    "https://kaggle.com/anasseyahanan",
                  ],
                  knowsAbout: [
                    "Data Science",
                    "Machine Learning",
                    "Statistics",
                    "R programming",
                    "Python programming",
                    "SQL",
                    "Docker",
                    "Kubernetes",
                    "FastAPI",
                    "RShiny",
                    "Streamlit",
                    "MLOps",
                  ],
                  hasOccupation: {
                    "@type": "Occupation",
                    name: "Data Scientist & DevOps Engineer",
                    description:
                      "Modélisation statistique avancée, développement de pipelines de données et d'outils interactifs, administration d'infrastructures MLOps.",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://anasseyahanan.github.io/Anasseyahnn-wbs/#website",
                  url: "https://anasseyahanan.github.io/Anasseyahnn-wbs/",
                  name: "Anassé Yahanan Portfolio",
                  description: "Portfolio professionnel d'Anassé Yahanan - Data Scientist & DevOps",
                  publisher: {
                    "@id": "https://anasseyahanan.github.io/Anasseyahnn-wbs/#person",
                  },
                  inLanguage: ["fr-FR", "en-US"],
                },
                {
                  "@type": "ItemList",
                  "@id": "https://anasseyahanan.github.io/Anasseyahnn-wbs/#portfolio",
                  name: "Data Science & SaaS Portfolio",
                  description: "Projets de Data Science, études statistiques et développement d'applications par Anassé Yahanan",
                  numberOfItems: 5,
                  itemListElement: [
                    {
                      "@type": "CreativeWork",
                      name: "VerbatimAI Pro",
                      description: "SaaS de codification de verbatims avec FastAPI, Next.js, Supabase et LLMs intégrés",
                      creator: { "@id": "https://anasseyahanan.github.io/Anasseyahnn-wbs/#person" },
                      about: ["SaaS", "FastAPI", "Next.js", "AI", "NLP"],
                    },
                    {
                      "@type": "CreativeWork",
                      name: "Tableau de Bord des Jeux Olympiques",
                      description: "Dashboard interactif d'exploration historique des données olympiques réalisé en R Quarto",
                      creator: { "@id": "https://anasseyahanan.github.io/Anasseyahnn-wbs/#person" },
                      about: ["R", "Quarto", "Data Visualization", "Dashboard"],
                    },
                    {
                      "@type": "CreativeWork",
                      name: "Package Simputation (R)",
                      description: "Logique avancée de traitement et d'imputation des données manquantes en R",
                      creator: { "@id": "https://anasseyahanan.github.io/Anasseyahnn-wbs/#person" },
                      about: ["R", "Statistics", "Data Imputation", "R Package"],
                    },
                  ],
                },
                {
                  "@type": "Blog",
                  "@id": "https://anasseyahanan.github.io/Anasseyahnn-wbs/#blog",
                  name: "Articles d'Anassé Yahanan",
                  description: "Ressources, guides d'analyse et tutoriels techniques en science des données et DevOps",
                  url: "https://medium.com/@anasseyahanan",
                  author: { "@id": "https://anasseyahanan.github.io/Anasseyahnn-wbs/#person" },
                  inLanguage: ["en", "fr"],
                  about: ["Data Science", "R", "Python", "Docker", "Machine Learning"],
                },
              ],
            }),
          }}
        />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </head>
      <body className={plusJakartaSans.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
