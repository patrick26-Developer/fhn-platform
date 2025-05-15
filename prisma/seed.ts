import { PrismaClient } from '../src/generated/prisma';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  await prisma.utilisateur.upsert({
    where: { email: 'admin@fhn.local' },
    update: {},
    create: {
      nom: 'Admin',
      email: 'admin@fhn.local',
      motDePasse: await bcrypt.hash('admin123', 10),
      role: 'admin',
    },
  });

  await prisma.utilisateur.upsert({
    where: { email: 'parent@fhn.local' },
    update: {},
    create: {
      nom: 'Parent Test',
      email: 'parent@fhn.local',
      motDePasse: await bcrypt.hash('parent123', 10),
      role: 'parent',
    },
  });

  await prisma.utilisateur.upsert({
    where: { email: 'secretaire@fhn.local' },
    update: {},
    create: {
      nom: 'Secrétaire Julie',
      email: 'secretaire@fhn.local',
      motDePasse: await bcrypt.hash('secret123', 10),
      role: 'secretaire',
    },
  });

  await prisma.utilisateur.upsert({
    where: { email: 'analyste@fhn.local' },
    update: {},
    create: {
      nom: 'Analyste Karim',
      email: 'analyste@fhn.local',
      motDePasse: await bcrypt.hash('analyse123', 10),
      role: 'analyste',
    },
  });

  console.log('Seed terminé avec succès.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
