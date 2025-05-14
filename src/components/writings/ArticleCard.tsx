import Link from "next/link";
import { Article } from "@/lib/writings-utils";

interface ArticleCardProps {
  post: Article;
}

export default function ArticleCard({ post }: ArticleCardProps) {
  const { slug, frontMatter } = post;
  const { title, date, excerpt } = frontMatter;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="ransition-shadow mb-8 overflow-hidden">
      <Link href={`/writings/${slug}`} className="block">
        <div className="rounded-lg">
          <p className="mb-2 text-sm text-gray-500">{formattedDate}</p>
          <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm leading-relaxed text-gray-700">{excerpt}</p>
        </div>
      </Link>
    </div>
  );
}
