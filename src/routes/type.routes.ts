import { Router } from "express";
import { CreateTypeController } from "../models/type/useCases/createType/CreateTypeController";

const createTypeController = new CreateTypeController();

const typeRoutes = Router();

typeRoutes.post("/", createTypeController.handle)

export {typeRoutes}