// src/lib/auth.ts

import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

/**
 * Vérifie et décode le token JWT présent dans les cookies HTTP-only.
 */
export async function getUserFromToken() {
  // cookies() retourne une promesse => on utilise await
  const cookieStore = await cookies()
  const token = cookieStore.get('accessToken')?.value

  if (!token) return null

  try {
    // Décodage sécurisé du token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: string
      role: string
    }
    return decoded
  } catch {
    // Token invalide ou expiré
    return null
  }
}