import { z } from "zod";

export const upudateProductSchema = z.object({
  body: z
    .object({
      name: z.string().min(1).optional(),
      descriptions: z.string().optional(),
      price: z.number().positive().optional(),
      stock: z.number().int().min(0).optional(),
    })
    .refine((data) => Object.keys(data).length > 0, {
      message: "At least one field must be provided for update",
    }),
});
