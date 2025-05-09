import Link from "next/link";
import { BlogPost } from "@/lib/blog-utils";

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const { slug, frontMatter } = post;
  const { title, date, excerpt } = frontMatter;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="ransition-shadow mb-8 overflow-hidden">
      <Link href={`/blog/${slug}`} className="block">
        <div className="">
          <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
          <time className="text-muted-foreground mb-3 block text-sm">
            {formattedDate}
          </time>
          <p className="text-foreground/90 mb-4">{excerpt}</p>
          {/* {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-muted rounded-full px-2 py-1 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )} */}
        </div>
      </Link>
    </div>
  );
}
