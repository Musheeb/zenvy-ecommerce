import { z } from "zod";

const userSchema = z.object({
  productTitle: z
    .string({ required_error: "Product title is required" })
    .trim()
    .min(4, "Product title atleast have 4 characters long"),

  category: z
    .string({ required_error: "Category is required" })
    .length(24, "Invalid category selected")
    .regex(/^[0-9a-fA-F]+$/, "Invalid category selected"),

  sku: z.string({ required_error: "sku is required" }),

  description: z
    .string({ required_error: "Description is required" })
    .min(1, "Description is required"),

  quantity: z
    .number({ required_error: "Quantity is required" })
    .min(1, "Quantity must be at least 1"),

  currency: z.string({ required_error: "Currency is required" }),

  price: z
    .number({ required_error: "Price is required" })
    .min(0.1, "Price must be at least 0.1$"),
});

export default userSchema;
