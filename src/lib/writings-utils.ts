import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Note: Directory still named 'blog' for backward compatibility, can be renamed to 'writings' in the future
const articlesDirectory = path.join(process.cwd(), "src/content/blog");

export interface Article {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    excerpt: string;
    coverImage?: string;
    tags?: string[];
    category?: string;
    featured?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
  content: string;
}

export function getArticleSlugs() {
  return fs
    .readdirSync(articlesDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getArticleBySlug(slug: string): Article {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
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

export function getAllArticles(): Article[] {
  const slugs = getArticleSlugs();
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    .sort(
      (article1, article2) =>
        new Date(article2.frontMatter.date).getTime() -
        new Date(article1.frontMatter.date).getTime(),
    );

  return articles;
}

export function getFeaturedArticles(): Article[] {
  // Get articles that are marked as featured in the frontmatter
  const featuredArticles = getAllArticles().filter(
    (article) => article.frontMatter.featured === true,
  );

  // If there are no articles explicitly marked as featured, fall back to the most recent ones
  if (featuredArticles.length === 0) {
    return getAllArticles().slice(0, 5);
  }

  // Return featured articles, capped at 5 for the grid layout
  return featuredArticles.slice(0, 5);
}

export function getRecentArticles(): Article[] {
  // Get all articles
  const allArticles = getAllArticles();

  // Get featured articles
  const featuredArticles = allArticles.filter(
    (article) => article.frontMatter.featured === true,
  );

  // If there are featured articles, exclude them from the list
  if (featuredArticles.length > 0) {
    // Create a set of featured article slugs for efficient lookup
    const featuredSlugs = new Set(
      featuredArticles.map((article) => article.slug),
    );

    // Return all articles that are not in the featured set
    return allArticles.filter((article) => !featuredSlugs.has(article.slug));
  }

  // If there are no featured articles, return all articles except the first 5
  // since those are shown in the featured section by default
  return allArticles.slice(5);
}
