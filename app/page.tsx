import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import TrustedBySection from "@/components/trusted-by-section"
import AboutSection from "@/components/about-section"
import CompaniesSection from "@/components/companies-section"
import PortfolioSection from "@/components/portfolio-section"
import TalksSection from "@/components/talks-section"
import PodcastSection from "@/components/podcast-section"
import BlogSection from "@/components/blog-section"
import Footer from "@/components/footer"
import ScrollFadeWrapper from "@/components/scroll-fade-wrapper"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Navbar />

      <ScrollFadeWrapper delay={100}>
        <HeroSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={200} id="trusted-by">
        <TrustedBySection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={300}>
        <AboutSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={350}>
        <CompaniesSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={400}>
        <PortfolioSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={500}>
        <TalksSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={550}>
        <PodcastSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={600}>
        <BlogSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={700}>
        <Footer />
      </ScrollFadeWrapper>
    </main>
  )
}
