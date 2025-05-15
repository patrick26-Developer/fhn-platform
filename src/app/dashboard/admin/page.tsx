"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChartOverview } from "./ChartOverview"
import { StatCard } from "./StatCard"
import { WelcomeMessage } from "./WelcomeMessage"

//  Import correct des icônes depuis lucide-react
import { Users, FileText, Folder, Shield } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Message de bienvenue */}
      <WelcomeMessage name="Admin" />

      {/* Statistiques clés */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Enfants inscrits" value={145} icon={Users} />
        <StatCard title="Observations" value={67} icon={FileText} />
        <StatCard title="Documents" value={82} icon={Folder} />
        <StatCard title="Utilisateurs" value={12} icon={Shield} />
      </div>

      {/* Graphique d'activités */}
      <Card>
        <CardContent className="p-4">
          <ChartOverview />
        </CardContent>
      </Card>

      {/* Accès rapide */}
      <div className="flex flex-wrap gap-4 pt-4">
        <Button>Gérer les utilisateurs</Button>
        <Button>Consulter les dossiers</Button>
        <Button>Téléverser des documents</Button>
        <Button>Voir les observations</Button>
      </div>
    </div>
  )
}