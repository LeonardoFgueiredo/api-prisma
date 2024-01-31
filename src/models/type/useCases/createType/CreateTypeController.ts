
import { Request, Response } from "express";
import { CreateTypelUseCase } from "./CreateTypelUseCase";

export class CreateTypeController {
    async handle(req: Request, res:Response){

        const {
            name,
        } = req.body;

        const createTypelUseCase = new CreateTypelUseCase();

        const result = await createTypelUseCase.execute({
            name
        });

        return res.status(201).json(result);
    }
}