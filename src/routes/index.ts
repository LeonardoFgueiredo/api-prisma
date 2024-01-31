import { Router } from "express";
import { userRoutes } from "./user.routes";
import { animalRoutes } from "./animal.routes";
import { typeRoutes } from "./type.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/animal", animalRoutes);
routes.use("/type", typeRoutes);

export {routes};