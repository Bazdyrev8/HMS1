const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function patients() {
    const createMany = await prisma.patients.createMany({
        data: [
            {
                surname: "Иванов",
                name: "Иван"
            },
        ],
        skipDuplicates: true
    }
    );
}

async function statistics() {
    const createMany = await prisma.statistics.createMany({
        data: [
            {
                pulse: 80,
                patient_id: 1
            },
        ],
        skipDuplicates: true
    }
    );
}


patients()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    })

statistics()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    })