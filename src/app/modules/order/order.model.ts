import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";
import Product from "../product/product.model";
import { TProduct } from "../product/product.interface";

const orderSchema = new Schema<TOrder>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

// update product inventory
orderSchema.post("save", async function (doc, next) {
  const order = doc;
  const product: any = await Product.findOne({ _id: order.productId });

  const updateQuantity = product?.inventory?.quantity - order?.quantity;

  const data = await Product.findByIdAndUpdate(
    order.productId,
    { $set: { "inventory.quantity": updateQuantity } },
    { new: true }
  );

  if (data?.inventory?.quantity === 0) {
    await Product.findByIdAndUpdate(
      order.productId,
      { $set: { "inventory.inStock": false } },
      { new: true }
    );
  }
});

const Order = model<TOrder>("Order", orderSchema);

export default Order;
