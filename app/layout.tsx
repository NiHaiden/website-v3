import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

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
      <body className={`${geist.variable} ${geistMono.variable} font-sans`}>
        {/* Fixed wallpaper */}
        <div className="fixed inset-0 z-0">
          <Image
            src="/bgimg.JPG"
            alt=""
            fill
            className="object-cover object-top lg:object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
