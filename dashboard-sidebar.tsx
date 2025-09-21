"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BarChart3, Package, ShoppingCart, Users, Settings, TrendingUp, Home, Tag } from "lucide-react"
import { useState } from "react"

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard", active: true },
  { icon: Package, label: "Produk", href: "/dashboard/products" },
  { icon: ShoppingCart, label: "Pesanan", href: "/dashboard/orders" },
  { icon: Users, label: "Pelanggan", href: "/dashboard/customers" },
  { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
  { icon: Tag, label: "Promo", href: "/dashboard/promos" },
  { icon: TrendingUp, label: "Laporan", href: "/dashboard/reports" },
  { icon: Settings, label: "Pengaturan", href: "/dashboard/settings" },
]

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`${collapsed ? "w-16" : "w-64"} bg-card border-r transition-all duration-300 flex flex-col`}
    >
      {/* Logo */}
      <div className="p-6 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-lg">S</span>
          </div>
          {!collapsed && <span className="text-xl font-bold tracking-tight">StridePulse</span>}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Button
              variant={item.active ? "default" : "ghost"}
              className={`w-full justify-start ${
                collapsed ? "px-2" : "px-4"
              } ${item.active ? "bg-accent text-accent-foreground" : ""}`}
            >
              <item.icon className="h-5 w-5" />
              {!collapsed && <span className="ml-3">{item.label}</span>}
            </Button>
          </motion.div>
        ))}
      </nav>

      {/* Collapse Toggle */}
      <div className="p-4 border-t">
        <Button variant="ghost" size="sm" onClick={() => setCollapsed(!collapsed)} className="w-full">
          {collapsed ? "→" : "←"}
        </Button>
      </div>
    </motion.aside>
  )
}
