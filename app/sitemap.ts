import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://durora.pages.dev/",
      lastModified: new Date("2026-11-17"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
