import { z } from "zod";

export const createAttributeValueSchema = z.object({
  body: z.object({
    value: z.string().min(1, "Attribute value is required"),
  }),
});
