// src/app/dashboard/admin/WelcomeMessage.tsx
import { Card, CardContent } from "@/components/ui/card"

export function WelcomeMessage({ name = "Admin" }: { name?: string }) {
  return (
    <Card className="mb-4">
      <CardContent className="p-6 text-xl font-semibold">
        Bienvenue, {name} 👋
      </CardContent>
    </Card>
  )
}

