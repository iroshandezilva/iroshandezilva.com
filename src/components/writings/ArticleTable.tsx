import Link from "next/link";
import { Article } from "@/lib/writings-utils";

interface ArticleTableProps {
  posts: Article[];
}

export default function ArticleTable({ posts }: ArticleTableProps) {
  if (posts.length === 0) {
    return (
      <div className="py-10 text-center">
        <p className="text-stone-500">No more articles available.</p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-stone-200">
      {posts.map((post) => {
        const { slug, frontMatter } = post;
        const { title, date, tags } = frontMatter;

        // Use the first tag as category if available
        const category = tags && tags.length > 0 ? tags[0] : "Article";

        const formattedDate = new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });

        return (
          <Link
            href={`/writings/${slug}`}
            key={slug}
            className="-mx-2 flex flex-col justify-between rounded px-2 py-4 transition hover:bg-stone-50 sm:flex-row sm:items-center"
          >
            <p className="text-base font-medium text-stone-900">{title}</p>
            <div className="mt-2 flex items-center gap-4 sm:mt-0">
              <span className="rounded bg-stone-100 px-2 py-0.5 text-sm text-stone-600">
                {category}
              </span>
              <span className="text-sm text-stone-500">{formattedDate}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
