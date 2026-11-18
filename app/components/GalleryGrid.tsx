"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import Reveal from "./Reveal";

/** Gallery photos. `full` is the full-size file the lightbox loads;
 * thumbnails use the resized `src` (1024w). crowd/venue have no separate
 * full file — their resized files are already wide enough for the lightbox. */
const PHOTOS: { src: string; full?: string; alt: string; caption: string }[] = [
  { src: "/images/gallery-night-crowd.webp", full: "/images/full/gallery-night-crowd.webp", alt: "Night crowd under the lights at Durora", caption: "Night crowd — Durora Stage" },
  { src: "/images/gallery-daytime-crowd.webp", full: "/images/full/gallery-daytime-crowd.webp", alt: "Daytime crowd dancing at Durora", caption: "Daytime crowd" },
  { src: "/images/gallery-stage-closeup.webp", full: "/images/full/gallery-stage-closeup.webp", alt: "Close-up of a Durora stage at night", caption: "Stage close-up" },
  { src: "/images/gallery-ferris-sunset.webp", full: "/images/full/gallery-ferris-sunset.webp", alt: "Ferris wheel at sunset over the festival", caption: "Sunset over the field" },
  { src: "/images/crowd.webp", alt: "Festival crowd with hands in the air", caption: "The crowd" },
  { src: "/images/venue.webp", alt: "Tempelhofer Feld, the Durora festival site", caption: "Tempelhofer Feld" },
];

export default function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight")
        setActive((i) => (i === null ? null : (i + 1) % PHOTOS.length));
      if (e.key === "ArrowLeft")
        setActive((i) =>
          i === null ? null : (i - 1 + PHOTOS.length) % PHOTOS.length,
        );
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOS.map((p, i) => (
            <Reveal key={p.src} delay={0.05 * (i % 3)} className="h-full">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Enlarge photo: ${p.caption}`}
                className="group block h-full w-full overflow-hidden rounded-3xl border border-white/10 text-left transition-all duration-500 hover:-translate-y-1 hover:border-ember/60"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    fetchPriority={i === 0 ? "high" : "auto"}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="bg-white/[0.04] px-5 py-3 text-sm font-semibold text-cream/85">
                  {p.caption}
                </p>
              </button>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-cream/55">
          Photos from the Durora site and previous weekends — click any photo
          to enlarge.
        </p>
      </section>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={PHOTOS[active].alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close photo"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-cream transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" aria-hidden />
          </button>
          <figure
            className="relative max-h-[85vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] max-h-[78vh] w-full overflow-hidden rounded-3xl">
              <Image
                src={PHOTOS[active].full ?? PHOTOS[active].src}
                alt={PHOTOS[active].alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm font-semibold text-cream/85">
              {PHOTOS[active].caption} — {active + 1} of {PHOTOS.length}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
