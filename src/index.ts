import express, { json, Request, Response } from "express";
import fruitsRouter from "./routers/fruits-router";

const app = express();
app.use(json());

app.get("/health", (req: Request, res: Response) => res.send("I'am alive!"));
app.use(fruitsRouter);

export default app

