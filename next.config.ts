import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],

    dangerouslyAllowSVG: true,

    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
