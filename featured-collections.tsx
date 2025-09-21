"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingCart } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "StridePulse Runner Pro",
    price: "Rp 1.299.000",
    originalPrice: "Rp 1.599.000",
    image: "/modern-running-shoe-white-red.jpg",
    category: "Running",
    rating: 4.8,
    reviews: 124,
    badge: "New",
    isOnSale: true,
  },
  {
    id: 2,
    name: "Urban Stride Classic",
    price: "Rp 899.000",
    image: "/casual-sneaker-dark-gray.jpg",
    category: "Casual",
    rating: 4.6,
    reviews: 89,
    badge: "Best Seller",
    isOnSale: false,
  },
  {
    id: 3,
    name: "Elite Performance X",
    price: "Rp 1.799.000",
    image: "/athletic-performance-shoe-red-accents.jpg",
    category: "Sport",
    rating: 4.9,
    reviews: 156,
    badge: "Limited",
    isOnSale: false,
  },
  {
    id: 4,
    name: "Comfort Walk Daily",
    price: "Rp 699.000",
    originalPrice: "Rp 899.000",
    image: "/comfortable-walking-shoe-white.jpg",
    category: "Comfort",
    rating: 4.7,
    reviews: 203,
    badge: "Sale",
    isOnSale: true,
  },
]

export function FeaturedCollections() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4">Koleksi Unggulan</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Temukan sepatu terbaik dari koleksi terbaru kami yang dirancang untuk gaya hidup modern dan aktif
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Badge */}
                    <Badge
                      variant={
                        product.badge === "New" ? "default" : product.badge === "Sale" ? "destructive" : "secondary"
                      }
                      className="absolute top-4 left-4 font-semibold"
                    >
                      {product.badge}
                    </Badge>

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="icon" variant="secondary" className="rounded-full">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="secondary" className="rounded-full">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground font-medium">{product.category}</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-sm text-muted-foreground">({product.reviews})</span>
                      </div>
                    </div>

                    <h3 className="font-bold text-lg mb-3 text-balance">{product.name}</h3>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-accent">{product.price}</span>
                        {product.isOnSale && (
                          <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg font-semibold rounded-2xl border-2 bg-transparent"
          >
            Lihat Semua Koleksi
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
