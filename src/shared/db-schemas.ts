export interface psqlUser {
    id: string;
    email: string;
    password_hash: string;
    email_verified_at: Date | null;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}

export interface psqlSession {
    id: string;
    user_id: string;
    token_hash: Buffer;
    created_at: Date;
    expires_at: Date;
    last_seen_at: Date;
    ip_address: string | null;
    user_agent: string | null;
}
