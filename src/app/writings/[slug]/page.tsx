import { getArticleBySlug, getArticleSlugs } from "@/lib/writings-utils";
import ArticleHeader from "@/components/writings/ArticleHeader";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { Callout } from "@prose-ui/next";
import EnhancedImage from "@/components/shared/EnhancedImage";
import { Figure } from "@/components/ui/figure";
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
  const article = getArticleBySlug(props.params.slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.frontMatter.title} | Writings`,
    description: article.frontMatter.excerpt,
  };
}

// Using any is acceptable here because we're working around a type constraint issue
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function WritingPage(props: any) {
  const { slug } = props.params;

  try {
    const article = getArticleBySlug(slug);

    return (
      <article className="prose-ui container mx-auto max-w-3xl !bg-transparent px-4 py-12">
        <ArticleHeader post={article} />
        <div className="prose dark:prose-invert max-w-none">
          <MDXRemote
            source={article.content}
            components={{
              Callout,
              // Override the Frame component to use our custom Figure
              Frame: ({
                caption,
                children,
                align,
              }: {
                caption?: string;
                children?: React.ReactNode;
                align?: "left" | "center" | "right";
              }) => (
                <Figure caption={caption} align={align || "left"}>
                  {children}
                </Figure>
              ),
              Figure,
              Image: EnhancedImage,
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
