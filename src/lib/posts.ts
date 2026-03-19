import "server-only";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostMetaSchema, PostSchema, type PostMeta, type Post } from "@/app/types";
import { slugify } from "./slugify";

const contentDirectory = path.join(process.cwd(), "content");

function getPostsDirectory(lang: "en" | "pt"): string {
  return path.join(contentDirectory, lang, "posts");
}

function calculateReadingTime(content: string): number {
  return Math.ceil(content.trim().split(/\s+/).length / 200);
}

export function getAllPosts(lang: "en" | "pt"): (PostMeta & { slug: string; readingTimeMinutes: number })[] {
  const postsDirectory = getPostsDirectory(lang);

  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  const posts = filenames.flatMap((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    const result = PostMetaSchema.safeParse(data);
    if (!result.success) return [];

    const meta = result.data;
    if (meta.status !== "published") return [];

    const readingTimeMinutes = calculateReadingTime(content);

    return [{ ...meta, slug: slugify(filename), readingTimeMinutes }];
  });

  return posts.sort((a, b) => b.created_at.getTime() - a.created_at.getTime());
}

export function getAdjacentPosts(slug: string, lang: "en" | "pt") {
  const posts = getAllPosts(lang);
  const index = posts.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? posts[index - 1] : null,
    next: index < posts.length - 1 ? posts[index + 1] : null,
  };
}

export function getPostBySlug(slug: string, lang: "en" | "pt"): Post | null {
  const postsDirectory = getPostsDirectory(lang);

  if (!fs.existsSync(postsDirectory)) {
    return null;
  }

  const filenames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));
  const filename = filenames.find((f) => slugify(f) === slug);

  if (!filename) return null;

  const filePath = path.join(postsDirectory, filename);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const metaResult = PostMetaSchema.safeParse(data);
  if (!metaResult.success) return null;

  const meta = metaResult.data;
  if (meta.status !== "published") return null;

  // Strip leading H1 (title is already rendered in the page header)
  const rawContent = content.replace(/^#\s+.+\n?/, "");
  const readingTimeMinutes = calculateReadingTime(rawContent);

  return PostSchema.parse({ ...meta, slug, rawContent, readingTimeMinutes });
}
