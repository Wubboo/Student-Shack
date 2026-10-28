import "server-only";

export function env(key: string): string {
    const value = process.env[key];
    if (value != null) return value;
    throw new Error(`envirnment key '${key}' does not exist.`);
}
