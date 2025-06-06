import { getFeaturedArticles, getRecentArticles } from "@/lib/writings-utils";
import FeaturedArticleCard from "@/components/writings/FeaturedArticleCard";
import ArticleTable from "@/components/writings/ArticleTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writings | Iroshan de Zilva",
  description: "Articles and thoughts on design, development, and more.",
};

export default function WritingsPage() {
  const featuredPosts = getFeaturedArticles();
  const recentPosts = getRecentArticles();

  return (
    <div className="container mx-auto max-w-3xl px-6 pt-16 pb-12 md:px-0 lg:pt-24">
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="font-heading mb-4 text-3xl text-stone-900 lg:text-5xl">
          Not a blog. More like a trace
        </h1>
        <div className="flex md:items-center md:flex-row justify-between flex-col items-start">
          <p className="text-muted-foreground text-lg">
            Loose notes on design, code, and everything in between.
          </p>
          <a
            href="/rss.xml"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 11a9 9 0 0 1 9 9" />
              <path d="M4 4a16 16 0 0 1 16 16" />
              <circle cx="5" cy="19" r="1" />
            </svg>
            RSS Feed
          </a>
        </div>
      </div>

      {/* Featured Posts Section - Bento Grid */}
      {featuredPosts.length > 0 && (
        <section className="mb-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {featuredPosts.map((post, idx) => (
              <FeaturedArticleCard
                key={post.slug}
                post={post}
                className={idx === 0 || idx === 1 ? "sm:col-span-3" : ""}
              />
            ))}
          </div>
        </section>
      )}

      {/* Recent Posts Section - Table Layout */}
      <section>
        <div className="mb-6 border-b border-stone-300 pb-4">
          <h2 className="text-sm font-medium tracking-widest text-stone-600 uppercase">
            All Articles
          </h2>
        </div>
        <ArticleTable posts={recentPosts} />

        {/* Show message when no posts available */}
        {featuredPosts.length === 0 && recentPosts.length === 0 && (
          <div className="py-20 text-center">
            <h2 className="mb-2 text-2xl font-medium">No posts yet</h2>
            <p className="text-stone-500">Check back soon for new content!</p>
          </div>
        )}
      </section>
    </div>
  );
}
