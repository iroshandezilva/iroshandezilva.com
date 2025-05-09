import Image from "next/image";
import { BlogPost } from "@/lib/blog-utils";

interface BlogHeaderProps {
  post: BlogPost;
}

export default function BlogHeader({ post }: BlogHeaderProps) {
  const { frontMatter } = post;
  const { title, date, coverImage, tags } = frontMatter;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="mb-10">
      <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h1>
      <div className="mb-8 flex items-center">
        <time className="text-muted-foreground">{formattedDate}</time>
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
        <div className="relative mb-8 h-64 w-full overflow-hidden rounded-lg md:h-96">
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
    </header>
  );
}
