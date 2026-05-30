import { NextResponse } from "next/server"

const fallbackPostsFr = [
  {
    title: "Analyse des résultats des Jeux Olympiques",
    link: "https://anasseyahnn.github.io/Anasseyahnn-wbs/posts/dashboard/index.html",
    pubDate: new Date().toISOString(),
    description: "Ce dashboard interactif offre une exploration complète des données historiques des Jeux Olympiques, conçu avec R Quarto.",
    image: "/images/portfolio/usa-arrests.png"
  },
  {
    title: "Découvrez le Package Simputation en R",
    link: "https://anasseyahnn.github.io/Anasseyahnn-wbs/posts/simputation/index.html",
    pubDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    description: "Dans le monde de l'analyse de données, l'imputation est une étape cruciale pour gérer les valeurs manquantes. Tutoriel d'application du package Simputation.",
    image: "/images/portfolio/cancer-predict.png"
  },
  {
    title: "Débutez avec Quarto Dashboard",
    link: "https://anasseyahnn.github.io/Anasseyahnn-wbs/posts/tutorials/quarto-dash.html",
    pubDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    description: "Apprenez à créer et déployer des tableaux de bord interactifs de niveau professionnel avec R Quarto à travers ce guide pas à pas.",
    image: "/images/portfolio/sql-query.png"
  },
  {
    title: "Analyse exploratoire de données MPG avec R & ggplot2",
    link: "https://anasseyahnn.github.io/Anasseyahnn-wbs/posts/post-with-code/index.html",
    pubDate: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
    description: "Une exploration statistique rigoureuse des données de consommation de carburant (MPG) en exploitant la puissance du package ggplot2 de R.",
    image: "/images/portfolio/mpg-analysis.png"
  }
]

const fallbackPostsEn = [
  {
    title: "Olympic Games Results Analysis",
    link: "https://anasseyahnn.github.io/Anasseyahnn-wbs/posts/dashboard/index.html",
    pubDate: new Date().toISOString(),
    description: "This interactive dashboard offers a complete exploration of historical Olympic Games data, built with R Quarto.",
    image: "/images/portfolio/usa-arrests.png"
  },
  {
    title: "Discover the Simputation Package in R",
    link: "https://anasseyahnn.github.io/Anasseyahnn-wbs/posts/simputation/index.html",
    pubDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    description: "In the world of data analysis, imputation is a crucial step for managing missing values. Practical tutorial on using the Simputation package.",
    image: "/images/portfolio/cancer-predict.png"
  },
  {
    title: "Get Started with Quarto Dashboard",
    link: "https://anasseyahnn.github.io/Anasseyahnn-wbs/posts/tutorials/quarto-dash.html",
    pubDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    description: "Learn how to build and deploy professional interactive dashboards with R Quarto through this step-by-step guide.",
    image: "/images/portfolio/sql-query.png"
  },
  {
    title: "Exploratory MPG Data Analysis with R & ggplot2",
    link: "https://anasseyahnn.github.io/Anasseyahnn-wbs/posts/post-with-code/index.html",
    pubDate: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
    description: "A rigorous statistical exploration of fuel efficiency (MPG) data leveraging the power of R's ggplot2 package.",
    image: "/images/portfolio/mpg-analysis.png"
  }
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const lang = searchParams.get("lang") || "fr"

  try {
    console.log("[v0] Fetching Medium RSS feed...")

    // Fetch RSS feed from Medium
    const response = await fetch("https://medium.com/@anasseyahanan/feed", {
      next: { revalidate: 900 }, // Cache for 15 minutes
    })

    if (!response.ok) {
      throw new Error("Failed to fetch Medium RSS feed")
    }

    const rssText = await response.text()

    console.log("[v0] RSS feed length:", rssText.length)
    const itemMatches = rssText.match(/<item>(.*?)<\/item>/gs) || []
    console.log("[v0] Number of items found in RSS:", itemMatches.length)

    // Parse RSS XML to extract posts
    let posts = parseRSSFeed(rssText)

    if (posts.length === 0) {
      posts = lang === "en" ? fallbackPostsEn : fallbackPostsFr
      console.log("[v0] Injected fallback mock posts for lang:", lang)
    }

    console.log("[v0] Number of posts returned:", posts.length)

    return NextResponse.json({ posts })
  } catch (error) {
    console.error("Error fetching Medium posts, using fallbacks:", error)
    const fallbackPosts = lang === "en" ? fallbackPostsEn : fallbackPostsFr
    return NextResponse.json({ posts: fallbackPosts })
  }
}

function parseRSSFeed(rssText: string) {
  const posts: any[] = []

  // Extract items using regex (simple parsing)
  const itemRegex = /<item>(.*?)<\/item>/gs
  const items = rssText.match(itemRegex) || []

  items.forEach((item) => {
    const titleMatch = item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)
    const linkMatch = item.match(/<link>(.*?)<\/link>/)
    const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/)
    const descriptionMatch = item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)
    const contentMatch = item.match(/<content:encoded><!\[CDATA\[(.*?)\]\]><\/content:encoded>/)

    if (titleMatch && linkMatch) {
      let imageUrl = null

      // Method 1: Look for images in content:encoded field (most reliable)
      if (contentMatch?.[1]) {
        const contentImageMatch = contentMatch[1].match(/<img[^>]+src="([^">]+)"[^>]*>/)
        if (contentImageMatch?.[1]) {
          imageUrl = contentImageMatch[1]
        }
      }

      // Method 2: Look for images in description field
      if (!imageUrl && descriptionMatch?.[1]) {
        const descImageMatch = descriptionMatch[1].match(/<img[^>]+src="([^">]+)"[^>]*>/)
        if (descImageMatch?.[1]) {
          imageUrl = descImageMatch[1]
        }
      }

      // Method 3: Look for Medium's thumbnail pattern
      if (!imageUrl) {
        const thumbnailMatch = item.match(/<media:thumbnail[^>]+url="([^">]+)"/)
        if (thumbnailMatch?.[1]) {
          imageUrl = thumbnailMatch[1]
        }
      }

      // Method 4: Look for media:content
      if (!imageUrl) {
        const mediaMatch = item.match(/<media:content[^>]+url="([^">]+)"/)
        if (mediaMatch?.[1]) {
          imageUrl = mediaMatch[1]
        }
      }

      let cleanDescription = ""
      if (descriptionMatch?.[1]) {
        cleanDescription = descriptionMatch[1]
          .replace(/<[^>]*>/g, "") // Remove HTML tags
          .replace(/&[^;]+;/g, " ") // Replace HTML entities with space
          .replace(/\s+/g, " ") // Replace multiple spaces with single space
          .trim()

        // Only add ellipsis if we actually have content and it's longer than 150 chars
        if (cleanDescription.length > 150) {
          cleanDescription = cleanDescription.substring(0, 150) + "..."
        }
      }

      // If no description found, use a default
      if (!cleanDescription) {
        cleanDescription = "Read this article on Medium to learn more."
      }

      posts.push({
        title: titleMatch[1] || "Untitled Article",
        link: linkMatch[1],
        pubDate: pubDateMatch?.[1] || "",
        description: cleanDescription,
        image: imageUrl,
      })
    }
  })

  return posts
}
