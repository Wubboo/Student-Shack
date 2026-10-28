import { z } from "zod";

const email = z.string().trim().toLowerCase().email().max(254);

export const signUpSchema = z.object({
    name: z.string().min(2, { error: "Naam moet minimaal 2 karakters lang zijn." }).trim(),
    email,
    password: z
        .string()
        .min(8, { error: "Moet minimaal 8 karakters lang zijn" })
        .regex(/[a-zA-Z]/, { error: "Bevat minimaal 1 letter." })
        .regex(/[0-9]/, { error: "Bevat minimaal 1 cijfer." })
        .regex(/[^a-zA-Z0-9]/, {
            error: "Bevat minimaal 1 speciaal karakter.",
        })
        .trim(),
});

export const signInSchema = z.object({
    email,
    password: z.string().min(1).max(128),
});

export type AuthFormState =
    | {
          errors?: Record<string, string[] | undefined>;
          message?: string;
          success: boolean;
      }
    | undefined;

export type SessionUser = { id: string; name: string, email: string };
