import { User } from "@prisma/client"
import prisma from "../database"
import { NotFundError } from "../erros"

export class UserService {
  

    async create(user: User) {

        return user
    }

    async update(codigo: string, data: User) {
        const user = await prisma.user.findUnique({
            where: {
                id: +codigo
            },
            select: {
                id: true
            }
        })

        if (!user)
            throw new NotFundError("Usuário não encontrado")

        await prisma.user.update({
            where: {
                id: +codigo
            },
            data
        })

        return user
    }
}