"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Flame, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PostMeta, BlogDictionary, Locale } from "@/app/types";
import Pill from "@/components/pill";
import { formatPostDate, getTypeLabel } from "@/lib/post-utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

type Post = PostMeta & { slug: string; readingTimeMinutes: number };

interface BlogCardProps {
  post: Post;
  lang: Locale;
  dict: BlogDictionary;
}

function BlogFeaturedCard({ post, lang, dict }: BlogCardProps) {
  const formattedDate = formatPostDate(post.created_at, lang);
  const typeLabel = getTypeLabel(post.type, dict.typeLabels);

  return (
    <Link
      href={`/${lang}/blog/${post.slug}`}
      className="group relative isolate flex flex-col min-h-[58vh] max-h-[70vh] overflow-hidden rounded-xl shadow-md outline-4 outline-solid outline-transparent transition-all duration-300 hover:shadow-xl hover:outline-orange-secondary"
    >
      {post.cover_image ? (
        <>
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={post.cover_image}
              alt={post.title}
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="grayscale transition-transform duration-300 group-hover:scale-[1.02]"
              priority
            />
          </div>
          <div
            className="absolute inset-0 rounded-xl"
            style={{
              background:
                "linear-gradient(to top, rgba(23,25,35,0.98) 0%, rgba(45,55,72,0.6) 40%, rgba(23,25,35,0.85) 100%)",
            }}
          />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-dark-secondary to-dark-primary" />
      )}

      <div className="relative z-10 flex flex-1 flex-col justify-between p-8">
        {/* Top: badge + title + excerpt + read more */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-base font-black uppercase tracking-widest text-orange-secondary">
            <Flame size={18} strokeWidth={2.5} />
            {dict.featured}
          </div>
          <h2 className="text-light-primary group-hover:text-orange-secondary max-w-3xl text-3xl font-black leading-tight transition-colors duration-200 md:text-4xl">
            {post.title}
          </h2>
          <p className="text-light-primary max-w-2xl text-base font-semibold leading-relaxed line-clamp-2">
            {post.excerpt}
          </p>
        </div>

        {/* Footer: read more + divider + tags + date */}
        <div className="flex flex-col gap-3">
          <span className="text-gray-light text-sm font-semibold transition-colors duration-200 group-hover:text-orange-secondary group-hover:underline">
            {dict.readMore}
          </span>
          <hr className="border-gray-light/40" />
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Pill label={typeLabel} variant="filled" size="sm" casing="uppercase" />
              {post.tags.length > 0 && (
                <>
                  <span className="border-gray-medium/40 mx-0.5 h-3 border-l" />
                  {post.tags.map((tag) => (
                    <Pill key={tag} label={tag} variant="outline" size="sm" casing="uppercase" />
                  ))}
                </>
              )}
            </div>
            <p className="text-gray-light text-sm shrink-0">
              {formattedDate} · {post.readingTimeMinutes} {dict.readingTime}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

function BlogPostCard({ post, lang, dict }: BlogCardProps) {
  const formattedDate = formatPostDate(post.created_at, lang);
  const typeLabel = getTypeLabel(post.type, dict.typeLabels);

  return (
    <Link
      href={`/${lang}/blog/${post.slug}`}
      className="group relative isolate flex flex-col min-h-[280px] overflow-hidden rounded-xl shadow-md outline-4 outline-solid outline-transparent transition-all duration-300 hover:shadow-xl hover:outline-orange-secondary"
    >
      {post.cover_image ? (
        <>
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={post.cover_image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="grayscale transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(23,25,35,0.98) 0%, rgba(45,55,72,0.6) 40%, rgba(23,25,35,0.85) 100%)",
            }}
          />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-dark-secondary to-dark-primary" />
      )}

      <div className="relative z-10 flex flex-1 flex-col justify-between p-6">
        {/* Title + excerpt */}
        <div className="flex flex-col gap-2">
          <h2 className="text-light-primary group-hover:text-orange-secondary text-2xl font-bold leading-tight transition-colors duration-200">
            {post.title}
          </h2>
          <p className="text-light-primary text-sm font-semibold leading-relaxed line-clamp-2 opacity-100 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100">
            {post.excerpt}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Pill label={typeLabel} variant="filled" size="sm" casing="uppercase" />
            {post.tags.length > 0 && (
              <>
                <span className="border-gray-medium/40 mx-0.5 h-3 border-l" />
                {post.tags.map((tag) => (
                  <Pill key={tag} label={tag} variant="outline" size="sm" casing="uppercase" />
                ))}
              </>
            )}
          </div>
          <p className="text-gray-light text-sm shrink-0">
            {formattedDate} · {post.readingTimeMinutes} {dict.readingTime}
          </p>
        </div>
      </div>
    </Link>
  );
}

interface BlogListProps {
  posts: Post[];
  dict: BlogDictionary;
  lang: Locale;
}

export default function BlogList({ posts, dict, lang }: BlogListProps) {
  const [activeType, setActiveType] = useState<"all" | "post" | "devlog">("all");
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());

  const [featured, ...remaining] = posts;

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, [posts]);

  const filteredRest = useMemo(() => {
    return posts.filter((post) => {
      if (activeType !== "all" && post.type !== activeType) return false;
      if (activeTags.size > 0 && !post.tags.some((tag) => activeTags.has(tag))) return false;
      return true;
    });
  }, [posts, activeType, activeTags]);

  const typeOptions = [
    { value: "all" as const, label: dict.filterAll },
    { value: "post" as const, label: dict.typeLabels.post },
    { value: "devlog" as const, label: dict.typeLabels.devlog },
  ];

  const activeFilterCount = (activeType !== "all" ? 1 : 0) + activeTags.size;

  const toggleTag = (tag: string) => {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  const clearFilters = () => {
    setActiveType("all");
    setActiveTags(new Set());
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Featured — always visible, unaffected by filters */}
      {featured && <BlogFeaturedCard post={featured} lang={lang} dict={dict} />}

      {/* Filter bar */}
      {remaining.length > 0 && (
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={cn(
                  "flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide transition-all duration-200",
                  activeFilterCount > 0
                    ? "bg-orange-secondary text-dark-primary"
                    : "bg-dark-secondary text-gray-light hover:text-light-primary",
                )}
              >
                <SlidersHorizontal size={12} />
                {dict.filters}
                {activeFilterCount > 0 && (
                  <span className="flex size-4 items-center justify-center rounded-full bg-dark-primary text-[10px] font-black text-orange-secondary">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-72 border-gray-medium/20 bg-dark-secondary p-0 shadow-2xl"
            >
              {/* Type */}
              <div className="p-4">
                <p className="mb-3 text-[10px] font-black uppercase tracking-widest text-gray-light">
                  Type
                </p>
                <div className="flex rounded-full bg-dark-primary p-1">
                  {typeOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setActiveType(opt.value)}
                      className={cn(
                        "flex-1 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide transition-all duration-200",
                        activeType === opt.value
                          ? "bg-orange-secondary text-dark-primary"
                          : "text-gray-light hover:text-light-primary",
                      )}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags */}
              {allTags.length > 0 && (
                <>
                  <div className="border-gray-medium/20 border-t" />
                  <div className="p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-light">
                        Tags
                      </p>
                      {activeTags.size > 0 && (
                        <span className="text-[10px] font-bold text-orange-secondary">
                          {activeTags.size} selected
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {allTags.map((tag) => (
                        <label key={tag} className="cursor-pointer">
                          <Checkbox
                            checked={activeTags.has(tag)}
                            onCheckedChange={() => toggleTag(tag)}
                            className="sr-only"
                          />
                          <span
                            className={cn(
                              "rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide transition-all duration-200",
                              activeTags.has(tag)
                                ? "bg-orange-secondary text-dark-primary"
                                : "border border-gray-light/50 text-gray-light hover:border-gray-light hover:text-light-primary",
                            )}
                          >
                            {tag}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Clear */}
              {activeFilterCount > 0 && (
                <>
                  <div className="border-gray-medium/20 border-t" />
                  <div className="p-3">
                    <button
                      onClick={clearFilters}
                      className="flex w-full items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium text-gray-light transition-colors duration-200 hover:bg-gray-medium/10 hover:text-orange-secondary"
                    >
                      <X size={12} />
                      {dict.clearFilters}
                    </button>
                  </div>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          {activeFilterCount > 0 && (
            <Badge variant="outline" className="border-gray-medium/30 px-3 py-1 text-sm text-gray-light">
              <span className="font-bold text-orange-secondary">{filteredRest.length}</span>
              <span className="text-gray-light/60">/</span>
              {posts.length}
            </Badge>
          )}
        </div>
      )}

      {/* Filtered grid */}
      {filteredRest.length === 0 && activeFilterCount > 0 ? (
        <p className="text-gray-light">{dict.emptyState}</p>
      ) : (
        filteredRest.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredRest.map((post) => (
              <BlogPostCard key={post.slug} post={post} lang={lang} dict={dict} />
            ))}
          </div>
        )
      )}
    </div>
  );
}
