import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRouter } from "./app/modules/order/product.routes";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application router
app.use("/", ProductRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("e-kinakata's server is running!");
});

export default app;
