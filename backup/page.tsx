import { getArticleBySlug, getArticleSlugs } from "@/lib/writings-utils";
import ArticleHeader from "@/components/writings/ArticleHeader";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { Callout, Frame, Image } from "@prose-ui/next";
import React from "react";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const articles = getArticleSlugs();
  return articles.map((slug) => ({
    slug,
  }));
}

// Using any is acceptable here because we're working around a type constraint issue
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata(props: any): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getArticleBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.frontMatter.title} | Writings`,
    description: post.frontMatter.excerpt,
  };
}

// Using any is acceptable here because we're working around a type constraint issue
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function WritingPage(props: any) {
  const { slug } = await props.params;

  try {
    const post = getArticleBySlug(slug);

    return (
      <article className="prose-ui container mx-auto max-w-3xl !bg-transparent px-4 py-12">
        <ArticleHeader post={post} />
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
  } catch {
    // Handle not found with Next.js notFound utility
    notFound();
  }
}
