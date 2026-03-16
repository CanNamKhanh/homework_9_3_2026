import { z } from "zod";

export const createProductSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Product name is required"),
    descriptions: z.string().min(1, "Description is required"),
    price: z.number().positive("Price must be greater than 0"),
    stock: z.number().int().min(0, "Stock cannot be negative"),
  }),
});
