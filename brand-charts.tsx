"use client"

import { motion } from "framer-motion"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const salesData = [
  { month: "Jan", sales: 4000, target: 3500 },
  { month: "Feb", sales: 3000, target: 3200 },
  { month: "Mar", sales: 5000, target: 4000 },
  { month: "Apr", sales: 4500, target: 4200 },
  { month: "May", sales: 6000, target: 5000 },
  { month: "Jun", sales: 5500, target: 5200 },
]

const demographicData = [
  { name: "18-25", value: 35, color: "var(--color-chart-1)" },
  { name: "26-35", value: 40, color: "var(--color-chart-2)" },
  { name: "36-45", value: 20, color: "var(--color-chart-3)" },
  { name: "45+", value: 5, color: "var(--color-chart-4)" },
]

export function BrandCharts() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Card className="rounded-2xl border-0 shadow-sm bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-balance">Tren Penjualan</CardTitle>
            <CardDescription>Performa penjualan bulanan vs target</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                sales: {
                  label: "Penjualan",
                  color: "var(--color-chart-1)",
                },
                target: {
                  label: "Target",
                  color: "var(--color-chart-2)",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="month" stroke="var(--color-muted-foreground)" />
                  <YAxis stroke="var(--color-muted-foreground)" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="var(--color-chart-1)"
                    strokeWidth={3}
                    dot={{ fill: "var(--color-chart-1)", strokeWidth: 2, r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="target"
                    stroke="var(--color-chart-2)"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: "var(--color-chart-2)", strokeWidth: 2, r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <Card className="rounded-2xl border-0 shadow-sm bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-balance">Demografi Pelanggan</CardTitle>
            <CardDescription>Distribusi usia pelanggan</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                demographic: {
                  label: "Demografi",
                },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={demographicData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {demographicData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="flex justify-center space-x-4 mt-4">
              {demographicData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-muted-foreground">
                    {item.name} ({item.value}%)
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
