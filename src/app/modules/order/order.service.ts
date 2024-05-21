import { TOrder } from "./order.interface";
import Order from "./order.model";

// post order into database
const createOrderIntoDB = async (orderData: TOrder) => {
  const result = await Order.create(orderData);
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
};
