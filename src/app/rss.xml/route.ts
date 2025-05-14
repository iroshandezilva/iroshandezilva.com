import { generateRssFeed } from "@/lib/rss";

export const dynamic = "force-dynamic"; // Ensure the RSS feed is always up-to-date

export async function GET() {
  const rssXml = generateRssFeed();

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
