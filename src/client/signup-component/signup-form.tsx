"use client";
import "./main.css";
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
        <form action={formAction} className="signup-form">
            
            <label htmlFor="name">Naam</label>
            <input name="name" type="text" id="name" />
            {state.errors?.name?.map((error) => (
                <p key={error}>{error}</p>
            ))}

            <label htmlFor="email">E-mail</label>
            <input name="email" type="email"id="email"/>
            {state.errors?.email?.map((error) => (
                <p key={error}>{error}</p>
            ))}

            <label htmlFor="password">Wachtwoord</label>
            <input name="password" type="password" id="password"/>
            {state.errors?.password?.map((error) => (
                <p key={error}>{error}</p>
            ))}

            <button type="submit" disabled={isPending}>
                {isPending ? "Signing up..." : "Sign up"}
            </button>
        </form>
    );
}
