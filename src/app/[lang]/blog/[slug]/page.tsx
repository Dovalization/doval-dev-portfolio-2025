import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeUnwrapImages from "rehype-unwrap-images";
import rehypeSectionize from "@/lib/rehype-sectionize";
import remarkGfm from "remark-gfm";
import { getContent, LocaleSchema } from "@/lib/content";
import { getAllPosts, getAdjacentPosts, getPostBySlug } from "@/lib/posts";
import BlogPostBody from "@/components/blog/blog-post-body";
import Pill from "@/components/pill";
import { formatPostDate, getTypeLabel } from "@/lib/post-utils";
import { BlogImageComponent } from "@/components/blog/blog-image";
import {
  BlogH2,
  BlogH3,
  BlogH4,
  BlogP,
  BlogA,
  BlogBlockquote,
  BlogCode,
  BlogPre,
  BlogUl,
  BlogOl,
  BlogHr,
  BlogStrong,
  BlogSection,
  BlogTable,
  BlogTh,
  BlogTd,
} from "@/components/blog/blog-components";
import "highlight.js/styles/atom-one-dark.css";

const mdxComponents = {
  img: BlogImageComponent,
  h2: BlogH2,
  h3: BlogH3,
  h4: BlogH4,
  p: BlogP,
  a: BlogA,
  blockquote: BlogBlockquote,
  code: BlogCode,
  pre: BlogPre,
  ul: BlogUl,
  ol: BlogOl,
  hr: BlogHr,
  strong: BlogStrong,
  section: BlogSection,
  table: BlogTable,
  th: BlogTh,
  td: BlogTd,
};

export async function generateStaticParams() {
  return (["en", "pt"] as const).flatMap((lang) =>
    getAllPosts(lang).map((post) => ({ lang, slug: post.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = LocaleSchema.parse(lang);
  const post = getPostBySlug(slug, locale);
  if (!post) return {};
  const ogImage = post.cover_image ?? "/images/about.png";
  return {
    title: `${post.title} — doval.dev`,
    description: post.excerpt,
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      languages: {
        en: `/en/blog/${slug}`,
        pt: `/pt/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const locale = LocaleSchema.parse(lang);
  const dict = await getContent(locale);
  const post = getPostBySlug(slug, locale);

  if (!post) notFound();

  const { prev, next } = getAdjacentPosts(slug, locale);

  const { content } = await compileMDX({
    source: post.rawContent,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, rehypeHighlight, rehypeUnwrapImages, rehypeSectionize],
      },
    },
  });

  const formattedDate = formatPostDate(post.created_at, locale);
  const typeLabel = getTypeLabel(post.type, dict.blog.typeLabels);

  return (
    <article className="pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.created_at.toISOString(),
            dateModified: post.updated_at.toISOString(),
            author: { "@type": "Person", name: "Guilherme Doval", url: "https://doval.dev" },
            ...(post.cover_image && { image: `https://doval.dev${post.cover_image}` }),
          }),
        }}
      />
      {/* Header — full-width with optional cover image background */}
      <div className="relative overflow-hidden min-h-[40vh]">
        {post.cover_image ? (
          <>
            <Image
              src={post.cover_image}
              alt={post.title}
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="grayscale"
              priority
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(23,25,35,0.85) 0%, rgba(23,25,35,0.87) 15%, rgba(23,25,35,0.9) 30%, rgba(23,25,35,0.94) 50%, rgba(23,25,35,0.97) 65%, rgba(23,25,35,1) 75%)" }} />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-dark-secondary to-dark-primary" />
        )}

        <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-10 pb-10">
          <div className="mx-auto w-full max-w-4xl">
          <header className="flex flex-col gap-6">
            {/* Title */}
            <h1 className="text-light-primary text-3xl leading-tight font-black md:text-4xl lg:text-5xl text-shadow-black text-shadow-sm">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-light-primary max-w-prose text-base leading-relaxed font-semibold text-shadow-black text-shadow-sm md:text-lg">{post.excerpt}</p>

            {/* Type badge + Tags */}
            <div className="flex flex-wrap items-center gap-2">
              <Pill label={typeLabel} variant="filled" casing="uppercase" />
              {post.tags.length > 0 && (
                <>
                  <span className="border-gray-medium/40 mx-1 h-4 border-l" />
                  {post.tags.map((tag) => (
                    <Pill key={tag} label={tag} variant="outline" casing="uppercase" />
                  ))}
                </>
              )}
            </div>

            {/* Author */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/about.png"
                alt="Guilherme Doval"
                width={44}
                height={44}
                className="rounded-full object-cover"
              />
              <div className="flex flex-col gap-0.5">
                <span className="text-light-primary text-sm font-bold text-shadow-black text-shadow-sm">Guilherme Doval</span>
                <span className="text-gray-light text-sm text-shadow-black text-shadow-sm">
                  {formattedDate} · {post.readingTimeMinutes} {dict.blog.readingTime}
                </span>
              </div>
            </div>
          </header>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-16 sm:px-6">
        <BlogPostBody content={content} />

        <div className="prose-blog mt-12 flex flex-col gap-6">
          <Link
            href={`/${locale}/blog`}
            className="text-orange-secondary hover:text-orange-primary text-sm font-medium transition-colors duration-200"
          >
            ← {dict.blog.backToBlog}
          </Link>

          {(prev || next) && (
            <nav className="flex justify-between gap-4 border-t border-gray-medium/20 pt-6">
              {prev ? (
                <Link
                  href={`/${locale}/blog/${prev.slug}`}
                  className="group flex max-w-[48%] flex-col gap-1"
                >
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-light">{dict.blog.newerPost}</span>
                  <span className="text-sm font-semibold text-light-primary transition-colors duration-200 group-hover:text-orange-secondary line-clamp-2">{prev.title}</span>
                </Link>
              ) : <span />}
              {next && (
                <Link
                  href={`/${locale}/blog/${next.slug}`}
                  className="group flex max-w-[48%] flex-col items-end gap-1 text-right"
                >
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-light">{dict.blog.olderPost}</span>
                  <span className="text-sm font-semibold text-light-primary transition-colors duration-200 group-hover:text-orange-secondary line-clamp-2">{next.title}</span>
                </Link>
              )}
            </nav>
          )}
        </div>
      </div>
    </article>
  );
}
