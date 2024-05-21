import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRouter } from "./app/modules/product/product.routes";
import { OrderRouter } from "./app/modules/order/order.routes";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application router
app.use("/api/products", ProductRouter);
app.use("/api/orders", OrderRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("e-kinakata's server is running!");
});

export default app;
