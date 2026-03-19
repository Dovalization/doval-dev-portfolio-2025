import { cache } from "react";
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";
import { LocaleSchema, type AppData, type Locale } from "@/app/types";

const reader = createReader(process.cwd(), keystaticConfig);

export const getContent = cache(async (locale: Locale): Promise<AppData> => {
  const key = locale === "en" ? "contentEn" : "contentPt";
  const data = await reader.singletons[key].readOrThrow();
  return data as unknown as AppData;
});

export { LocaleSchema };
