"use client";

import { signup } from "@/server/signup-user";
import { SignupState } from "@/shared/signup-state";
import { useActionState } from "react";

const initialState: SignupState = {
    success: false,
    errors: {},
};

export function SignupForm() {
    const [state, formAction, isPending] = useActionState(signup, initialState);

    return state.success ? (
        <p>Account created!</p>
    ) : (
        <form action={formAction}>
            <input name="name" type="text" />
            {state.errors?.name?.map((error) => (
                <p key={error}>{error}</p>
            ))}

            <input name="email" type="email" />
            {state.errors?.email?.map((error) => (
                <p key={error}>{error}</p>
            ))}

            <input name="password" type="password" />
            {state.errors?.password?.map((error) => (
                <p key={error}>{error}</p>
            ))}

            <button type="submit" disabled={isPending}>
                {isPending ? "Signing up..." : "Sign up"}
            </button>
        </form>
    );
}
