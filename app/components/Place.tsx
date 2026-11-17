import Image from "next/image";
import { Bus, MapPin, TrainFront } from "lucide-react";
import Reveal from "./Reveal";

export default function Place() {
  return (
    <section id="place" className="scroll-mt-20 bg-wine-deep px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-center">
        <Reveal>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-ember">
            Place
          </p>
          <h2 className="font-display text-4xl leading-none text-cream sm:text-5xl">
            TEMPELHOFER FELD, BERLIN
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-cream/85">
            Five stages across the wide-open field of the old Tempelhof
            airport — sunset over the runways, the city skyline behind the
            main stage.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-ember" aria-hidden />
              <p className="text-cream/85">
                <span className="font-bold text-cream">Tempelhofer Feld</span>
                <br />
                Tempelhofer Damm, 12101 Berlin, Germany
              </p>
            </li>
            <li className="flex items-start gap-3">
              <TrainFront className="mt-0.5 h-5 w-5 shrink-0 text-ember" aria-hidden />
              <p className="text-cream/85">
                U-Bahn U6 to Paradestraße or Platz der Luftbrücke, then a
                10-minute walk.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Bus className="mt-0.5 h-5 w-5 shrink-0 text-ember" aria-hidden />
              <p className="text-cream/85">
                Night buses run all weekend; bike parking at the north gate.
              </p>
            </li>
          </ul>
          <a
            href="https://maps.google.com/?q=Tempelhofer+Feld+Berlin"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-block rounded-full border border-glow px-6 py-3 text-sm font-bold text-glow transition-colors hover:bg-glow hover:text-wine"
          >
            Open in Google Maps →
          </a>
        </Reveal>

        <Reveal delay={0.1} className="relative min-h-[300px] overflow-hidden rounded-3xl sm:min-h-[420px]">
          <Image
            src="/images/venue.webp"
            alt="Festival site at sunset over Tempelhofer Feld, Berlin"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
