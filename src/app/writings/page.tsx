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
    <div className="container mx-auto max-w-3xl px-6 py-12">
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="font-heading mb-4 text-3xl text-stone-900 lg:text-5xl">
          Not a blog. More like a trace
        </h1>
        <p className="text-muted-foreground text-lg">
          Loose notes on design, code, and everything in between.
        </p>
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
        <h2 className="mb-6 text-xl font-bold">All Articles</h2>
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
