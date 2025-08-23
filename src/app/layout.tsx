import type React from "react";
import type { Metadata } from "next";
import { Open_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "doval.dev - Full-Stack Developer and Designer",
  description:
    "Full-Stack Developer focused on Frontend — building fast, human-centered systems.",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${jetbrainsMono.variable} antialiased`}
    >
      {/* Fixed CSS class spacing - added spaces between classes */}
      <body className="bg-dark-primary text-light-primary min-h-screen font-sans">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
