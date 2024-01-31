import { Request, Response } from "express";
import { UpdateAnimalUseCase } from "./UpdateAnimalUseCase";


export class UpdateAnimalController {
    async handle(req: Request, res:Response){
        const { id } = req.params;
        const { name, adopted, city, state, breed, userId, typeId } = req.body;

        const updateAnimalUseCase = new UpdateAnimalUseCase();

        const result = await updateAnimalUseCase.execute({
            id: parseInt(id),
            name,
            adopted,
            city,
            state,
            breed,
            userId,
            typeId
        });

        return res.status(200).json(result);
    }
}
