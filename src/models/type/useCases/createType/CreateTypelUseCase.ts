import { Animal, Type, User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
import { CreateTypeDTO } from "../../dtos/CreateTypeDTO";

export class CreateTypelUseCase{
    async execute({
        name,
    }: CreateTypeDTO): Promise<Type>{
        
        //criar type
        const animal = await prisma.type.create({
            data:{
                name,
            }
        });

        return animal;
    }
}