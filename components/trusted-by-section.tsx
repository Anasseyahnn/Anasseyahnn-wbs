"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const clients = [
  { name: "Bestem", logo: "/images/clients/bestem.png" },
  { name: "Betrusty", logo: "/images/clients/betrusty.png" },
  { name: "C2T", logo: "/images/clients/c2t.png" },
  { name: "Eluter", logo: "/images/clients/eluter.png" },
  { name: "Glocal", logo: "/images/clients/glocal.png" },
  { name: "Knoly", logo: "/images/clients/knoly.png" },
  { name: "MultiversX", logo: "/images/clients/multiversx.png" },
  { name: "Omnilane", logo: "/images/clients/omnilane.png" },
  { name: "Ownomad", logo: "/images/clients/ownomad.png" },
  { name: "PetFundMe", logo: "/images/clients/petfundme.png" },
  { name: "Provacy", logo: "/images/clients/provacy.png" },
  { name: "Prutopia", logo: "/images/clients/prutopia.png" },
  { name: "Rather", logo: "/images/clients/rather.png" },
  { name: "Refillit", logo: "/images/clients/refillit.png" },
  { name: "SAIA", logo: "/images/clients/saia.png" },
  { name: "SNet", logo: "/images/clients/snet.png" },
  { name: "Spacewars", logo: "/images/clients/spacewars.png" },
  { name: "Trebly", logo: "/images/clients/trebly.png" },
  { name: "WodPay", logo: "/images/clients/wodpay.png" },
  { name: "YellowCash", logo: "/images/clients/yellowcash.png" },
]

export default function TrustedBySection() {
  const { t } = useLanguage()
  const [translateX, setTranslateX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [itemWidth, setItemWidth] = useState(0)

  useEffect(() => {
    const calculateItemWidth = () => {
      if (containerRef.current) {
        const firstItem = containerRef.current.querySelector(".logo-item")
        if (firstItem) {
          const rect = firstItem.getBoundingClientRect()
          const styles = window.getComputedStyle(firstItem)
          const marginLeft = Number.parseInt(styles.marginLeft)
          const marginRight = Number.parseInt(styles.marginRight)
          setItemWidth(rect.width + marginLeft + marginRight)
        }
      }
    }

    calculateItemWidth()
    window.addEventListener("resize", calculateItemWidth)

    return () => window.removeEventListener("resize", calculateItemWidth)
  }, [])

  useEffect(() => {
    if (itemWidth === 0) return

    const animate = () => {
      setTranslateX((prev) => {
        const newTranslateX = prev - 1 // Move 1px per frame
        const resetPoint = -(itemWidth * clients.length) // Reset when first set is completely hidden

        if (newTranslateX <= resetPoint) {
          return 0 // Reset to start position
        }
        return newTranslateX
      })
    }

    const intervalId = setInterval(animate, 16) // ~60fps

    return () => clearInterval(intervalId)
  }, [itemWidth])

  return (
    <section id="trusted-by" className="py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("trustedBy.title")}</h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">{t("trustedBy.subtitle")}</p>
        </div>

        <div className="relative overflow-hidden">
          <div ref={containerRef} className="flex transition-none" style={{ transform: `translateX(${translateX}px)` }}>
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div key={`first-${index}`} className="logo-item flex-shrink-0 mx-6 flex items-center justify-center">
                <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} client logo - Artu Grande UX design Web3 fintech project portfolio`}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}

            {/* Second set for seamless loop */}
            {clients.map((client, index) => (
              <div key={`second-${index}`} className="logo-item flex-shrink-0 mx-6 flex items-center justify-center">
                <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} client logo - Artu Grande UX design Web3 fintech project portfolio`}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  )
}
