import express from "express";
import { OrderControllers } from "./order.controllers";

const router = express.Router();

router.post("/", OrderControllers.createOrder);
router.get("/", OrderControllers.getAllOrder);

export const OrderRouter = router;
