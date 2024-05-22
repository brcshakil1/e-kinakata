/* eslint-disable @typescript-eslint/no-explicit-any */
import { TOrder } from "./order.interface";
import Order from "./order.model";

// post order into database
const createOrderIntoDB = async (orderData: TOrder) => {
  const result = await Order.create(orderData);
  return result;
};

// get all order from database
const getAllOderFromDB = async (email: any) => {
  const query: { email?: string } = {};
  if (email) {
    query.email = email;
  }
  const result = await Order.find(query);
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOderFromDB,
};
