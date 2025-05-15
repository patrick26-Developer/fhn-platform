'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

/**
 * Composant pour la page d'inscription des utilisateurs.
 */
export default function RegisterPage() {
  const router = useRouter()

  // États pour chaque champ du formulaire
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [motDePasse, setMotDePasse] = useState('')
  const [confirmerMotDePasse, setConfirmerMotDePasse] = useState('')
  const [message, setMessage] = useState('')

  /**
   * Fonction appelée lors de la soumission du formulaire.
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Vérifie si les mots de passe sont identiques
    if (motDePasse !== confirmerMotDePasse) {
      return setMessage("Les mots de passe ne correspondent pas.")
    }

    try {
      // Envoi de la requête POST vers l’API d’inscription
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nom, email, motDePasse }),
      })

      const data = await res.json()

      if (!res.ok) {
        return setMessage(data.error || 'Erreur lors de l&apos;inscription.')
      }

      // Redirection vers la page de connexion après inscription réussie
      router.push('/login')
    } catch (err) {
      console.error(err)
      setMessage("Une erreur s'est produite, réessayez plus tard.")
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Inscription</h1>

      {message && <p className="text-red-500 mb-4">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />

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

        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          value={confirmerMotDePasse}
          onChange={(e) => setConfirmerMotDePasse(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          S&apos;inscrire
        </button>
      </form>
    </div>
  )
}