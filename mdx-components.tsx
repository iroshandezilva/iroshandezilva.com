import { mdxComponents } from "@prose-ui/next";
import type { MDXComponents } from "mdx/types";
import { Figure } from "./src/components/ui/figure";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...mdxComponents,
    // You can override the Frame component from @prose-ui/next with your own Figure component
    Frame: ({
      caption,
      children,
      align,
    }: {
      caption?: string;
      children?: React.ReactNode;
      align?: "left" | "center" | "right";
    }) => (
      <Figure caption={caption} align={align || "left"}>
        {children}
      </Figure>
    ),
    // Alternatively, you can make both components available
    Figure,
  };
}
