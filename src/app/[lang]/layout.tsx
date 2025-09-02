import type React from "react";
import type { Metadata } from "next";
import "../globals.css";
import { Header } from "@/components/header";
import { getDictionary } from "./dictionaries";
import { notFound } from "next/navigation";

const metadataMap = {
  en: {
    title: "doval.dev - Full-Stack Developer and Designer",
    description:
      "Full-Stack Developer focused on Frontend — building fast, human-centered systems.",
  },
  pt: {
    title: "doval.dev - Desenvolvedor Full-Stack e Designer",
    description:
      "Desenvolvedor Full-Stack focado em Frontend — construindo sistemas rápidos e centrados no humano.",
  },
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pt" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const metadata = metadataMap[lang as keyof typeof metadataMap];
  if (!metadata) {
    notFound();
  }
  
  return {
    title: metadata.title,
    description: metadata.description,
    generator: "Next.js",
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  
  // Check if the language is supported
  if (!['en', 'pt'].includes(lang)) {
    notFound();
  }
  
  const dict = await getDictionary(lang as 'en' | 'pt');

  return (
    <>
      <Header data={dict.navigation} currentLocale={lang as 'en' | 'pt'} />
      <main>{children}</main>
    </>
  );
}
