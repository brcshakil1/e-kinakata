"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidationSchema = void 0;
const zod_1 = require("zod");
// Define the Zod schema for the Product model
const orderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: "Invalid email address" }),
    productId: zod_1.z.string().min(1, { message: "Product ID is required" }),
    price: zod_1.z
        .number({ invalid_type_error: "Price must be a number" })
        .positive({ message: "Price must be a positive number" }),
    quantity: zod_1.z
        .number({ invalid_type_error: "Quantity must be a number" })
        .int({ message: "Quantity must be an integer" })
        .positive({ message: "Quantity must be a positive integer" }),
});
exports.orderValidationSchema = orderValidationSchema;
