import { z } from "zod";

export const createAttributeSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Attribute name is required"),
  }),
});
