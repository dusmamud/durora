import type { Metadata } from "next";
import Link from "next/link";
import {
  Accessibility,
  Backpack,
  Ban,
  Bus,
  CreditCard,
  ShieldAlert,
  UtensilsCrossed,
  Users,
} from "lucide-react";
import PageHero from "../components/PageHero";
import JsonLd from "../components/JsonLd";
import Reveal from "../components/Reveal";
import { ARTISTS } from "../data/artists";
import { musicEventJsonLd } from "../lib/event-jsonld";

export const metadata: Metadata = {
  title: "Practical Info",
  description:
    "Practical info for Durora 2027: getting there, food & drink, what to bring, what is not allowed, accessibility, age policy, cashless payment and safety.",
};

const SECTIONS = [
  {
    icon: Bus,
    title: "Getting there",
    body: "U6 to Paradestraße or Platz der Luftbrücke, night buses all weekend, bike parking at the north gate. Full transport details on the venue page.",
    link: { label: "Venue & transport →", href: "/venue" },
  },
  {
    icon: UtensilsCrossed,
    title: "Food & drink",
    body: "Over 30 food stalls including vegan, vegetarian and gluten-free options, plus bars, coffee and free drinking-water points. Sealed water bottles (up to 0.5 l) may be brought in; outside alcohol is not permitted.",
  },
  {
    icon: Backpack,
    title: "What to bring",
    body: "Ticket + photo ID, sun protection, a rain layer, a charged phone, and a reusable bottle. Small bags only — bag checks at every gate.",
  },
  {
    icon: Ban,
    title: "Not allowed",
    body: "Outside alcohol, glass bottles, professional cameras and recording equipment, drones, fireworks, and any weapon. Security may refuse entry to anyone carrying prohibited items.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    body: "Tempelhofer Feld is flat, open ground. Accessible viewing platforms at the Aurora and Sunset stages, step-free entry lanes, accessible toilets and a dedicated assistance team. Email us in advance to reserve a platform spot.",
  },
  {
    icon: Users,
    title: "Age policy",
    body: "All ages are welcome. Under-16s must be accompanied by an adult after 20:00. Under-18s cannot buy alcohol on site.",
  },
  {
    icon: CreditCard,
    title: "Cashless payment",
    body: "Durora is cashless — cards and phone payments work at every bar, food stall and merch stand. Bring a charged phone or a card; cash is not accepted on site.",
  },
  {
    icon: ShieldAlert,
    title: "Safety & lost & found",
    body: "First aid points at the main gate and beside the Aurora Stage. Lost property goes to the info point at the main gate; after the festival, email hello@durora.live with a description. In an emergency, follow staff directions and the marked exit routes.",
  },
];

export default function InfoPage() {
  return (
    <div className="bg-wine pb-20">
      <JsonLd data={musicEventJsonLd(ARTISTS)} />
      <PageHero
        eyebrow="Practical info"
        title="GOOD TO KNOW"
        description="Everything you need for the weekend — getting there, food, what to bring, accessibility, age rules, cashless payment and safety."
        crumb="Info"
      />
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {SECTIONS.map((s, i) => (
            <Reveal key={s.title} delay={0.05 * (i % 2)}>
              <article className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7">
                <s.icon className="h-6 w-6 text-ember" aria-hidden />
                <h2 className="mt-3 font-display text-2xl text-cream">
                  {s.title.toUpperCase()}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-cream/75">
                  {s.body}
                </p>
                {s.link && (
                  <Link
                    href={s.link.href}
                    className="mt-3 inline-block text-sm font-bold text-glow hover:underline"
                  >
                    {s.link.label}
                  </Link>
                )}
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-cream/65">
          Still unsure?{" "}
          <Link href="/faq" className="font-bold text-glow hover:underline">
            Read the FAQ
          </Link>{" "}
          or{" "}
          <Link
            href="/contact"
            className="font-bold text-glow hover:underline"
          >
            contact us
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
