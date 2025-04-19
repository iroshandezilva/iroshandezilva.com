"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { mdxComponents } from "@/lib/mdx-components";

interface MdxRendererProps {
  source: MDXRemoteSerializeResult;
}

export default function MdxRenderer({ source }: MdxRendererProps) {
  return <MDXRemote {...source} components={mdxComponents} />;
}
