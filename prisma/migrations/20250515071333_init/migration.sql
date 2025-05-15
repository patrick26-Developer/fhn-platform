-- CreateEnum
CREATE TYPE "Role" AS ENUM ('parent', 'secretaire', 'analyste', 'admin');

-- CreateEnum
CREATE TYPE "StatutDossier" AS ENUM ('Nouveau', 'EnCours', 'Incomplet', 'Accepte', 'Rejete', 'Cloture');

-- CreateTable
CREATE TABLE "Utilisateur" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "motDePasse" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Enfant" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "dateNaissance" TIMESTAMP(3) NOT NULL,
    "sexe" TEXT NOT NULL,
    "commune" TEXT NOT NULL,
    "parentNom" TEXT NOT NULL,
    "parentTelephone" TEXT NOT NULL,
    "parentEmail" TEXT NOT NULL,
    "statutDossier" "StatutDossier" NOT NULL DEFAULT 'Nouveau',
    "diagnostic" TEXT,
    "dateCreation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "utilisateurCreateurId" TEXT NOT NULL,

    CONSTRAINT "Enfant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "nomFichierOriginal" TEXT NOT NULL,
    "enfantId" TEXT NOT NULL,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commentaire" (
    "id" TEXT NOT NULL,
    "contenu" TEXT NOT NULL,
    "auteurId" TEXT NOT NULL,
    "enfantId" TEXT NOT NULL,
    "creeLe" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Commentaire_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_email_key" ON "Utilisateur"("email");

-- AddForeignKey
ALTER TABLE "Enfant" ADD CONSTRAINT "Enfant_utilisateurCreateurId_fkey" FOREIGN KEY ("utilisateurCreateurId") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_enfantId_fkey" FOREIGN KEY ("enfantId") REFERENCES "Enfant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commentaire" ADD CONSTRAINT "Commentaire_auteurId_fkey" FOREIGN KEY ("auteurId") REFERENCES "Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commentaire" ADD CONSTRAINT "Commentaire_enfantId_fkey" FOREIGN KEY ("enfantId") REFERENCES "Enfant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
