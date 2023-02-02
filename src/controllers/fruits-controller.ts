import { Request, Response } from "express";
import httpStatus from "http-status";

import fruitsService, { FruitInput } from "../services/fruits-service";

export function getFruits(req: Request, res: Response) {
  const fruits = fruitsService.getFruits();
  res.send(fruits);
}

export function getSpecificFruit(req: Request, res: Response) {
  const id = parseInt(req.params.id);

  try {
    const fruit = fruitsService.getSpecificFruit(id);
    res.send(fruit);
  } catch (error) {
    console.log(error);
    res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export function createFruit(req: Request, res: Response) {
  const fruit = req.body as FruitInput;
  try {
    fruitsService.createFruit(fruit);
    res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    console.log(error);
    res.sendStatus(httpStatus.CONFLICT);
  }
}