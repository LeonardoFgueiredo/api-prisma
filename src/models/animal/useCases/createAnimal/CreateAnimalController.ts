
import { Request, Response } from "express";
import { CreateAnimalUseCase } from "./CreateAnimalUseCase";

export class CreateAnimalController {
    async handle(req: Request, res:Response){

        const {
            name, 
            adopted, 
            city, 
            state, 
            breed, 
            userId,
            typeId,
        } = req.body;

        const createAnimalUseCase = new CreateAnimalUseCase();

        const result = await createAnimalUseCase.execute({
            name, 
            adopted, 
            city, 
            state, 
            breed,
            userId,
            typeId
        });

        return res.status(201).json(result);
    }
}