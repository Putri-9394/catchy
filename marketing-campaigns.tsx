"use client"

import { motion } from "framer-motion"
import { Calendar, Users, TrendingUp, Play, Pause } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const campaigns = [
  {
    id: 1,
    name: "Promo 11.11 Mega Sale",
    status: "active",
    startDate: "2024-11-01",
    endDate: "2024-11-11",
    reach: 45000,
    conversions: 1250,
    budget: "Rp 50,000,000",
    spent: "Rp 32,000,000",
    progress: 64,
  },
  {
    id: 2,
    name: "New Arrival Campaign",
    status: "active",
    startDate: "2024-10-15",
    endDate: "2024-12-15",
    reach: 28000,
    conversions: 890,
    budget: "Rp 30,000,000",
    spent: "Rp 18,500,000",
    progress: 62,
  },
  {
    id: 3,
    name: "Limited Gold Edition Launch",
    status: "paused",
    startDate: "2024-09-01",
    endDate: "2024-11-30",
    reach: 15000,
    conversions: 450,
    budget: "Rp 75,000,000",
    spent: "Rp 25,000,000",
    progress: 33,
  },
]

const getStatusBadge = (status: string) => {
  const statusConfig = {
    active: { label: "Aktif", variant: "default" as const, color: "text-green-500" },
    paused: { label: "Dijeda", variant: "secondary" as const, color: "text-yellow-500" },
    completed: { label: "Selesai", variant: "outline" as const, color: "text-blue-500" },
  }

  const config = statusConfig[status as keyof typeof statusConfig]
  return <Badge variant={config.variant}>{config.label}</Badge>
}

export function MarketingCampaigns() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
      <Card className="rounded-2xl border-0 shadow-sm bg-card/50 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-balance">Kampanye Marketing</CardTitle>
            <p className="text-muted-foreground text-pretty">Kelola promosi dan campaign aktif</p>
          </div>
          <Button className="rounded-xl bg-accent text-accent-foreground">Buat Campaign</Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              className="p-4 rounded-xl border border-border bg-muted/20"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="space-y-1">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-semibold text-balance">{campaign.name}</h4>
                    {getStatusBadge(campaign.status)}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {campaign.startDate} - {campaign.endDate}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="rounded-lg bg-transparent">
                    {campaign.status === "active" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="space-y-1">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Reach</span>
                  </div>
                  <p className="font-semibold">{campaign.reach.toLocaleString()}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Conversions</span>
                  </div>
                  <p className="font-semibold">{campaign.conversions.toLocaleString()}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-sm text-muted-foreground">Budget</span>
                  <p className="font-semibold">{campaign.budget}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-sm text-muted-foreground">Spent</span>
                  <p className="font-semibold">{campaign.spent}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Budget Progress</span>
                  <span className="font-medium">{campaign.progress}%</span>
                </div>
                <Progress value={campaign.progress} className="h-2" />
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  )
}
