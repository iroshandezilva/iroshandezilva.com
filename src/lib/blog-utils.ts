import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    excerpt: string;
    coverImage?: string;
    tags?: string[];
    [key: string]: any;
  };
  content: string;
}

export function getBlogPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getBlogPostBySlug(slug: string): BlogPost {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    slug,
    frontMatter: {
      title: data.title || slug,
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || "",
      ...data,
    },
    content,
  };
}

export function getAllBlogPosts(): BlogPost[] {
  const slugs = getBlogPostSlugs();
  const posts = slugs
    .map((slug) => getBlogPostBySlug(slug))
    .sort(
      (post1, post2) =>
        new Date(post2.frontMatter.date).getTime() -
        new Date(post1.frontMatter.date).getTime(),
    );

  return posts;
}
