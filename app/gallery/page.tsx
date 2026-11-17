import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import GalleryGrid from "../components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Durora: night crowds, daytime dancing, the stages at sunset and Tempelhofer Feld in Berlin.",
};

export default function GalleryPage() {
  return (
    <div className="bg-wine pb-20">
      <PageHero
        eyebrow="Gallery"
        title="IN PICTURES"
        description="Night crowds, daytime dancing, stages at sunset and the wide open field. Click any photo to enlarge it."
        crumb="Gallery"
      />
      <GalleryGrid />
    </div>
  );
}
