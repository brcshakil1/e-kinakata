import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";
import Product from "../product/product.model";

const orderSchema = new Schema<TOrder>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

// user middleware to check if ordered product's id match
orderSchema.pre("save", async function (next) {
  const order = this;
  const product = await Product.findOne({ _id: order.productId });

  if (!product) {
    throw new Error("Sorry, the product isn't available.");
  }

  const updatedQuantity = product.inventory.quantity - order.quantity;

  if (updatedQuantity < 0) {
    throw new Error("Sorry, not enough stock available for this product.");
  }

  await Product.findByIdAndUpdate(
    { _id: order.productId },
    { inventory: { quantity: updatedQuantity } },
    { new: true }
  );
  next();
});

const Order = model<TOrder>("Order", orderSchema);

export default Order;
