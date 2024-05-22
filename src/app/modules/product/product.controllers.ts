import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    console.log(product, "<===============");

    const result = await ProductServices.createProductIntoDB(product);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
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

const getProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query || "";
    const result = await ProductServices.getAllProductFromDB(searchTerm);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
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

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
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

const updateProduct = async (req: Request, res: Response) => {
  try {
    const updatedProduct = req.body;
    const { productId } = req.params;
    const result = await ProductServices.updateProductIntoDB(
      productId,
      updatedProduct
    );
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
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

const deleteTheProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteTheProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
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

export const ProductControllers = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteTheProduct,
};
