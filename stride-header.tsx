"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Menu, Search, User } from "lucide-react"
import { useState } from "react"

export function StrideHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-lg">S</span>
          </div>
          <span className="text-2xl font-bold tracking-tight">StridePulse</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-accent transition-colors font-medium">
            Home
          </a>
          <a href="#" className="text-foreground hover:text-accent transition-colors font-medium">
            Koleksi
          </a>
          <a href="#" className="text-foreground hover:text-accent transition-colors font-medium">
            Best Seller
          </a>
          <a href="#" className="text-foreground hover:text-accent transition-colors font-medium">
            Promo
          </a>
          <a href="#" className="text-foreground hover:text-accent transition-colors font-medium">
            Tentang Kami
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t bg-background"
        >
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <a href="#" className="block text-foreground hover:text-accent transition-colors font-medium">
              Home
            </a>
            <a href="#" className="block text-foreground hover:text-accent transition-colors font-medium">
              Koleksi
            </a>
            <a href="#" className="block text-foreground hover:text-accent transition-colors font-medium">
              Best Seller
            </a>
            <a href="#" className="block text-foreground hover:text-accent transition-colors font-medium">
              Promo
            </a>
            <a href="#" className="block text-foreground hover:text-accent transition-colors font-medium">
              Tentang Kami
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
