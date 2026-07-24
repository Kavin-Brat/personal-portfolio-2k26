import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Configured for standard dynamic Vercel deployment with image optimization */
  images: {
    formats: ["image/avif", "image/webp"],
  },
  env: {
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: "service_spxi6ot",
    NEXT_PUBLIC_EMAILJS_NOTIFICATION_TEMPLATE_ID: "template_wbkmonl",
    NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID: "template_j3662df",
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: "40LAi58BPquc6anU_",
  },
};

export default nextConfig;
