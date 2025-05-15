// src/app/api/auth/login.ts
import { PrismaClient } from '@/generated/prisma'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, motDePasse } = body

    if (!email || !motDePasse) {
      return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 })
    }

    const utilisateur = await prisma.utilisateur.findUnique({ where: { email } })

    if (!utilisateur) {
      return NextResponse.json({ error: 'Email ou mot de passe incorrect.' }, { status: 401 })
    }

    const motDePasseValide = await bcrypt.compare(motDePasse, utilisateur.motDePasse)

    if (!motDePasseValide) {
      return NextResponse.json({ error: 'Email ou mot de passe incorrect.' }, { status: 401 })
    }

    const token = jwt.sign(
      {
        id: utilisateur.id,
        email: utilisateur.email,
        role: utilisateur.role,
      },
      process.env.JWT_SECRET as string,
      { expiresIn: '7d' }
    )

    return NextResponse.json({
      token,
      utilisateur: {
        id: utilisateur.id,
        nom: utilisateur.nom,
        email: utilisateur.email,
        role: utilisateur.role,
      },
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}
