"use client"

import { motion } from "framer-motion"
import { MoreHorizontal, Edit, Trash2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const products = [
  {
    id: 1,
    name: "Nike Air Max 270",
    category: "Sport",
    price: "Rp 1.899.000",
    stock: 45,
    status: "Tersedia",
    image: "/classic-nike-air-max.png",
  },
  {
    id: 2,
    name: "Adidas Ultraboost 22",
    category: "Sport",
    price: "Rp 2.299.000",
    stock: 23,
    status: "Stok Rendah",
    image: "/adidas-ultraboost.png",
  },
  {
    id: 3,
    name: "Converse Chuck Taylor",
    category: "Casual",
    price: "Rp 899.000",
    stock: 67,
    status: "Tersedia",
    image: "/converse-chuck-taylor.jpg",
  },
  {
    id: 4,
    name: "Clarks Desert Boot",
    category: "Formal",
    price: "Rp 1.599.000",
    stock: 0,
    status: "Habis",
    image: "/clarks-desert-boot.jpg",
  },
  {
    id: 5,
    name: "Vans Old Skool",
    category: "Casual",
    price: "Rp 1.099.000",
    stock: 34,
    status: "Tersedia",
    image: "/vans-old-skool.jpg",
  },
]

export function ProductTable() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Tersedia":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "Stok Rendah":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
      case "Habis":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
      <Card className="rounded-2xl shadow-sm border-0 bg-card/50 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-balance">Daftar Produk Sepatu</CardTitle>
          <CardDescription>Kelola inventori sepatu Anda dengan mudah</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-border/50">
                <TableHead>Produk</TableHead>
                <TableHead>Kategori</TableHead>
                <TableHead>Harga</TableHead>
                <TableHead>Stok</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product, index) => (
                <motion.tr
                  key={product.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-border/50 hover:bg-muted/50"
                >
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 rounded-lg">
                        <AvatarImage src={product.image || "/placeholder.svg"} alt={product.name} />
                        <AvatarFallback className="rounded-lg text-xs">
                          {product.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-sm">{product.name}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(product.status)}>{product.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="gap-2">
                          <Edit className="h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2 text-destructive">
                          <Trash2 className="h-4 w-4" />
                          Hapus
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  )
}
