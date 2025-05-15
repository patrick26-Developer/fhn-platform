import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nom, email, motDePasse, role } = body;

    if (!nom || !email || !motDePasse || !role) {
      return NextResponse.json({ message: 'Champs requis manquants.' }, { status: 400 });
    }

    const existingUser = await prisma.utilisateur.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ message: 'Email déjà utilisé.' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(motDePasse, 10);

    const newUser = await prisma.utilisateur.create({
      data: {
        nom,
        email,
        motDePasse: hashedPassword,
        role,
      },
    });

    return NextResponse.json({
      message: 'Utilisateur enregistré avec succès.',
      utilisateur: {
        id: newUser.id,
        nom: newUser.nom,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error('Erreur lors de l’inscription:', error);
    return NextResponse.json({ message: 'Erreur interne.' }, { status: 500 });
  }
} 
