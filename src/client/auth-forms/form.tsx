"use client";

import { HTMLInputAutoCompleteAttribute, useActionState, useEffect } from "react";
import { signIn, signUp } from "@/server/auth";
import { Input } from "./form-input";
import "./main.css";

const Username = ({ disabled, errors }: {
    disabled?: boolean | undefined,
    errors?: string[] | undefined
}) => (
    <Input
        label="Gebruikersnaam"
        errors={errors}
        htmlFor="name"
        name="name"
        type="text"
        id="name"
        autoComplete="firstName"
        disabled={disabled}
        required
    />
);

const Email = ({ disabled, errors }: {
    disabled?: boolean | undefined,
    errors?: string[] | undefined
}) => (
    <Input
        label="Email"
        errors={errors}
        htmlFor="email"
        name="email"
        type="email"
        id="email"
        autoComplete="email"
        disabled={disabled}
        required
    />
);

const Password = ({ disabled, autoComplete, errors }: {
    disabled?: boolean | undefined,
    autoComplete?: HTMLInputAutoCompleteAttribute | undefined
    errors?: string[] | undefined
}) => (
    <Input
        label="Password"
        errors={errors}
        htmlFor="password"
        name="password"
        type="password"
        id="password"
        autoComplete={autoComplete}
        disabled={disabled}
        minLength={10}
        required
    />
);

export function SignUpForm({ onSuccess }: { onSuccess?: () => void }) {
    const [state, serverAction, pending] = useActionState(signUp, undefined);

    useEffect(() => {
        if (state?.success) onSuccess?.();
    }, [state, onSuccess]);

    const errors = state?.errors;
    const success = state?.success ?? false;
    const disabled = pending || success;
    return (
        <form action={serverAction} className="signup-form">
            <Username disabled={disabled} errors={errors?.name} />
            <Email disabled={disabled} errors={errors?.email} />
            <Password disabled={disabled} autoComplete="new-password" errors={errors?.password} />
            <button disabled={disabled}>Aanmelden</button>
            {success && (<p>Gebruiker aangemeld!</p>)}
        </form>
    );
}

export function SignInForm({ onSuccess }: { onSuccess?: () => void }) {
    const [state, serverAction, pending] = useActionState(signIn, undefined);
    const success = state?.success ?? false;

    useEffect(() => {
        if (success) onSuccess?.();
    }, [state, onSuccess]);

    const errors = state?.errors;
    const disabled = pending || success;
    return (
        <form action={serverAction} className="signup-form">
            <Email disabled={disabled} errors={errors?.email} />
            <Password disabled={disabled} autoComplete="current-password" errors={errors?.password} />
            <button disabled={disabled}>Inloggen</button>
            {success && (<p>Gebruiker ingelogd!</p>)}
        </form>
    );
}
