import { getBlogPostBySlug, getBlogPostSlugs } from "@/lib/blog-utils";
import BlogHeader from "@/components/blog/BlogHeader";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { Callout, Frame, Image } from "@prose-ui/next";

interface BlogPostParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getBlogPostSlugs();
  return posts.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostParams): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.frontMatter.title} | Blog`,
    description: post.frontMatter.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostParams) {
  const { slug } = params;

  try {
    const post = getBlogPostBySlug(slug);

    return (
      <article className="prose-ui container mx-auto max-w-3xl px-4 py-12">
        <BlogHeader post={post} />
        <div className="prose dark:prose-invert max-w-none">
          <MDXRemote
            source={post.content}
            components={{
              Callout,
              Frame,
              Image,
            }}
          />
        </div>
      </article>
    );
  } catch (_error: unknown) {
    notFound();
  }
}
