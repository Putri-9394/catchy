"use client"

import { StrideHeader } from "@/components/stride-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedCollections } from "@/components/featured-collections"
import { BestSellers } from "@/components/best-sellers"
import { PromoSection } from "@/components/promo-section"

export default function StridePulseLanding() {
  return (
    <div className="min-h-screen bg-background">
      <StrideHeader />
      <HeroSection />
      <FeaturedCollections />
      <BestSellers />
      <PromoSection />
    </div>
  )
}
