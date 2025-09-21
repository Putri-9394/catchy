"use client"

import { motion } from "framer-motion"
import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function Filters() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
    >
      <div className="flex flex-col sm:flex-row gap-3 flex-1">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Cari produk sepatu..." className="pl-10 bg-muted/50 border-0 focus-visible:ring-1" />
        </div>

        <Select>
          <SelectTrigger className="w-full sm:w-[180px] bg-muted/50 border-0">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Kategori" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Kategori</SelectItem>
            <SelectItem value="sport">Sport</SelectItem>
            <SelectItem value="casual">Casual</SelectItem>
            <SelectItem value="formal">Formal</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </motion.div>
  )
}
