import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import JsonLd from "../components/JsonLd";
import LineupIndex from "../components/LineupIndex";
import { ARTISTS } from "../data/artists";
import { lineupItemListJsonLd, musicEventJsonLd } from "../lib/event-jsonld";

export const metadata: Metadata = {
  title: "Lineup",
  description:
    "The Durora 2027 lineup: Sofia Lane headlines Sunday, with Nova Rey, Kairo, Luna Mara, Felix Brandt and Amara Sol across 5 stages in Berlin, 14–16 August.",
};

export default function LineupPage() {
  return (
    <div className="bg-wine pb-20">
      <JsonLd data={musicEventJsonLd(ARTISTS)} />
      <JsonLd data={lineupItemListJsonLd()} />
      <PageHero
        eyebrow="Lineup"
        title="THE LINEUP"
        description="Six acts announced so far — Sofia Lane headlines Sunday night. Filter by day or stage to plan your weekend."
        crumb="Lineup"
      />
      <LineupIndex />
    </div>
  );
}
