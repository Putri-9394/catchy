"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react"
import { useState } from "react"

const bestSellers = [
  {
    id: 1,
    name: "StridePulse Air Max",
    price: "Rp 1.199.000",
    image: "/bestseller-running-shoe-red-white.jpg",
    sales: "2.5K+ terjual",
    rank: 1,
  },
  {
    id: 2,
    name: "Urban Classic White",
    price: "Rp 799.000",
    image: "/white-casual-sneaker-bestseller.jpg",
    sales: "1.8K+ terjual",
    rank: 2,
  },
  {
    id: 3,
    name: "Sport Elite Black",
    price: "Rp 1.399.000",
    image: "/black-athletic-shoe-bestseller.jpg",
    sales: "1.6K+ terjual",
    rank: 3,
  },
  {
    id: 4,
    name: "Comfort Pro Gray",
    price: "Rp 899.000",
    image: "/gray-comfort-shoe-bestseller.jpg",
    sales: "1.4K+ terjual",
    rank: 4,
  },
  {
    id: 5,
    name: "Runner Speed Red",
    price: "Rp 1.099.000",
    image: "/red-running-shoe-bestseller.jpg",
    sales: "1.2K+ terjual",
    rank: 5,
  },
]

export function BestSellers() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, bestSellers.length - 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, bestSellers.length - 2)) % Math.max(1, bestSellers.length - 2))
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="h-8 w-8 text-accent" />
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Best Sellers</h2>
            </div>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
              Produk paling populer yang dipilih ribuan pelanggan
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex gap-2">
            <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full bg-transparent">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full bg-transparent">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: -currentIndex * 320 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {bestSellers.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-80"
              >
                <Card className="group overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    {/* Rank Badge */}
                    <div className="relative">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground font-bold text-lg px-3 py-1">
                        #{product.rank}
                      </Badge>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2 text-balance">{product.name}</h3>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-accent">{product.price}</span>
                        <span className="text-sm text-muted-foreground font-medium">{product.sales}</span>
                      </div>
                      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl">
                        Beli Sekarang
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center gap-2 mt-8">
          <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full bg-transparent">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full bg-transparent">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
