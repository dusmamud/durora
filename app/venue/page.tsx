import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Bus, MapPin, Tent, TrainFront, Bike, Clock } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Venue",
  description:
    "Durora 2027 takes place at Tempelhofer Feld, Berlin — a former airfield turned open park. How to get there, gates, entry and the no-camping note.",
};

const TRANSPORT = [
  {
    icon: TrainFront,
    title: "U-Bahn — U6",
    text: "Paradestraße or Platz der Luftbrücke, both a short walk from the gates. Extra trains run all weekend.",
  },
  {
    icon: Bus,
    title: "Bus & night bus",
    text: "Day buses stop at Tempelhofer Damm and Columbiadamm; night buses run all weekend after the U-Bahn closes.",
  },
  {
    icon: Bike,
    title: "Bike",
    text: "Bike parking at the north gate. The field is flat and the ride from central Berlin takes about 20 minutes.",
  },
  {
    icon: MapPin,
    title: "On foot",
    text: "Tempelhofer Feld is a huge open park — wear comfortable shoes and allow 10–15 minutes from the nearest station.",
  },
];

export default function VenuePage() {
  return (
    <div className="bg-wine pb-20">
      <PageHero
        eyebrow="Venue"
        title="TEMPELHOFER FELD"
        description="A former airfield turned into Berlin's biggest open park — wide skies, flat ground, and five stages under them. 14–16 August 2027."
        crumb="Venue"
      />
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
            <Image
              src="/images/venue.webp"
              alt="Tempelhofer Feld, the Durora festival site in Berlin"
              fill
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="object-cover"
              priority
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Tempelhofer+Feld+Berlin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-ember-deep"
            >
              <MapPin className="h-4 w-4" aria-hidden />
              Open in Google Maps
            </a>
            <span className="text-sm text-cream/60">
              Tempelhofer Feld, 12101 Berlin, Germany
            </span>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <h2 className="font-display text-3xl text-cream sm:text-4xl">
            GETTING THERE
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {TRANSPORT.map((t) => (
              <div
                key={t.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <t.icon className="h-6 w-6 text-ember" aria-hidden />
                <h3 className="mt-3 font-display text-xl text-cream">
                  {t.title.toUpperCase()}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <Clock className="h-6 w-6 text-ember" aria-hidden />
              <h2 className="mt-3 font-display text-xl text-cream">
                GATES &amp; ENTRY
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                Gates open at noon each day; music runs until 23:00. Bring
                your ticket and a photo ID matching the name on it. Bag
                checks at every gate — travel light.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <Tent className="h-6 w-6 text-ember" aria-hidden />
              <h2 className="mt-3 font-display text-xl text-cream">
                NO CAMPING ON SITE
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                Durora is a day festival — there is no camping at
                Tempelhofer Feld and gates close at 23:00 each night. Berlin
                has plenty of hotels and hostels nearby.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <MapPin className="h-6 w-6 text-ember" aria-hidden />
              <h2 className="mt-3 font-display text-xl text-cream">
                THE SITE
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                Five stages, art installations, a food court, free drinking
                water and accessible viewing platforms. The field is flat,
                open ground — bring sun protection and a rain layer.
              </p>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-cream/65">
            More practical details — food, what to bring, accessibility — on
            the{" "}
            <Link href="/info" className="font-bold text-glow hover:underline">
              info page →
            </Link>
          </p>
        </Reveal>
      </section>
    </div>
  );
}
