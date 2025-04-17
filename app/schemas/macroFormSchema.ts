import { z } from "zod";

export const macroFormSchema = z.object({
  age: z.coerce.number().min(10).max(100),
  weight: z.coerce.number().min(30).max(300),
  height: z.coerce.number().min(100).max(250),
  gender: z.enum(["male", "female"]),
  activityLevel: z.enum([
    "sedentary",
    "light",
    "moderate",
    "active",
    "very-active",
  ]),
  goal: z.enum(["gain-muscle", "lose-fat", "maintain"]),
});

export type MacroFormData = z.infer<typeof macroFormSchema>;
