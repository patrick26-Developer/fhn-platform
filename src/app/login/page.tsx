'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

/**
 * Composant pour la page de connexion utilisateur.
 */
export default function LoginPage() {
  const router = useRouter()

  // États pour les champs du formulaire
  const [email, setEmail] = useState('')
  const [motDePasse, setMotDePasse] = useState('')
  const [message, setMessage] = useState('')

  /**
   * Fonction déclenchée à la soumission du formulaire.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Requête vers l'API de connexion
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Envoi des identifiants dans le corps de la requête
        body: JSON.stringify({ email, motDePasse }),
      })

      const data = await res.json()

      if (!res.ok) {
        // Affiche l'erreur côté utilisateur
        return setMessage(data.error || "Échec de la connexion.")
      }

      // Redirection vers le dashboard après connexion
      router.push('/dashboard')
    } catch (err) {
      console.error(err)
      setMessage("Erreur inattendue. Veuillez réessayer plus tard.")
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Connexion</h1>

      {message && <p className="text-red-500 mb-4">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Se connecter
        </button>
      </form>
    </div>
  )
}