import type React from "react";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Guilherme - Full-Stack Engineer",
  description:
    "Full-Stack Engineer focused on Frontend — building fast, human-centered systems.",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} antialiased`}>
      {/* Fixed CSS class spacing - added spaces between classes */}
      <body className="min-h-screen bg-dark-primary text-light-primary font-sans">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
