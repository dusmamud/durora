import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import FaqAccordion from "../components/FaqAccordion";
import { ALL_FAQ } from "../data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Durora 2026 FAQ: dates and place, age policy, food and drink, rain, transport, refunds, camping, accessibility, ticket transfers and contact.",
};

export default function FaqPage() {
  return (
    <div className="bg-wine pb-20">
      <PageHero
        eyebrow="FAQ"
        title="QUESTIONS?"
        description="Dates, place, age rules, food, rain, transport, refunds, camping, accessibility, ticket transfers — the answers in one place."
        crumb="FAQ"
      />
      <section className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <FaqAccordion items={ALL_FAQ} />
          <p className="mt-8 text-center text-sm text-cream/65">
            Still stuck?{" "}
            <Link
              href="/contact"
              className="font-bold text-glow hover:underline"
            >
              Contact us →
            </Link>
          </p>
        </Reveal>
      </section>
    </div>
  );
}
