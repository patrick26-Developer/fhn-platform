// src/app/unauthorized/page.tsx

'use client' // Ce fichier utilise du code côté client pour interagir avec l'utilisateur

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button' // Utilise un composant bouton si tu as shadcn/ui installé

export default function UnauthorizedPage() {
  const router = useRouter() // Pour naviguer avec le bouton

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Accès refusé</h1>
        <p className="text-gray-700 mb-6">
          Vous n&apos;avez pas la permission d&apos;accéder à cette page.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={() => router.push('/')} variant="outline">
            Retour à l&apos;accueil
          </Button>
          <Button onClick={() => router.push('/login')}>Se reconnecter</Button>
        </div>
      </div>
    </div>
  )
}