import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import Product from "../product/product.model";
import { orderValidationSchema } from "./order.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    const zodDataValidation = orderValidationSchema.parse(orderData);

    // getting all product to match with order
    const product = await Product.findById(orderData?.productId);

    // if product does not exist than showing an error
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }
    // if ordered quantity is more than product quantity
    else if (product && product?.inventory?.quantity < orderData?.quantity) {
      return res.status(400).json({
        success: false,
        message: "Insufficient quantity available in inventory",
      });
    }

    // if everything is okay
    else {
      const result = await OrderServices.createOrderIntoDB(zodDataValidation);
      res.status(200).json({
        success: true,
        message: "Order created successfully!",
        data: result,
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Order not found",
      error: err,
    });
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    console.log(email);
    const result = await OrderServices.getAllOderFromDB(email);
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
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
  getAllOrder,
};
