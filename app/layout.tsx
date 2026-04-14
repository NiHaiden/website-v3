import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import UmamiScript from "@/app/umami-script";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

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
        <UmamiScript />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} font-sans`}>{children}</body>
    </html>
  );
}
