import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { AppError } from "../../../../errors/AppError";

export class CreateUserUseCase{
    async execute({name, email}: CreateUserDTO): Promise<User>{

        //verificar se usuario existe
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if(userAlreadyExists){
            throw new AppError("Usuário ja existe");
        }

        //criar usuario
        const user = await prisma.user.create({
            data:{
                name,
                email
            }
        })

        return user;
    }
}