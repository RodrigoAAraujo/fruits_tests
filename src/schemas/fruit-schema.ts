import joi from "joi";
import { FruitInput } from "../services/fruits-service";

export const fruitSchema = joi.object<FruitInput>({
  name: joi.string().required(),
  price: joi.number().required()
});
