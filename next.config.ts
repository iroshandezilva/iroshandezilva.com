import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
  serverActions: true,
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
