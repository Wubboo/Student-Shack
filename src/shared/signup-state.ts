import * as z from "zod";

/**
 * @constant SignupSchema A Zod schema for signing up users.
 * @description Use this to validate wether a signup form has been passed the correct arguments on the server.
 */
export const SignupSchema = z.object({
    name: z.string().min(2, { error: "Name must be at least 2 characters long." }).trim(),
    email: z.email({ error: "Please enter a valid email." }).trim(),
    password: z
        .string()
        .min(8, { error: "Be at least 8 characters long" })
        .regex(/[a-zA-Z]/, { error: "Contain at least one letter." })
        .regex(/[0-9]/, { error: "Contain at least one number." })
        .regex(/[^a-zA-Z0-9]/, {
            error: "Contain at least one special character.",
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
