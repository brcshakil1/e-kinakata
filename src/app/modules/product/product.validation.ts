import { z } from "zod";

// Define the Zod schema for the variant
const variantSchema = z.object({
  type: z.string(),
  value: z.string(),
});

// Define the Zod schema for the inventory
const inventorySchema = z.object({
  quantity: z.number().min(0),
  inStock: z.boolean(),
});

// Define the Zod schema for the product
const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().positive(),
  category: z.string(),
  tags: z.array(z.string()).min(1, "At least one tag is required"),
  variants: z.array(variantSchema).min(1, "At least one variant is required"),
  inventory: inventorySchema.optional(),
});
