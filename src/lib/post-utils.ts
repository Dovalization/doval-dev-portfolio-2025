import type { Locale } from "@/app/types";

export const formatPostDate = (date: Date, locale: Locale): string =>
  date.toLocaleDateString(locale === "pt" ? "pt-BR" : "en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export const getTypeLabel = (
  type: "post" | "devlog",
  labels: { post: string; devlog: string },
): string => labels[type];
