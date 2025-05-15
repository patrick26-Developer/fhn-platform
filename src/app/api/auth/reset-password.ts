import { PrismaClient } from '@/generated/prisma'
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import crypto from 'crypto'

const prisma = new PrismaClient()

/**
 * Gère la demande de réinitialisation de mot de passe.
 * Envoie un email avec un lien de réinitialisation contenant un token sécurisé.
 */
export async function POST(request: Request) {
  const { email } = await request.json()

  if (!email) {
    return NextResponse.json({ error: 'Email requis.' }, { status: 400 })
  }

  // Recherche de l'utilisateur dans la base
  const utilisateur = await prisma.utilisateur.findUnique({ where: { email } })

  if (!utilisateur) {
    return NextResponse.json({ error: "Aucun utilisateur trouvé avec cet email." }, { status: 404 })
  }

  // Génération du token de réinitialisation (valable 1h)
  const resetToken = crypto.randomBytes(32).toString('hex')
  const resetTokenHash = crypto.createHash('sha256').update(resetToken).digest('hex')
  const tokenExpire = new Date(Date.now() + 3600000) // 1 heure

  // Sauvegarde dans la base
  await prisma.utilisateur.update({
    where: { email },
    data: {
      resetToken: resetTokenHash,
      resetTokenExpiry: tokenExpire, 
    },
  })

  // Configuration du transport d'email
  const transporter = nodemailer.createTransport({
    service: 'gmail', // ou autre
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${resetToken}`

  // Envoi du mail
  await transporter.sendMail({
    to: email,
    subject: 'Réinitialisation de votre mot de passe',
    html: `<p>Bonjour,</p>
           <p>Vous avez demandé une réinitialisation de mot de passe. Cliquez sur le lien ci-dessous :</p>
           <a href="${resetUrl}">${resetUrl}</a>
           <p>Ce lien expire dans 1 heure.</p>`
  })

  return NextResponse.json({ message: 'Email de réinitialisation envoyé.' })
}
