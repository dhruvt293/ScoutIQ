import { SiteNav } from "@/components/landing/site-nav"
import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"
import { AnalyticsPreview } from "@/components/landing/analytics-preview"
import { Predictions } from "@/components/landing/predictions"
import { Agents } from "@/components/landing/agents"
import { Testimonials } from "@/components/landing/testimonials"
import { PricingSection } from "@/components/landing/pricing-section"
import { FaqSection, CtaBanner, SiteFooter } from "@/components/landing/faq-section"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <SiteNav />
      <Hero />
      <Features />
      <AnalyticsPreview />
      <Predictions />
      <Agents />
      <Testimonials />
      <PricingSection />
      <FaqSection />
      <CtaBanner />
      <SiteFooter />
    </main>
  )
}
