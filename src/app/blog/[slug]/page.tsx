import { getPostSlugs, getSerializedPost } from "@/lib/mdx";
import MdxRenderer from "@/components/MdxRenderer";

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export default async function BlogPostPage({ params }: Readonly<{ params: { slug: string } }>) {
  
  const { slug } = await params;
  const post = await getSerializedPost(slug);

  return (
    <article className="prose dark:prose-invert max-w-3xl mx-auto py-12">
      <h1>{post.title}</h1>
      <p className="text-sm text-muted">{post.date}</p>
      {post.tags?.length > 0 && (
        <p className="text-xs">{post.tags.join(", ")}</p>
      )}

      <MdxRenderer source={post.mdxSource} />
    </article>
  );
}
