"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const variantValidationSchema = zod_1.z.object({
    type: zod_1.z.string().nonempty({ message: "Variant type is required" }),
    value: zod_1.z.string().nonempty({ message: "Variant value is required" }),
});
const inventoryValidationSchema = zod_1.z.object({
    quantity: zod_1.z
        .number({ invalid_type_error: "Quantity must be a number" })
        .int({ message: "Quantity must be an integer" })
        .nonnegative({ message: "Quantity must be zero or positive" }),
    inStock: zod_1.z.boolean({ invalid_type_error: "InStock must be a boolean" }),
});
const productValidationSchema = zod_1.z.object({
    name: zod_1.z.string().nonempty({ message: "Product name is required" }),
    description: zod_1.z
        .string()
        .nonempty({ message: "Product description is required" }),
    price: zod_1.z
        .number({ invalid_type_error: "Price must be a number" })
        .positive({ message: "Price must be a positive number" }),
    category: zod_1.z.string().nonempty({ message: "Product category is required" }),
    tags: zod_1.z
        .array(zod_1.z.string().nonempty({ message: "Tag must be a non-empty string" }))
        .nonempty({ message: "At least one tag is required" }),
    variants: zod_1.z
        .array(variantValidationSchema)
        .nonempty({ message: "At least one variant is required" }),
    inventory: inventoryValidationSchema,
});
exports.default = productValidationSchema;
