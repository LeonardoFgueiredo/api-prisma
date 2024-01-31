import { UpdateAnimalController } from '../models/animal/useCases/updateAnimal/UpdateAnimalController';
import { CreateAnimalController } from './../models/animal/useCases/createAnimal/CreateAnimalController';
import { Router } from "express";

const createAnimalController = new CreateAnimalController();
const updateAnimalController = new UpdateAnimalController();
const animalRoutes = Router();

animalRoutes.post("/", createAnimalController.handle)

animalRoutes.put("/:id", updateAnimalController.handle);

export {animalRoutes}