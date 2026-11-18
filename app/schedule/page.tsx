import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import JsonLd from "../components/JsonLd";
import ScheduleTable from "../components/ScheduleTable";
import { ARTISTS } from "../data/artists";
import { musicEventJsonLd } from "../lib/event-jsonld";

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "The full Durora 2027 timetable: day-by-day sets across 5 stages at Tempelhofer Feld, Berlin, 14–16 August. Filter by day or stage.",
};

export default function SchedulePage() {
  return (
    <div className="bg-wine pb-20">
      <JsonLd data={musicEventJsonLd(ARTISTS)} />
      <PageHero
        eyebrow="Schedule"
        title="TIMETABLE"
        description="Every set, every stage, all three days. Filter by day or stage to plan your weekend — times are indicative until the final timetable lands one week before the festival."
        crumb="Schedule"
      />
      <ScheduleTable />
    </div>
  );
}
