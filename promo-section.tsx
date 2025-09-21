"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Gift, Percent, Zap } from "lucide-react"
import { useEffect, useState } from "react"

export function PromoSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Main Promo Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="overflow-hidden rounded-3xl border-0 shadow-2xl bg-gradient-to-r from-accent/10 to-accent/5">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Promo Content */}
                <div className="p-8 lg:p-12">
                  <Badge className="mb-4 bg-accent text-accent-foreground font-bold px-4 py-2">
                    <Zap className="h-4 w-4 mr-2" />
                    Flash Sale
                  </Badge>

                  <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance mb-4">
                    Mega Sale
                    <br />
                    <span className="text-accent">Up to 50% Off</span>
                  </h2>

                  <p className="text-xl text-muted-foreground text-pretty mb-8">
                    Dapatkan diskon hingga 50% untuk semua koleksi sepatu pilihan. Kesempatan terbatas!
                  </p>

                  {/* Countdown Timer */}
                  <div className="flex items-center gap-4 mb-8">
                    <Clock className="h-6 w-6 text-accent" />
                    <span className="text-lg font-semibold">Berakhir dalam:</span>
                    <div className="flex gap-2">
                      {Object.entries(timeLeft).map(([unit, value]) => (
                        <div key={unit} className="text-center">
                          <div className="bg-accent text-accent-foreground font-bold text-lg px-3 py-2 rounded-lg min-w-[3rem]">
                            {value.toString().padStart(2, "0")}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1 capitalize">{unit}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold rounded-2xl"
                  >
                    Shop Sale Now
                  </Button>
                </div>

                {/* Promo Image */}
                <div className="relative p-8">
                  <img src="/sale-shoes-collection-red-discount.jpg" alt="Sale Collection" className="w-full h-auto rounded-2xl" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional Promos */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="group overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Buy 1 Get 1</h3>
                <p className="text-muted-foreground mb-4">Beli 1 sepatu pilihan, gratis 1 sepatu casual</p>
                <Button variant="outline" className="rounded-xl bg-transparent">
                  Lihat Detail
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="group overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Percent className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Member Discount</h3>
                <p className="text-muted-foreground mb-4">Diskon ekstra 15% untuk member StridePulse</p>
                <Button variant="outline" className="rounded-xl bg-transparent">
                  Join Member
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="group overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Free Shipping</h3>
                <p className="text-muted-foreground mb-4">Gratis ongkir untuk pembelian minimal Rp 500K</p>
                <Button variant="outline" className="rounded-xl bg-transparent">
                  Shop Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
