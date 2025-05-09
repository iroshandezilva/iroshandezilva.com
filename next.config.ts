import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { remarkPlugins } from "@prose-ui/core";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
  experimental: {
    serverActions: {
      allowedOrigins: ["*"],
    },
  },
  images: {
    domains: ["images.unsplash.com"],
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: remarkPlugins(),
  },
});

export default withMDX(nextConfig);
