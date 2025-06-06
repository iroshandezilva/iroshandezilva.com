"use client";

import Image from "next/image";
import { Article } from "@/lib/writings-utils";
import Link from "next/link";
import { CaretLeft } from "@phosphor-icons/react";

interface ArticleHeaderProps {
  post: Article;
}

export default function ArticleHeader({ post }: ArticleHeaderProps) {
  const { frontMatter } = post;
  const { title, date, coverImage, tags } = frontMatter;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="mb-10">
      <div className="mb-4 flex items-center justify-between">
        <Link
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-stone-900"
          href={"/writings"}
        >
          <CaretLeft size={20} weight="bold" />
          Back to Writings
        </Link>
        <time className="text-muted-foreground text-sm">{formattedDate}</time>
      </div>

      <div className="mb-8 flex items-center">
        {tags && tags.length > 0 && (
          <div className="ml-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-muted rounded-full px-2 py-1 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      {coverImage && (
        <div className="relative mb-8 h-64 w-full overflow-hidden rounded-lg md:h-96 border border-[#C3C3C3]">
          <Image
            src={coverImage}
            alt={`Cover image for ${title}`}
            fill
            sizes="100vw"
            className="object-cover"
            priority={true}
          />
        </div>
      )}
      <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h1>
    </header>
  );
}
