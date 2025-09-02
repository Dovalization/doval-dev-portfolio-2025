import { DataSchema, type AppData } from "./schemas";
import rawData from "./data.json";

// Validate and parse the data
export const data: AppData = DataSchema.parse(rawData);

// Export individual sections for convenience
export const {
  hero,
  about,
  coreValues,
  work,
  skills,
  contact,
  navigation,
} = data;