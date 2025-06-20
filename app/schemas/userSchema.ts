import { z } from "zod/v4";

export const userSchema = z.object({
  fullName: z.string(),
  email: z.email(),
});

export type userType = z.infer<typeof userSchema>;
