"use client"

import { motion } from "framer-motion"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingAddButton() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        size="lg"
        className="h-14 w-14 rounded-full shadow-lg bg-accent hover:bg-accent/90 text-accent-foreground"
      >
        <Plus className="h-6 w-6" />
      </Button>
    </motion.div>
  )
}
