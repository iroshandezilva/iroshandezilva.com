import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { BlogPost } from "./types";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export function getPostSlugs() {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.trim()); // trims extra whitespace from file names
}

export function getPostBySlug(slug: string): BlogPost {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(BLOG_DIR, `${realSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);

  return {
    slug: realSlug,
    title: data.title,
    date: data.date,
    tags: data.tags || [],
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export async function getSerializedPost(slug: string) {
  const post = getPostBySlug(slug);
  const mdxSource = await serialize(post.content);
  return { ...post, mdxSource };
}
