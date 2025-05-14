import { getAllBlogPosts } from "@/lib/blog-utils";
import BlogPostCard from "@/components/blog/BlogPostCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Iroshan de Silva",
  description: "Articles and thoughts on design, development, and more.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <section className="container mx-auto max-w-3xl py-12">
      <div className="mb-10">
        <h1 className="mb-4 text-4xl font-bold">Blog</h1>
        <p className="text-muted-foreground text-xl">
          Articles and thoughts on design, development, and more.
        </p>
      </div>

      <div className="grid">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <div className="py-20 text-center">
          <h2 className="mb-2 text-2xl font-medium">No posts yet</h2>
          <p className="text-muted-foreground">
            Check back soon for new content!
          </p>
        </div>
      )}
    </section>
  );
}
