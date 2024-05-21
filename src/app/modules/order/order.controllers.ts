import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await OrderServices.createOrderIntoDB(orderData);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Something went wrong. Please try again later.",
      error: err,
    });
  }
};

export const OrderControllers = {
  createOrder,
};
