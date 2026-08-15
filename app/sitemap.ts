import { MetadataRoute } from "next";

const siteUrl = "https://portfolio-nextjs-shiva-subramaniyam-s.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
