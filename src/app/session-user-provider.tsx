import { UserProvider } from "@/client/auth-forms/user-provider";
import { getSessionUser } from "@/server/session";
import type { ReactNode } from "react";

export default async function SessionUserProvider({ children }: { children: ReactNode }) {
    const user = await getSessionUser();
    return <UserProvider user={user}>{children}</UserProvider>;
}
