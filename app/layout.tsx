import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import UmamiScript from "@/app/umami-script";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Niklas Haiden",
    description: "Personal website about Niklas Haiden.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <UmamiScript/>
        </head>
        <body className={inter.className}>
        {children}
        </body>
        </html>
    );
}
