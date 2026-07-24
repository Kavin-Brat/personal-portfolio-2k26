import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Configured for standard dynamic Vercel deployment with image optimization */
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
