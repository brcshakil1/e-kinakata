import { z } from "zod";

// Define the Zod schema for the Product model
const orderValidationSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  productId: z.string().min(1, { message: "Product ID is required" }),
  price: z
    .number({ invalid_type_error: "Price must be a number" })
    .positive({ message: "Price must be a positive number" }),
  quantity: z
    .number({ invalid_type_error: "Quantity must be a number" })
    .int({ message: "Quantity must be an integer" })
    .positive({ message: "Quantity must be a positive integer" }),
});

export { orderValidationSchema };
