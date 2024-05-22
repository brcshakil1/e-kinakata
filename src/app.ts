import express, { Application, NextFunction, Request, Response } from "express";
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

// global routes handling
app.all("*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// global error handler
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  } else {
    next();
  }
});

export default app;
