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
            <head>
                <style>
                    @import
                    url('https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@100;200;300;400;500;600;700;800;900&display=swap');
                </style>
            </head>
            <body>{children}</body>
        </html>
    );
}
