// src/lib/prisma.ts

import { PrismaClient } from '@prisma/client'

// Permet d'étendre le type global dans les fichiers TypeScript
declare global {
  // ATTENTION : utiliser "var" pour éviter la recréation en dev
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

// On réutilise une instance unique (en dev)
export const prisma = globalForPrisma.prisma ?? new PrismaClient()

// En dev, on la stocke pour éviter les bugs liés au hot reload
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma