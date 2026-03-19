import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const BASE_URL = "https://doval.dev";
const LOCALES = ["en", "pt"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = LOCALES.flatMap((lang) => [
    {
      url: `${BASE_URL}/${lang}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/${lang}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ]);

  const postRoutes: MetadataRoute.Sitemap = LOCALES.flatMap((lang) =>
    getAllPosts(lang).map((post) => ({
      url: `${BASE_URL}/${lang}/blog/${post.slug}`,
      lastModified: post.updated_at,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  return [...staticRoutes, ...postRoutes];
}
