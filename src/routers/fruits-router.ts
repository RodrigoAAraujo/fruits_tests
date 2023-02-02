import { Router } from "express";

import { createFruit, getFruits, getSpecificFruit } from "../controllers/fruits-controller";
import { validateSchemaMiddleware } from "../middlewares/schemaValidatorMiddleware";
import { fruitSchema } from "../schemas/fruit-schema";

const fruitsRouter = Router();

fruitsRouter.get("/fruits", getFruits);
fruitsRouter.get("/fruits/:id", getSpecificFruit);
fruitsRouter.post("/fruits", validateSchemaMiddleware(fruitSchema), createFruit);

export default fruitsRouter;