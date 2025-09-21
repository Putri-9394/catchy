"use client"

import { motion } from "framer-motion"
import { TrendingUp, Package, DollarSign, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const stats = [
  {
    title: "Total Sepatu Terjual",
    value: "2,847",
    change: "+12.5%",
    trend: "up",
    icon: Package,
    color: "text-chart-1",
  },
  {
    title: "Pendapatan",
    value: "Rp 847.2M",
    change: "+8.2%",
    trend: "up",
    icon: DollarSign,
    color: "text-accent",
  },
  {
    title: "Stok Tersisa",
    value: "1,234",
    change: "-3.1%",
    trend: "down",
    icon: AlertTriangle,
    color: "text-chart-3",
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="rounded-2xl shadow-sm border-0 bg-card/50 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-balance">{stat.value}</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <TrendingUp className={`h-3 w-3 ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`} />
                <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>{stat.change}</span>
                <span>dari bulan lalu</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
