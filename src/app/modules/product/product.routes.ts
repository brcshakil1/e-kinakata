import express from "express";
import { ProductControllers } from "./product.controllers";

const router = express.Router();

router.post("/", ProductControllers.createProduct);
router.get("/", ProductControllers.getProducts);
router.get("/:productId", ProductControllers.getSingleProduct);
router.put("/:productId", ProductControllers.updateProduct);
router.delete("/:productId", ProductControllers.deleteTheProduct);

export const ProductRouter = router;
