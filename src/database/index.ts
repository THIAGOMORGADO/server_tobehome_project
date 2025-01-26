import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

prisma
    .$connect()
    .catch(async (err) => {
        console.error(err)
        await prisma.$disconnect()
        process.exit(1)
    })
    
export default prisma