import { CreateAnimalController } from './../models/animal/useCases/createAnimal/CreateAnimalController';
import { Router } from "express";

const createAnimalController = new CreateAnimalController();

const animalRoutes = Router();

animalRoutes.post("/", createAnimalController.handle)

export {animalRoutes}