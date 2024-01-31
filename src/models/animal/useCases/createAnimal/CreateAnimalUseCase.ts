import { Animal, User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
import { CreateAnimalDTO } from "../../dtos/CreateAnimalDTO";

export class CreateAnimalUseCase {
    async execute({
        name,
        adopted,
        city,
        state,
        breed,
        userId,
        typeId,
    }: CreateAnimalDTO): Promise<Animal> {

        //criar animal
        const animal = await prisma.animal.create({
            data: {
                name,
                adopted: false,
                city,
                state,
                breed
            }
        });

        await prisma.animalAdoption.create({
            data: {
                animalId: animal.id,
                listedById: userId
            }
        });

        await prisma.animalType.create({
            data: {
                animalId: animal.id,
                typeId: typeId
            }
        });

        return animal;
    }
}