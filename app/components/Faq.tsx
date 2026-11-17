"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

const QA = [
  {
    q: "When and where is Durora 2026?",
    a: "14–16 August 2026 at Tempelhofer Feld, Berlin. Gates open at noon each day; music runs until 23:00.",
  },
  {
    q: "Is there an age limit?",
    a: "All ages are welcome. Under-16s need to be accompanied by an adult after 20:00.",
  },
  {
    q: "Can I bring food and drinks?",
    a: "Sealed water bottles are allowed. Food stalls and bars are on site — outside alcohol is not permitted.",
  },
  {
    q: "What if it rains?",
    a: "Durora is an open-air festival and runs rain or shine. Covered areas and ponchos are available on site.",
  },
  {
    q: "How do I get there?",
    a: "Take the U6 to Paradestraße or Platz der Luftbrücke. Night buses run all weekend and there is bike parking at the north gate.",
  },
  {
    q: "Can I get a refund if I can't come?",
    a: "Tickets are transferable to another person up to 7 days before the festival. Refunds are available until 31 July 2026.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

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

        <Reveal delay={0.1} className="mt-8 space-y-3">
          {QA.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-base font-bold text-cream">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-ember transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <p className="px-5 pb-5 text-cream/75">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
