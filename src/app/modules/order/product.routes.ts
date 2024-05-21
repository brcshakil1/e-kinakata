import express from "express";
import { ProductControllers } from "./product.controllers";

const router = express.Router();

router.post("/api/products", ProductControllers.createProduct);
router.get("/api/products", ProductControllers.getProducts);
router.get("/api/products/:productId", ProductControllers.getSingleProduct);
router.put("/api/products/:productId", ProductControllers.updateProduct);
router.delete("/api/products/:productId", ProductControllers.deleteTheProduct);

export const ProductRouter = router;
