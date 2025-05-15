import { NextResponse } from 'next/server'

/**
 * Déconnecte l'utilisateur en supprimant le cookie contenant le token JWT.
 * Dans cette version simple, le token est retiré côté client (cookie "token").
 */
export async function POST() {
  // Crée une réponse vide
  const response = NextResponse.json({ message: 'Déconnexion réussie.' })

  // Supprime le cookie "token" côté client
  response.cookies.set('token', '', {
    httpOnly: true,
    expires: new Date(0),
    path: '/', // S'applique à toutes les routes
  })

  return response
}