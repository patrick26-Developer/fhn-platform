-- AlterTable
ALTER TABLE "Utilisateur" ADD COLUMN     "resetToken" TEXT,
ADD COLUMN     "resetTokenExpiry" TIMESTAMP(3);
