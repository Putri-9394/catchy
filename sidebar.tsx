"use client"

import { motion } from "framer-motion"
import { LayoutDashboard, Package, Tags, BarChart3, Settings, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Package, label: "Produk", active: false },
  { icon: Tags, label: "Kategori", active: false },
  { icon: BarChart3, label: "Laporan", active: false },
  { icon: Settings, label: "Pengaturan", active: false },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden bg-card shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: isOpen ? 0 : -280 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={cn(
          "fixed left-0 top-0 z-40 h-full w-70 bg-sidebar border-r border-sidebar-border md:relative md:translate-x-0 md:z-0",
          "md:block",
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center border-b border-sidebar-border px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary">
                <Package className="h-5 w-5 text-sidebar-primary-foreground" />
              </div>
              <span className="text-lg font-semibold text-sidebar-foreground">ShoeDash</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2 p-4">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  variant={item.active ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-3 h-11 text-sm font-medium",
                    item.active
                      ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Button>
              </motion.div>
            ))}
          </nav>
        </div>
      </motion.aside>
    </>
  )
}
