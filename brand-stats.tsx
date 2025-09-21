"use client"

import { motion } from "framer-motion"
import { TrendingUp, Package, Users, DollarSign } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const stats = [
  {
    title: "Total Penjualan Bulan Ini",
    value: "Rp 2.4M",
    change: "+12.5%",
    icon: DollarSign,
    trend: "up",
  },
  {
    title: "Produk Populer",
    value: "Air Max Pro",
    change: "1,234 terjual",
    icon: Package,
    trend: "up",
  },
  {
    title: "Pertumbuhan Brand",
    value: "+28%",
    change: "vs bulan lalu",
    icon: TrendingUp,
    trend: "up",
  },
  {
    title: "Total Pelanggan",
    value: "12,847",
    change: "+5.2%",
    icon: Users,
    trend: "up",
  },
]

export function BrandStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="rounded-2xl border-0 shadow-sm bg-card/50 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <stat.icon className="h-4 w-4 text-accent" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-balance">{stat.value}</div>
              <p className="text-xs text-accent font-medium mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
