
// src/app/dashboard/admin/StatCard.tsx
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface StatCardProps {
  title: string
  value: string | number
  icon?: LucideIcon
  className?: string
}

export function StatCard({ title, value, icon: Icon, className }: StatCardProps) {
  return (
    <Card className={cn("p-4", className)}>
      <CardContent className="flex items-center gap-4">
        {Icon && <Icon className="w-6 h-6 text-muted-foreground" />}
        <div>
          <div className="text-sm text-muted-foreground">{title}</div>
          <div className="text-lg font-bold">{value}</div>
        </div>
      </CardContent>
    </Card>
  )
}