"use client"

import { motion } from "framer-motion"
import { Search, Bell, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function BrandHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-b border-border bg-card/50 backdrop-blur-sm"
    >
      <div className="flex h-16 items-center justify-between px-6">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-xl tracking-tight">SOLE</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="text-sm font-medium">
              Dashboard
            </Button>
            <Button variant="ghost" className="text-sm font-medium">
              Koleksi
            </Button>
            <Button variant="ghost" className="text-sm font-medium">
              Penjualan
            </Button>
            <Button variant="ghost" className="text-sm font-medium">
              Kampanye
            </Button>
            <Button variant="ghost" className="text-sm font-medium">
              Pengaturan
            </Button>
          </nav>
        </div>

        {/* Search and Actions */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Cari produk, kampanye..." className="w-64 pl-10 bg-muted/50" />
          </div>

          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
