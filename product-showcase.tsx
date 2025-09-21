"use client"

import { motion } from "framer-motion"
import { Star, Heart, ShoppingCart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const featuredProducts = [
  {
    id: 1,
    name: "Air Max Pro Elite",
    category: "Sport",
    price: "Rp 2,499,000",
    rating: 4.8,
    image: "/premium-black-sneakers.jpg",
    isNew: true,
    isFavorite: false,
  },
  {
    id: 2,
    name: "Urban Street Classic",
    category: "Streetwear",
    price: "Rp 1,899,000",
    rating: 4.6,
    image: "/white-urban-sneakers.png",
    isNew: false,
    isFavorite: true,
  },
  {
    id: 3,
    name: "Executive Leather",
    category: "Formal",
    price: "Rp 3,299,000",
    rating: 4.9,
    image: "/luxury-leather-dress-shoes.jpg",
    isNew: false,
    isFavorite: false,
  },
  {
    id: 4,
    name: "Limited Gold Edition",
    category: "Limited Edition",
    price: "Rp 4,999,000",
    rating: 5.0,
    image: "/gold-luxury-sneakers.jpg",
    isNew: true,
    isFavorite: true,
  },
]

export function ProductShowcase() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
      <Card className="rounded-2xl border-0 shadow-sm bg-card/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-balance">Koleksi Terbaru</h3>
              <p className="text-muted-foreground text-pretty">Showcase produk unggulan brand</p>
            </div>
            <Button variant="outline" className="rounded-xl bg-transparent">
              Lihat Semua
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="group"
              >
                <Card className="rounded-2xl border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex space-x-2">
                      {product.isNew && <Badge className="bg-accent text-accent-foreground">NEW</Badge>}
                      {product.category === "Limited Edition" && <Badge variant="secondary">LIMITED</Badge>}
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className={`absolute top-3 right-3 rounded-full ${
                        product.isFavorite ? "text-red-500" : "text-muted-foreground"
                      }`}
                    >
                      <Heart className={`h-4 w-4 ${product.isFavorite ? "fill-current" : ""}`} />
                    </Button>
                  </div>

                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-xs">
                        {product.category}
                      </Badge>
                      <h4 className="font-semibold text-balance">{product.name}</h4>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-lg">{product.price}</span>
                        <Button size="sm" className="rounded-xl">
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
