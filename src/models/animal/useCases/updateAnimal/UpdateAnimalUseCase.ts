// ./src/models/animal/useCases/updateAnimal/UpdateAnimalUseCase.ts
import { Animal } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
import { UpdateAnimalDTO } from "../../dtos/UpdateAnimalDTO";

export class UpdateAnimalUseCase {
    async execute({
        id,
        name,
        adopted,
        city,
        state,
        breed,
        userId,
        typeId,
    }: UpdateAnimalDTO): Promise<Animal> {
        try {
            // Verificar se o animal existe
            const animalExists = await prisma.animal.findUnique({ where: { id } });

            const userExists = await prisma.user.findUnique({ where: { id: userId } });

            const existingAnimalType = await prisma.animalType.findUnique({
                where: { animalId_typeId: { animalId: id, typeId: typeId } },
            });

            if (!userExists) {
                throw new AppError('User not found', 404);
            }

            if (!animalExists) {
                throw new AppError("Animal not found", 404);
            }

            // Atualizar o animal
            const updatedAnimal = await prisma.animal.update({
                where: { id },
                data: {
                    name,
                    adopted,
                    city,
                    state,
                    breed,
                },
            });

            // Atualizar AnimalAdoption
            await prisma.animalAdoption.update({
                where: { id },
                data: { listedById: userId },
            });

            if (existingAnimalType) {

                // Atualizar AnimalType
                await prisma.animalType.update({
                    where: { animalId_typeId: { animalId: id, typeId: typeId } },
                    data: { typeId: typeId },
                });

                prisma.animalType.deleteMany({
                    where: { animalId: id },
                });
            } else {
                // crie um novo
                await prisma.animalType.create({
                    data: {
                        animalId: id,
                        typeId: typeId,
                    },
                });
            }

            return updatedAnimal;
        } catch (error) {
            throw error;
        }
    }
}