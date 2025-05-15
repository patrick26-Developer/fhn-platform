'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

/**
 * Page de réinitialisation de mot de passe après clic sur le lien email.
 */
export default function ResetPasswordPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [motDePasse, setMotDePasse] = useState('')
  const [confirmation, setConfirmation] = useState('')
  const [message, setMessage] = useState('')
  const [token, setToken] = useState<string | null>(null)

  // Récupération du token depuis l'URL au chargement de la page
  useEffect(() => {
    const t = searchParams.get('token')
    if (!t) {
      setMessage("Lien invalide ou expiré.")
    } else {
      setToken(t)
    }
  }, [searchParams])

  /**
   * Soumission du formulaire pour envoyer le nouveau mot de passe.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Vérifie que les champs sont remplis et égaux
    if (!motDePasse || motDePasse.length < 6) {
      return setMessage("Le mot de passe doit faire au moins 6 caractères.")
    }
    if (motDePasse !== confirmation) {
      return setMessage("Les mots de passe ne correspondent pas.")
    }

    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, motDePasse }),
      })

      const data = await res.json()

      if (!res.ok) {
        return setMessage(data.error || 'Une erreur est survenue.')
      }

      setMessage("Mot de passe réinitialisé avec succès.")
      // Redirection vers la page de connexion après 2s
      setTimeout(() => router.push('/login'), 2000)
    } catch (err) {
      console.error(err)
      setMessage("Erreur réseau ou serveur.")
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Réinitialiser le mot de passe</h1>

      {message && <p className="mb-4 text-red-600">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          placeholder="Nouveau mot de passe"
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          value={confirmation}
          onChange={(e) => setConfirmation(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Réinitialiser
        </button>
      </form>
    </div>
  )
}
