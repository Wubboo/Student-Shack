import type { Metadata } from "next";
import { Author } from "next/dist/lib/metadata/types/metadata-types";
import Authors from "@/../public/authors.json";
import Banner from "@/client/banner-component-mobile/banner";
import Footer from "@/client/footer-component/footer";
import { Loading } from "@/client/Loading";
import SessionUserProvider from "@/app/session-user-provider";
import { Suspense } from "react";
import "./globals.css";

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

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="nl">
            <body>
                <div className="page-layout">
                    <Banner />
                    <main className="page-content">
                        <Suspense fallback={<Loading />}>
                            <SessionUserProvider>{children}</SessionUserProvider>
                        </Suspense>
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
