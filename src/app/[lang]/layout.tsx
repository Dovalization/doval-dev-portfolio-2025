import type React from "react";
import type { Metadata } from "next";
import "../globals.css";
import { Header } from "@/components/header";
import { getContent, LocaleSchema } from "@/lib/content";

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
  const locale = LocaleSchema.parse(lang);
  const metadata = metadataMap[locale];

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
  const locale = LocaleSchema.parse(lang);
  const dict = await getContent(locale);

  return (
    <>
      <Header data={dict.navigation} />
      <main>{children}</main>
    </>
  );
}
