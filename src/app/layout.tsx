import type { Metadata } from "next";
import { Author } from "next/dist/lib/metadata/types/metadata-types";
import Authors from "@/../public/authors.json";

const authors: Author[] = Authors.map((author) => ({
    name: author.legalName,
    url: author.html_url,
}));

// Cross site Metadata
export const metadata: Metadata = {
    title: "Student Shack",
    description: "Simple house and appartment rental service aimed at students",
    authors: authors,
};

// Frontend React is mounted inside of the RootLayout
export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en">
            <head></head>
            <body>{children}</body>
        </html>
    );
}
