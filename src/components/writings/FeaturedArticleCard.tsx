import Image from "next/image";
import Link from "next/link";
import { Article } from "@/lib/writings-utils";

interface FeaturedArticleCardProps {
  post: Article;
  className?: string;
}

export default function FeaturedArticleCard({
  post,
  className = "",
}: FeaturedArticleCardProps) {
  const { slug, frontMatter } = post;
  const { title, coverImage, tags } = frontMatter;

  // Use the first tag as category if available
  const category = tags && tags.length > 0 ? tags[0] : "Article";

  // Default image if none provided
  const imageUrl = coverImage || "/images/default_thumbnail_writings.png";

  return (
    <Link
      href={`/writings/${slug}`}
      className={`group bg-surface col-span-2 block overflow-hidden rounded-xl border border-stone-200 filter transition hover:border-stone-300 hover:brightness-[110%] ${className}`}
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <p className="mb-1 text-sm text-stone-500">{category}</p>
        <h3 className="mb-2 text-lg leading-tight font-medium text-stone-900">
          {title}
        </h3>
      </div>
    </Link>
  );
}
