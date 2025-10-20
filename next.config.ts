import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    // ✅ Add your remote domains here if you load external images
    domains: ["via.placeholder.com"],

    // ✅ Allow SVGs and other formats to work cleanly
    dangerouslyAllowSVG: true,

    // ✅ Set image optimization behavior
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
