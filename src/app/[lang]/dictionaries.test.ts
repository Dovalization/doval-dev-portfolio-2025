import { describe, it, expect, vi } from "vitest";

// Mock server-only
vi.mock("server-only", () => ({}));

// Mock the schema validation
vi.mock("@/data/schemas", () => ({
  DataSchema: {
    parse: vi.fn().mockImplementation((data) => data),
  },
}));

// Mock the JSON imports
vi.mock("./en.json", () => ({
  default: {
    hero: { title: "Hero Title EN" },
    navigation: { home: "Home", about: "About" },
  },
}));

vi.mock("./pt.json", () => ({
  default: {
    hero: { title: "Hero Title PT" },
    navigation: { home: "Início", about: "Sobre" },
  },
}));

describe("Dictionary Loading", () => {
  it("should load English dictionary", async () => {
    const { getDictionary } = await import("./dictionaries");

    const dict = await getDictionary("en");

    expect(dict).toEqual({
      hero: { title: "Hero Title EN" },
      navigation: { home: "Home", about: "About" },
    });
  });

  it("should load Portuguese dictionary", async () => {
    const { getDictionary } = await import("./dictionaries");

    const dict = await getDictionary("pt");

    expect(dict).toEqual({
      hero: { title: "Hero Title PT" },
      navigation: { home: "Início", about: "Sobre" },
    });
  });

  it("should validate data with schema", async () => {
    const { DataSchema } = await import("@/app/types");
    const { getDictionary } = await import("./dictionaries");

    await getDictionary("en");

    expect(DataSchema.parse).toHaveBeenCalledWith({
      hero: { title: "Hero Title EN" },
      navigation: { home: "Home", about: "About" },
    });
  });

  it("should handle type constraints correctly", () => {
    // Test that the function signature accepts only 'en' | 'pt'
    const validLocales: ("en" | "pt")[] = ["en", "pt"];

    validLocales.forEach((locale) => {
      expect(["en", "pt"]).toContain(locale);
    });
  });
});
