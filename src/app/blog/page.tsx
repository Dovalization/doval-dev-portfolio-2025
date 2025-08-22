import MetaSection from "@/components/meta-section";
import Link from "next/link";

// Content data (to be replaced by CMS)
const blogData = {
  meta: {
    title: "Blog",
    subtitle:
      "Thoughts on engineering, design, and building software that works the way people actually think.",
  },
  posts: [
    {
      title: "Building Systems That Think Like Users",
      excerpt:
        "How neurodivergent perspectives can reshape software design to reduce cognitive friction and support natural thinking patterns.",
      date: "2024-12-15",
      readTime: "8 min read",
      category: "Design Systems",
      slug: "building-systems-that-think-like-users",
      featured: true,
    },
    {
      title: "The Hidden Cost of Complex Interfaces",
      excerpt:
        "Why every additional click, field, and decision point in your interface is costing users more than you think.",
      date: "2024-11-28",
      readTime: "6 min read",
      category: "UX Engineering",
      slug: "hidden-cost-complex-interfaces",
      featured: false,
    },
    {
      title: "From Game Dev to Web: Lessons in User-Centered Engineering",
      excerpt:
        "What building games taught me about creating software that people actually want to use every day.",
      date: "2024-11-10",
      readTime: "10 min read",
      category: "Engineering",
      slug: "game-dev-to-web-lessons",
      featured: true,
    },
    {
      title: "TypeScript Patterns for Maintainable React",
      excerpt:
        "Practical patterns for building React applications that scale with your team and stay maintainable over time.",
      date: "2024-10-22",
      readTime: "12 min read",
      category: "Technical",
      slug: "typescript-patterns-maintainable-react",
      featured: false,
    },
  ],
  categories: [
    "All",
    "Design Systems",
    "UX Engineering",
    "Engineering",
    "Technical",
  ],
  cta: {
    title: "Stay in the Loop",
    text: "Get notified when I publish new blog about engineering, design, and building better software.",
    subscribeLabel: "Subscribe",
    placeholder: "Enter your email",
  },
} as const;

export default function BlogPage() {
  const featuredPosts = blogData.posts.filter((post) => post.featured);

  return (
    <div className="min-h-screen bg-dark-primary text-light-primary py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <MetaSection
          title={blogData.meta.title}
          subtitle={blogData.meta.subtitle}
        />

        <section className="mb-20">
          <h2 className="text-2xl font-bold text-light-primary mb-8">
            Featured
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group cursor-pointer bg-gradient-to-br from-dark-secondary to-dark-primary border border-gray-medium/30 rounded-2xl p-8 hover:border-orange-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-primary/10 h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-primary to-orange-secondary text-dark-primary text-sm font-bold rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-gray-light text-sm">
                        <time>{post.date}</time>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-light-primary mb-4 group-hover:text-orange-secondary transition-colors leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-gray-light leading-relaxed mb-6 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-orange-primary font-medium group-hover:text-orange-secondary transition-colors">
                      Read full article
                      <svg
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {blogData.categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === "All"
                    ? "bg-gradient-to-r from-orange-primary to-orange-secondary text-dark-primary shadow-lg"
                    : "bg-dark-secondary text-gray-light hover:bg-gray-medium hover:text-light-primary border border-gray-medium/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <section className="mb-20">
          <h2 className="text-2xl font-bold text-light-primary mb-8">
            All Articles
          </h2>
          <div className="space-y-6">
            {blogData.posts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group cursor-pointer bg-dark-secondary/50 border border-gray-medium/30 rounded-xl p-6 hover:bg-dark-secondary hover:border-orange-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div
                      className={`w-2 h-16 rounded-full flex-shrink-0 transition-all duration-300 ${
                        index % 2 === 0
                          ? "bg-gradient-to-b from-orange-primary to-orange-secondary group-hover:shadow-lg group-hover:shadow-orange-primary/30"
                          : "bg-gradient-to-b from-orange-secondary to-cream group-hover:shadow-lg group-hover:shadow-orange-secondary/30"
                      }`}
                    ></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-block px-3 py-1 bg-orange-primary/20 text-orange-secondary border border-orange-primary/30 text-sm font-medium rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-gray-light text-sm">
                          <time>{post.date}</time>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-light-primary mb-3 group-hover:text-orange-secondary transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-light leading-relaxed mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center text-orange-primary font-medium group-hover:text-orange-secondary transition-colors">
                        Continue reading
                        <svg
                          className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-dark-secondary via-dark-secondary to-dark-primary border border-orange-primary/20 rounded-2xl p-10 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-light-primary mb-4">
              {blogData.cta.title}
            </h3>
            <p className="text-gray-light mb-8 text-lg">
              {blogData.cta.text}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={blogData.cta.placeholder}
                className="flex-1 px-6 py-4 border border-gray-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-primary focus:border-orange-primary bg-dark-primary text-light-primary placeholder-gray-light"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-orange-primary to-orange-secondary text-dark-primary font-bold rounded-xl hover:shadow-lg hover:shadow-orange-primary/30 transition-all duration-300 transform hover:scale-105">
                {blogData.cta.subscribeLabel}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
