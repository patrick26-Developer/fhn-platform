import { PrismaClient } from '@/generated/prisma'
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import crypto from 'crypto'

const prisma = new PrismaClient()

/**
 * Réinitialise le mot de passe de l'utilisateur à partir du token reçu.
 */
export async function POST(request: Request) {
  const { token, nouveauMotDePasse } = await request.json()

  if (!token || !nouveauMotDePasse) {
    return NextResponse.json({ error: 'Token et nouveau mot de passe requis.' }, { status: 400 })
  }

  // Hachage du token pour comparaison
  const hashedToken = crypto.createHash('sha256').update(token).digest('hex')

  // Recherche de l'utilisateur avec ce token valide
  const utilisateur = await prisma.utilisateur.findFirst({
    where: {
      resetToken: hashedToken,
      resetTokenExpiry: {
        gte: new Date(), // Le token est encore valide
      },
    },
  })

  if (!utilisateur) {
    return NextResponse.json({ error: 'Token invalide ou expiré.' }, { status: 400 })
  }

  // Mise à jour du mot de passe et suppression du token
  const hashedPassword = await bcrypt.hash(nouveauMotDePasse, 10)

  await prisma.utilisateur.update({
    where: { id: utilisateur.id },
    data: {
      motDePasse: hashedPassword,
      resetToken: null,
      resetTokenExpiry: null,
    },
  })

  return NextResponse.json({ message: 'Mot de passe réinitialisé avec succès.' })
}