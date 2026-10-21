import * as z from "zod";

/**
 * @constant SignupSchema A Zod schema for signing up users.
 * @description Use this to validate wether a signup form has been passed the correct arguments on the server.
 */
export const SignupSchema = z.object({
    name: z.string().min(2, { error: "Naam moet minimaal 2 karakters lang zijn." }).trim(),
    email: z.email({ error: "Voer een geldig email adress in." }).trim(),
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

/**
 * @type The datatype used by the sign up form.
 * @description use this when passing a `SignupSchema` to a function for type checking.
 */
export type SignupData = z.infer<typeof SignupSchema>;

/**
 * @type The datatype used to check for the signup status.
 * @description contains the success state and a bunch of error description array's collected by Zod when validating.
 */
export type SignupState = {
    success: boolean;
    errors: {
        name?: string[];
        email?: string[];
        password?: string[];
    };
};
