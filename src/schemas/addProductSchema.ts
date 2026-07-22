import { z } from "zod";

const userSchema = z.object({
  productTitle: z
    .string()
    .trim()
    .min(1, "Product title is required")
    .min(4, "Product title atleast have 4 characters long"),

  category: z
    .string()
    .length(24, "Invalid category selected")
    .regex(/^[0-9a-fA-F]+$/, "Invalid category selected"),

  sku: z.string().min(1, "SKU is required"),

  description: z.string().min(1, "Description is required"),

  quantity: z.number().min(1, "Quantity must be at least 1"),

  currency: z.string().min(1, "Currency is required"),

  price: z.number().min(0.1, "Price must be at least 0.10$"),
});

export default userSchema;
