"use client"

import { motion } from "framer-motion"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const salesData = [
  { month: "Jan", sales: 186, revenue: 80 },
  { month: "Feb", sales: 305, revenue: 200 },
  { month: "Mar", sales: 237, revenue: 120 },
  { month: "Apr", sales: 273, revenue: 190 },
  { month: "Mei", sales: 209, revenue: 130 },
  { month: "Jun", sales: 214, revenue: 140 },
  { month: "Jul", sales: 290, revenue: 180 },
  { month: "Agu", sales: 320, revenue: 220 },
  { month: "Sep", sales: 280, revenue: 170 },
  { month: "Okt", sales: 340, revenue: 240 },
  { month: "Nov", sales: 380, revenue: 280 },
  { month: "Des", sales: 420, revenue: 320 },
]

export function SalesChart() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
      <Card className="rounded-2xl shadow-sm border-0 bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-balance">Grafik Penjualan Sepatu</CardTitle>
          <CardDescription>Penjualan dan pendapatan per bulan dalam tahun ini</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              sales: {
                label: "Penjualan",
                color: "hsl(var(--chart-1))",
              },
              revenue: {
                label: "Pendapatan (Juta)",
                color: "hsl(var(--accent))",
              },
            }}
            className="h-[300px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <XAxis dataKey="month" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="var(--color-chart-1)"
                  strokeWidth={3}
                  dot={{ fill: "var(--color-chart-1)", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: "var(--color-chart-1)", strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="var(--color-accent)"
                  strokeWidth={3}
                  dot={{ fill: "var(--color-accent)", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: "var(--color-accent)", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </motion.div>
  )
}
