"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Calendar, Search, Grid, List } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface MediumPost {
  title: string
  link: string
  pubDate: string
  description: string
  image?: string
}

export default function BlogSection() {
  const [posts, setPosts] = useState<MediumPost[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<"featured" | "all">("featured")
  const [searchQuery, setSearchQuery] = useState("")
  const { t, language } = useLanguage()

  useEffect(() => {
    fetchPosts()
  }, [language])

  const fetchPosts = async () => {
    setLoading(true)
    try {
      const response = await fetch(`/api/medium-posts?lang=${language}`)
      const data = await response.json()
      setPosts(data.posts || [])
    } catch (error) {
      console.error("Error fetching posts:", error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    try {
      if (!dateString) return "Recent"
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    } catch {
      return "Recent"
    }
  }

  const cleanText = (text: string | undefined, fallback = "") => {
    if (!text || text === "undefined" || text.trim() === "") {
      return fallback
    }
    return text.trim()
  }

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const featuredPosts = posts.slice(0, 6)

  return (
    <section id="blog" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans">
            Articles – Web3, AI & UX Insights
          </h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">{t("blog.subtitle")}</p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex bg-white/5 backdrop-blur-md rounded-full p-1 border border-white/10">
              <button
                onClick={() => setActiveTab("featured")}
                className={`flex items-center px-6 py-2 rounded-full transition-all duration-300 ${
                  activeTab === "featured"
                    ? "bg-white/20 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <Grid className="w-4 h-4 mr-2" />
                Featured
              </button>
              <button
                onClick={() => setActiveTab("all")}
                className={`flex items-center px-6 py-2 rounded-full transition-all duration-300 ${
                  activeTab === "all" ? "bg-white/20 text-white" : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <List className="w-4 h-4 mr-2" />
                Last Articles ({posts.length})
              </button>
            </div>

            {/* Search Bar - only show in 'all' tab */}
            {activeTab === "all" && (
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full pl-10 pr-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent w-64"
                />
              </div>
            )}
          </div>
        </div>

        {/* Content based on active tab */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 animate-pulse border border-white/10">
                <div className="h-40 bg-white/10 rounded-lg mb-4"></div>
                <div className="h-4 bg-white/20 rounded mb-4"></div>
                <div className="h-3 bg-white/20 rounded mb-2"></div>
                <div className="h-3 bg-white/20 rounded mb-4"></div>
                <div className="h-8 bg-white/20 rounded"></div>
              </div>
            ))}
          </div>
        ) : posts.length > 0 ? (
          <>
            {/* Featured Tab - Cards View */}
            {activeTab === "featured" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPosts.map((post, index) => (
                  <a
                    key={index}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl block cursor-pointer"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg?height=200&width=400&query=article cover"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=200&width=400"
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center text-white/60 text-sm mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(post.pubDate)}
                      </div>

                      <h3 className="text-white font-semibold text-lg mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors">
                        {cleanText(post.title, "Untitled Article")}
                      </h3>

                      <p className="text-white/75 text-sm mb-4 line-clamp-3">
                        {cleanText(post.description, "No description available.")}
                      </p>

                      <div className="inline-flex items-center text-blue-400 group-hover:text-blue-300 font-medium text-sm transition-colors group-hover:translate-x-1 transform duration-200">
                        {t("blog.readMore")}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}

            {activeTab === "all" && (
              <div className="space-y-4">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post, index) => (
                    <a
                      key={index}
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] p-6 block cursor-pointer"
                    >
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Article Image */}
                        <div className="flex-shrink-0">
                          <img
                            src={post.image || "/placeholder.svg?height=80&width=120&query=article thumbnail"}
                            alt={post.title}
                            className="w-full sm:w-24 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement
                              target.src = "/placeholder.svg?height=80&width=120"
                            }}
                          />
                        </div>

                        {/* Article Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center text-white/60 text-sm mb-2">
                            <Calendar className="w-3 h-3 mr-1" />
                            {formatDate(post.pubDate)}
                          </div>

                          <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors">
                            {cleanText(post.title, "Untitled Article")}
                          </h3>

                          <p className="text-white/75 text-sm mb-3 line-clamp-2">
                            {cleanText(post.description, "No description available.")}
                          </p>

                          <div className="inline-flex items-center text-blue-400 group-hover:text-blue-300 font-medium text-sm transition-colors">
                            {t("blog.readMore")}
                            <ExternalLink className="w-3 h-3 ml-1" />
                          </div>
                        </div>
                      </div>
                    </a>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-white/75 text-lg">No articles found matching "{searchQuery}"</p>
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-white/75 text-lg">{t("blog.noArticles")}</p>
          </div>
        )}

        {/* View All Link - only show in featured tab */}
        {posts.length > 0 && activeTab === "featured" && (
          <div className="text-center mt-12">
            <button
              onClick={() => setActiveTab("all")}
              className="inline-flex items-center bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-3 rounded-full hover:bg-white/15 transition-all duration-300 hover:scale-105 font-medium"
            >
              View Last {posts.length} Articles
              <List className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
