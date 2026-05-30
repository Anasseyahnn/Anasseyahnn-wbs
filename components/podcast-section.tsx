"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

export default function PodcastSection() {
  const { t } = useLanguage()

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

  const episodes = [
    {
      embedUrl: "https://open.spotify.com/embed/episode/6wQVfj5GopOP61SncfQmhC/video?utm_source=generator&theme=0",
    },
    {
      embedUrl: "https://open.spotify.com/embed/episode/1WKllobNx0SARQoDdKWwSZ/video?utm_source=generator&theme=0",
    },
    {
      embedUrl: "https://open.spotify.com/embed/episode/2AO250o67xRvRsLzUInpba/video?utm_source=generator&theme=0",
    },
  ]

  return (
    <section id="podcast" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Top Row - Image and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-center mb-12">
          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/podcastimage.png"
                alt="Artu Grande Podcast"
                width={350}
                height={350}
                className="w-full max-w-[350px] h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Column - Description */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t("podcast.title")}
            </h2>

            <div className="space-y-4">
              <p className="text-white/75 leading-relaxed">
                {renderTextWithBold(t("podcast.description1"))}
              </p>
              <p className="text-white/75 leading-relaxed">
                {renderTextWithBold(t("podcast.description2"))}
              </p>
              <p className="text-white/75 leading-relaxed">
                {renderTextWithBold(t("podcast.description3"))}
              </p>
              <p className="text-white/75 leading-relaxed">
                {renderTextWithBold(t("podcast.stats"))}
              </p>
            </div>

            {/* Platform Links */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://linkedin.com/in/anasse-yahanan-bouagba-3b39aa242/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2] hover:bg-[#0077b5] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                LinkedIn
                <ExternalLink size={16} />
              </a>
              <a
                href="https://github.com/Anasseyahnn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#24292E] hover:bg-[#2f363d] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                GitHub
                <ExternalLink size={16} />
              </a>
              <a
                href="https://x.com/anasse_yahanan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-white/90 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                X (Twitter)
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row - Full Width Episodes */}
        <div className="w-full">
          <h3 className="text-lg font-semibold text-white/90 mb-4">{t("podcast.latestEpisodes")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {episodes.map((episode, index) => (
              <div key={index} className="w-full">
                <iframe
                  src={episode.embedUrl}
                  width="100%"
                  height="279"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{ borderRadius: "12px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
