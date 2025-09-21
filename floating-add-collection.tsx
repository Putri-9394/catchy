"use client"

import { motion } from "framer-motion"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingAddCollection() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Button
        size="lg"
        className="h-14 w-14 rounded-full shadow-lg bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-110 transition-all duration-200"
      >
        <Plus className="h-6 w-6" />
      </Button>
    </motion.div>
  )
}
