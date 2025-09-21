"use client"

import { motion } from "framer-motion"
import { Search, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 px-6"
    >
      <div className="flex flex-1 items-center gap-4">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Cari sepatu..." className="pl-10 bg-muted/50 border-0 focus-visible:ring-1" />
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-accent text-[10px] font-medium flex items-center justify-center text-accent-foreground">
            3
          </span>
        </Button>

        {/* Profile */}
        <Button variant="ghost" className="gap-2 px-3">
          <Avatar className="h-7 w-7">
            <AvatarImage src="/abstract-profile.png" />
            <AvatarFallback className="text-xs">AD</AvatarFallback>
          </Avatar>
          <span className="hidden sm:inline text-sm font-medium">Admin</span>
        </Button>
      </div>
    </motion.header>
  )
}
