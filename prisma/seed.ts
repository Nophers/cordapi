/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// Create a dummy user to test our query database SQL
async function main() {
    await prisma.donation.deleteMany();
    const john = await prisma.user.create({
        data: {
            name: 'John Doe',
            email: 'johndoe@test.com',
            count: 10,
        }
    });

    // log the informations once runned 
    console.log({ john });
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    // Disconnect prisma from the main process
    .finally(async () => {
        await prisma.$disconnect();
    });