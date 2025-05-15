// src/middleware.ts

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

/**
 * Vérifie et décode un token JWT.
 */
async function verifyJWT(token: string) {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    const { payload } = await jwtVerify(token, secret)
    return payload
  } catch {
    return null
  }
}

/**
 * Middleware de protection des routes selon rôle.
 */
export async function middleware(req: NextRequest) {
  const token = req.cookies.get('accessToken')?.value

  // Redirige si aucun token présent
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  const payload = await verifyJWT(token)

  if (!payload) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  const pathname = req.nextUrl.pathname
  const role = payload.role as string

  // Redirections basées sur le rôle
  const restrictedRoutes: Record<string, string> = {
    '/dashboard/admin': 'admin',
    '/dashboard/parent': 'parent',
  }

  for (const [routePrefix, requiredRole] of Object.entries(restrictedRoutes)) {
    if (pathname.startsWith(routePrefix) && role !== requiredRole) {
      return NextResponse.redirect(new URL('/unauthorized', req.url))
    }
  }

  return NextResponse.next()
}

/**
 * Liste des chemins protégés par ce middleware
 */
export const config = {
  matcher: ['/dashboard/:path*'],
}