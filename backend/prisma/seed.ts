import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Database with Indian Football Data...');

  // Create Teams
  const team1 = await prisma.team.create({
    data: { name: 'Mumbai City FC', league: 'ISL', country: 'India' },
  });
  const team2 = await prisma.team.create({
    data: { name: 'Mohun Bagan Super Giant', league: 'ISL', country: 'India' },
  });
  const team3 = await prisma.team.create({
    data: { name: 'Kerala Blasters FC', league: 'ISL', country: 'India' },
  });

  // Create Players
  const p1 = await prisma.player.create({
    data: {
      name: 'Sunil Chhetri',
      club: 'Bengaluru FC',
      league: 'ISL',
      position: 'Forward',
      nationality: 'India',
      age: 39,
      overallRating: 78,
      potential: 78,
      marketValue: 1.5,
    },
  });

  const p2 = await prisma.player.create({
    data: {
      name: 'Lallianzuala Chhangte',
      club: 'Mumbai City FC',
      league: 'ISL',
      position: 'Winger',
      nationality: 'India',
      age: 26,
      overallRating: 75,
      potential: 80,
      marketValue: 3.2,
    },
  });

  const p3 = await prisma.player.create({
    data: {
      name: 'Sandesh Jhingan',
      club: 'FC Goa',
      league: 'ISL',
      position: 'Defender',
      nationality: 'India',
      age: 30,
      overallRating: 76,
      potential: 76,
      marketValue: 2.8,
    },
  });

  const p4 = await prisma.player.create({
    data: {
      name: 'Sahal Abdul Samad',
      club: 'Mohun Bagan Super Giant',
      league: 'ISL',
      position: 'Midfielder',
      nationality: 'India',
      age: 27,
      overallRating: 74,
      potential: 79,
      marketValue: 2.5,
    },
  });

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
