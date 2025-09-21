"use client"

import { motion } from "framer-motion"
import { Search, SlidersHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

export function BrandFilters() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
      <Card className="rounded-2xl border-0 shadow-sm bg-card/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Cari produk, customer, order ID..." className="pl-10 rounded-xl bg-muted/50" />
            </div>

            <div className="flex gap-2">
              <Select>
                <SelectTrigger className="w-[140px] rounded-xl">
                  <SelectValue placeholder="Kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua</SelectItem>
                  <SelectItem value="sport">Sport</SelectItem>
                  <SelectItem value="streetwear">Streetwear</SelectItem>
                  <SelectItem value="formal">Formal</SelectItem>
                  <SelectItem value="limited">Limited Edition</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[120px] rounded-xl">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua</SelectItem>
                  <SelectItem value="completed">Selesai</SelectItem>
                  <SelectItem value="processing">Proses</SelectItem>
                  <SelectItem value="shipped">Dikirim</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon" className="rounded-xl bg-transparent">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
