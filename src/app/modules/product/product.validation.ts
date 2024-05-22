import { z } from "zod";

const variantValidationSchema = z.object({
  type: z.string().nonempty({ message: "Variant type is required" }),
  value: z.string().nonempty({ message: "Variant value is required" }),
});

const inventoryValidationSchema = z.object({
  quantity: z
    .number({ invalid_type_error: "Quantity must be a number" })
    .int({ message: "Quantity must be an integer" })
    .nonnegative({ message: "Quantity must be zero or positive" }),
  inStock: z.boolean({ invalid_type_error: "InStock must be a boolean" }),
});

const productValidationSchema = z.object({
  name: z.string().nonempty({ message: "Product name is required" }),
  description: z
    .string()
    .nonempty({ message: "Product description is required" }),
  price: z
    .number({ invalid_type_error: "Price must be a number" })
    .positive({ message: "Price must be a positive number" }),
  category: z.string().nonempty({ message: "Product category is required" }),
  tags: z
    .array(z.string().nonempty({ message: "Tag must be a non-empty string" }))
    .nonempty({ message: "At least one tag is required" }),
  variants: z
    .array(variantValidationSchema)
    .nonempty({ message: "At least one variant is required" }),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
