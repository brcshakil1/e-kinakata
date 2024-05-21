import { TProduct } from "./product.interface";
import Product from "./product.model";

const createProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findOne({ _id: id });
  return result;
};

const updateProductIntoDB = async (id: string, updateData: any) => {
  const result = await Product.findByIdAndUpdate({ _id: id }, updateData, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteTheProductFromDB = async (id: string) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteTheProductFromDB,
};
