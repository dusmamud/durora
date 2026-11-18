import type { MetadataRoute } from "next";
import { ARTISTS } from "./data/artists";

export const dynamic = "force-static";

const BASE = "https://durora.pages.dev";
const LAST_MODIFIED = new Date(); // build date

const ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/lineup", priority: 0.9 },
  ...ARTISTS.map((a) => ({ path: `/lineup/${a.slug}`, priority: 0.8 })),
  { path: "/schedule", priority: 0.9 },
  { path: "/tickets", priority: 0.9 },
  { path: "/venue", priority: 0.8 },
  { path: "/gallery", priority: 0.7 },
  { path: "/info", priority: 0.8 },
  { path: "/faq", priority: 0.8 },
  { path: "/contact", priority: 0.7 },
  { path: "/terms", priority: 0.5 },
  { path: "/privacy", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: r.priority,
  }));
}
