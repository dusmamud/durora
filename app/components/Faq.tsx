"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import FaqAccordion from "./FaqAccordion";
import { HOME_FAQ } from "../data/faq";

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-wine px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-ember">
            FAQ
          </p>
          <h2 className="font-display text-4xl leading-none text-cream sm:text-5xl">
            GOOD TO KNOW
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-8">
          <FaqAccordion items={HOME_FAQ} />
          <p className="mt-6 text-center text-sm text-cream/65">
            More questions?{" "}
            <Link href="/faq" className="font-bold text-glow hover:underline">
              See the full FAQ →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
