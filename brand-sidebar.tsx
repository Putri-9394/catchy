"use client"

import { motion } from "framer-motion"
import { LayoutDashboard, Package, TrendingUp, Megaphone, Settings, Star, Users, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Package, label: "Koleksi", active: false },
  { icon: TrendingUp, label: "Penjualan", active: false },
  { icon: Megaphone, label: "Kampanye", active: false },
  { icon: Users, label: "Pelanggan", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: Star, label: "Reviews", active: false },
  { icon: Settings, label: "Pengaturan", active: false },
]

export function BrandSidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-64 bg-sidebar border-r border-sidebar-border"
    >
      <div className="flex flex-col h-full">
        <div className="p-6">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-xl bg-sidebar-primary flex items-center justify-center">
              <span className="text-sidebar-primary-foreground font-bold">S</span>
            </div>
            <div>
              <h2 className="font-bold text-sidebar-foreground text-lg">SOLE</h2>
              <p className="text-xs text-sidebar-foreground/60">Premium Footwear</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {sidebarItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                variant={item.active ? "default" : "ghost"}
                className={`w-full justify-start space-x-3 ${
                  item.active
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span className="font-medium">{item.label}</span>
              </Button>
            </motion.div>
          ))}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <div className="bg-sidebar-accent rounded-xl p-4">
            <h3 className="font-semibold text-sidebar-accent-foreground text-sm mb-2">Upgrade ke Pro</h3>
            <p className="text-xs text-sidebar-accent-foreground/80 mb-3">
              Dapatkan fitur analytics advanced dan unlimited campaigns
            </p>
            <Button size="sm" className="w-full bg-sidebar-primary text-sidebar-primary-foreground">
              Upgrade Now
            </Button>
          </div>
        </div>
      </div>
    </motion.aside>
  )
}
