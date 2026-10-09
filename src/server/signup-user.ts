"use server";

import { SignupSchema, SignupState } from "@/shared/signup-state";
import { toJson } from "@/shared/to-json";

/**
 * @description The `signup` function is used to create an account for a user. NOTE: unfinished
 * 
 * @param _previousState The previous `SignupState`.
 * @param formData The `FormData` object to validate.
 * @returns `SignupState`, which can be used to tell the user what went wrong and why. 
 */
export async function signup(
    _previousState: SignupState,
    formData: FormData,
): Promise<SignupState> {
    const result = SignupSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
    });

    console.log(toJson(result));

    if (!result.success) {
        return {
            success: false,
            errors: result.error.flatten().fieldErrors,
        };
    }

    
    const _data = result.data;
    // TODO: pass data to the PSQL server.

    return {
        success: true,
        errors: {},
    };
}
