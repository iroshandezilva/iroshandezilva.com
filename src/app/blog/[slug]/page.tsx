// app/blog/[slug]/page.tsx
import { getPostSlugs, getSerializedPost } from "@/lib/mdx";
import type { Metadata } from "next";
import MdxRenderer from "@/components/MdxRenderer";

// ✅ Statically generate all blog slugs at build time
export async function generateStaticParams() {
	return getPostSlugs().map((slug) => ({
		slug: slug.replace(/\.mdx$/, ""),
	}));
}

// ✅ Dynamically generate metadata
export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const post = await getSerializedPost(params.slug);
	return {
		title: post.title,
	};
}

// ✅ Server Component
export default async function BlogPostPage({
	params,
}: Readonly<{
	params: { slug: string };
}>) {
	const post = await getSerializedPost(params.slug);

	return (
		<article className="prose dark:prose-invert max-w-3xl mx-auto py-12">
			<h1>{post.title}</h1>
			<p className="text-sm text-muted">{post.date}</p>
			{post.tags?.length > 0 && (
				<p className="text-xs">{post.tags.join(", ")}</p>
			)}
			<MdxRenderer source={post.mdxSource} />
		</article>
	);
}
