"use server";

import argon2 from "argon2";
import { db } from "./database";
import { createSession, deleteSession } from "./session";
import { signInSchema, signUpSchema, type AuthFormState } from "@/shared/auth-schemas";
import z from "zod";

// Verified when the email doesn't exist, so timing doesn't reveal which emails are registered.
let dummyHash: Promise<string> | undefined;
const getDummyHash = () => (dummyHash ??= argon2.hash("dummy-password"));

export async function signUp(_prev: AuthFormState, formData: FormData): Promise<AuthFormState> {
    const parsed = signUpSchema.safeParse(Object.fromEntries(formData));
    if (!parsed.success) {
        const result = {
            success: false,
            errors: z.flattenError(parsed.error).fieldErrors,
        };
        return result;
    }

    const { name, email, password } = parsed.data;
    const passwordHash = await argon2.hash(password); // argon2id by default

    try {
        const { rows } = await db.query(
            "INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id",
            [name, email, passwordHash],
        );
        await createSession(rows[0].id);
        return { success: true };
    } catch (err: any) {
        if (err?.code === "23505")
            return { success: false, errors: { email: ["Dit emailadres is al in gebruik"] } };
        throw err;
    }
}

export async function signIn(_prev: AuthFormState, formData: FormData): Promise<AuthFormState> {
    const parsed = signInSchema.safeParse(Object.fromEntries(formData));
    if (!parsed.success) return { success: false, message: "Onjuist e-mailadres of wachtwoord" };

    const { email, password } = parsed.data;
    const { rows } = await db.query(
        "SELECT id, password_hash, is_active FROM users WHERE LOWER(email) = $1",
        [email],
    );
    const user = rows[0];

    const valid = await argon2.verify(user?.password_hash ?? (await getDummyHash()), password);
    if (!user || !valid || !user.is_active) return { success: false, message: "Onjuist e-mailadres of wachtwoord" };

    await createSession(user.id);
    console.log(`successfully logged in user '${email}'`);
    return { success: true };
}

export async function signOut() {
    await deleteSession();
}
