import { getContent, LocaleSchema } from "@/lib/content";
import { getAllPosts } from "@/lib/posts";
import BlogList from "@/components/blog/blog-list";
import SectionDivider from "@/components/section-divider";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pt" }];
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = LocaleSchema.parse(lang);
  const dict = await getContent(locale);
  const posts = getAllPosts(locale);

  return (
    <section className="container mx-auto flex flex-col gap-10 px-4 pt-8 pb-16 sm:px-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-light-primary text-4xl font-black md:text-5xl">{dict.blog.title}</h1>
        <SectionDivider size="lg" />
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-light">{dict.blog.emptyState}</p>
      ) : (
        <BlogList posts={posts} dict={dict.blog} lang={locale} />
      )}
    </section>
  );
}
