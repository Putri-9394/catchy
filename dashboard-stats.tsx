"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Package, DollarSign, ShoppingCart, Users } from "lucide-react"

const stats = [
  {
    title: "Total Pesanan",
    value: "1,234",
    change: "+12.5%",
    trend: "up",
    icon: ShoppingCart,
    color: "text-blue-600",
  },
  {
    title: "Pendapatan",
    value: "Rp 45.2M",
    change: "+8.2%",
    trend: "up",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Produk Terpopuler",
    value: "StridePulse Air",
    change: "2.5K terjual",
    trend: "up",
    icon: Package,
    color: "text-accent",
  },
  {
    title: "Pelanggan Aktif",
    value: "8,945",
    change: "+15.3%",
    trend: "up",
    icon: Users,
    color: "text-purple-600",
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="rounded-2xl border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="flex items-center text-sm">
                {stat.trend === "up" ? (
                  <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
                )}
                <span className={stat.trend === "up" ? "text-green-600" : "text-red-600"}>{stat.change}</span>
                <span className="text-muted-foreground ml-1">dari bulan lalu</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
