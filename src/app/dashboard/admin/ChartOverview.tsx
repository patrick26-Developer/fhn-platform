// src/app/dashboard/admin/ChartOverview.tsx
import { Card, CardContent } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartLegend,
} from "@/components/ui/chart"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
} from "recharts"

export function ChartOverview() {
  const data = [
    { name: "Jan", value: 100 },
    { name: "Feb", value: 150 },
    { name: "Mar", value: 130 },
    { name: "Apr", value: 200 },
    { name: "May", value: 180 },
  ]

  return (
    <Card className="mt-4">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-2">Statistiques mensuelles</h3>
        <ChartContainer
          config={{
            value: { label: "Valeur", color: "#4f46e5" }, // indigo-600
          }}
        >
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Line
              type="monotone"
              dataKey="value"
              stroke="var(--color-value)"
              strokeWidth={2}
            />
            <ChartTooltip />
            <ChartLegend />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}