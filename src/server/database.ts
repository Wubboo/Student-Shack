import { env } from "@/server/env";
import { Pool } from "pg";

export const db = new Pool({
    host: env("DB_HOST"),
    port: Number(env("DB_PORT")),
    database: env("DB_NAME"),
    user: env("DB_USER"),
    password: env("DB_PASSWORD"),
    ssl: false,
});
