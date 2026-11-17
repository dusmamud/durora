import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import LineupIndex from "../components/LineupIndex";
import { ARTISTS } from "../data/artists";

export const metadata: Metadata = {
  title: "Lineup",
  description:
    "The Durora 2026 lineup: Sofia Lane headlines Saturday, with Nova Rey, Kairo, Luna Mara, Felix Brandt and Amara Sol across 5 stages in Berlin, 14–16 August.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Durora 2026 lineup",
  itemListElement: ARTISTS.map((a, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "MusicGroup",
      name: a.name,
      genre: a.genre,
      url: `https://durora.pages.dev/lineup/${a.slug}`,
    },
  })),
};

export default function LineupPage() {
  return (
    <div className="bg-wine pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="Lineup"
        title="THE LINEUP"
        description="Six acts announced so far — Sofia Lane headlines Saturday night. Filter by day or stage to plan your weekend."
        crumb="Lineup"
      />
      <LineupIndex />
    </div>
  );
}
