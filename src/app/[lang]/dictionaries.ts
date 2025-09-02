import "server-only";
import { DataSchema, type AppData } from "@/data/schemas";

const dictionaries = {
  en: () =>
    import("./en.json").then((module) => DataSchema.parse(module.default)),
  pt: () =>
    import("./pt.json").then((module) => DataSchema.parse(module.default)),
};

export const getDictionary = async (locale: "en" | "pt"): Promise<AppData> =>
  dictionaries[locale]();
