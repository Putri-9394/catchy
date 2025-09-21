"use client"

import { motion } from "framer-motion"
import { MoreHorizontal, Eye, Download } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const salesData = [
  {
    orderId: "ORD-001",
    product: "Air Max Pro Elite",
    customer: "Ahmad Rizki",
    price: "Rp 2,499,000",
    status: "completed",
    date: "2024-01-15",
  },
  {
    orderId: "ORD-002",
    product: "Urban Street Classic",
    customer: "Sari Dewi",
    price: "Rp 1,899,000",
    status: "processing",
    date: "2024-01-14",
  },
  {
    orderId: "ORD-003",
    product: "Executive Leather",
    customer: "Budi Santoso",
    price: "Rp 3,299,000",
    status: "shipped",
    date: "2024-01-13",
  },
  {
    orderId: "ORD-004",
    product: "Limited Gold Edition",
    customer: "Maya Putri",
    price: "Rp 4,999,000",
    status: "completed",
    date: "2024-01-12",
  },
  {
    orderId: "ORD-005",
    product: "Air Max Pro Elite",
    customer: "Doni Pratama",
    price: "Rp 2,499,000",
    status: "pending",
    date: "2024-01-11",
  },
]

const getStatusBadge = (status: string) => {
  const statusConfig = {
    completed: { label: "Selesai", variant: "default" as const },
    processing: { label: "Proses", variant: "secondary" as const },
    shipped: { label: "Dikirim", variant: "outline" as const },
    pending: { label: "Pending", variant: "destructive" as const },
  }

  const config = statusConfig[status as keyof typeof statusConfig]
  return <Badge variant={config.variant}>{config.label}</Badge>
}

export function SalesTable() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
      <Card className="rounded-2xl border-0 shadow-sm bg-card/50 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-balance">Transaksi Terbaru</CardTitle>
            <p className="text-muted-foreground text-pretty">Daftar penjualan dan status order</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" size="sm" className="rounded-xl bg-transparent">
              <Eye className="h-4 w-4 mr-2" />
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Produk</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Harga</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {salesData.map((sale, index) => (
                <motion.tr
                  key={sale.orderId}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="group"
                >
                  <TableCell className="font-mono text-sm">{sale.orderId}</TableCell>
                  <TableCell className="font-medium">{sale.product}</TableCell>
                  <TableCell>{sale.customer}</TableCell>
                  <TableCell className="font-semibold">{sale.price}</TableCell>
                  <TableCell>{getStatusBadge(sale.status)}</TableCell>
                  <TableCell className="text-muted-foreground">{sale.date}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Update Status</DropdownMenuItem>
                        <DropdownMenuItem>Send Invoice</DropdownMenuItem>
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
