import type { Metadata } from "next";

// Cross site Metadata
export const metadata: Metadata = {
    title: "Student Shack",
    description: "Simple house and appartment rental service aimed at students",
};

// Frontend React is mounted inside of the RootLayout
export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
