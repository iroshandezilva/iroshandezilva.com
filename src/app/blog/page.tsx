import { getAllPosts } from "../../lib/mdx";
import Link from "next/link";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-muted">{post.date}</p>
              <div className="text-sm mt-1">{post.tags?.join(", ")}</div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
