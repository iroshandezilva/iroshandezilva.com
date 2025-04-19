import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1 {...props} className="text-3xl font-bold mt-8 mb-4 text-red-300" />
  ),
  h2: (props) => <h2 {...props} className="text-2xl font-semibold mt-6 mb-3" />,
  p: (props) => <p {...props} className="my-4 leading-relaxed text-gray-80" />,
  img: (props) => (
    <img {...props} className="my-6 rounded shadow-md overflow-hidden" />
  ),
  video: (props) => (
    <video {...props} controls className="my-6 rounded w-full" />
  ),
  iframe: (props) => (
    <iframe
      {...props}
      className="my-6 w-full aspect-video rounded shadow-xl border-red-600 h-96"
      allowFullScreen
    />
  ),
};
