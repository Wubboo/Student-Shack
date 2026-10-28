import "server-only";
import { createHash, randomBytes } from "node:crypto";
import { cookies } from "next/headers";
import { db } from "./database";
import type { SessionUser } from "@/shared/auth-schemas";
import { cache } from "react";

const COOKIE = "session";
const TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

const hashToken = (token: string) => createHash("sha256").update(token).digest();

export async function createSession(userId: string) {
    const token = randomBytes(32).toString("base64url");
    const expiresAt = new Date(Date.now() + TTL_MS);

    await db.query("INSERT INTO sessions (user_id, token_hash, expires_at) VALUES ($1, $2, $3)", [
        userId,
        hashToken(token),
        expiresAt,
    ]);

    const cookie = await cookies();
    cookie.set(COOKIE, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        expires: expiresAt,
    });
}

export const getSessionUser = cache(async (): Promise<SessionUser | null> => {
    const cookie = await cookies();
    const token = cookie.get(COOKIE)?.value;
    if (!token) return null;

    const { rows } = await db.query(
        `SELECT u.id, u.username, u.email
        FROM sessions s
        JOIN users u ON u.id = s.user_id
        WHERE s.token_hash = $1 AND s.expires_at > NOW() AND u.is_active`,
        [hashToken(token)],
    );
    return rows[0] ?? null;
});

export async function deleteSession() {
    const jar = await cookies();
    const token = jar.get(COOKIE)?.value;
    if (token) await db.query("DELETE FROM sessions WHERE token_hash = $1", [hashToken(token)]);
    jar.delete(COOKIE);
}
