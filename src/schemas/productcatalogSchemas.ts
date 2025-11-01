import { z } from "zod";

// Create product schema
export const createProductSchema = z.object({
  name: z
    .string()
    .min(1, "Product name is required")
    .max(100, "Product name must be less than 100 characters"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(200, "description must be less than 200 characters"),
  price: z.number().positive("Price must be greater than zero"),
  category: z
    .string()
    .min(1, "Category is required")
    .max(50, "Category must be less than 50 characters"),
  stock: z.number().nonnegative("Stock must be zero or greater").default(0),
  releaseDate: z.string().datetime().optional(), // ISO datetime format
});

export type CreateProductInput = z.infer<typeof createProductSchema>;