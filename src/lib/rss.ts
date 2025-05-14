import { Feed } from "feed";
import { getAllArticles } from "./writings-utils";

// Website domain and base URL
const SITE_URL = "https://iroshandezilva.com";

export function generateRssFeed(): string {
  const articles = getAllArticles();

  const feed = new Feed({
    title: "Iroshan De Zilva's Writings",
    description: "Loose notes on design, code, and everything in between.",
    id: SITE_URL,
    link: SITE_URL,
    language: "en",
    favicon: `${SITE_URL}/favicon.ico`,
    copyright: `© ${new Date().getFullYear()} Iroshan de Zilva. All rights reserved.`,
    feedLinks: {
      rss: `${SITE_URL}/rss.xml`,
    },
    author: {
      name: "Iroshan de Zilva",
      email: "", // Optional: Add your email if you want
      link: SITE_URL,
    },
  });

  articles.forEach((article) => {
    const { slug, frontMatter } = article;
    const url = `${SITE_URL}/writings/${slug}`;

    feed.addItem({
      title: frontMatter.title,
      id: url,
      link: url,
      description: frontMatter.excerpt,
      content: frontMatter.excerpt,
      date: new Date(frontMatter.date),
      image: frontMatter.coverImage
        ? `${SITE_URL}${
            frontMatter.coverImage.startsWith("/")
              ? frontMatter.coverImage
              : `/${frontMatter.coverImage}`
          }`
        : undefined,
      category: frontMatter.category ? [{ name: frontMatter.category }] : [],
    });
  });

  return feed.rss2();
}
