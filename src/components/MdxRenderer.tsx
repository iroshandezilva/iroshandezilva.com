"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface MdxRendererProps {
	source: MDXRemoteSerializeResult;
}

export default function MdxRenderer({ source }: MdxRendererProps) {
	return <MDXRemote {...source} components={{}} />;
}
