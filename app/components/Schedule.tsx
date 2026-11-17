"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Reveal from "./Reveal";
import { SCHEDULE_DAYS } from "../data/schedule";

export default function Schedule() {
  const [active, setActive] = useState<string>("sat");
  const day = SCHEDULE_DAYS.find((d) => d.id === active) ?? SCHEDULE_DAYS[0];

  return (
    <section id="schedule" className="scroll-mt-20 bg-wine-deep px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-ember">
            Schedule
          </p>
          <h2 className="font-display text-4xl leading-none text-cream sm:text-5xl">
            WHEN &amp; WHERE
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Festival days">
            {SCHEDULE_DAYS.map((d) => (
              <button
                key={d.id}
                type="button"
                role="tab"
                aria-selected={active === d.id}
                onClick={() => setActive(d.id)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                  active === d.id
                    ? "bg-ember text-white"
                    : "border border-white/20 text-cream/80 hover:border-glow hover:text-glow"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.ul
              key={day.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="mt-6 divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.03]"
            >
              {day.sets.map((s) => (
                <li key={`${s.time}-${s.artist}`} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:gap-6 sm:px-7">
                  <span className="w-16 shrink-0 font-display text-xl text-glow">
                    {s.time}
                  </span>
                  <span className="flex-1 text-base font-semibold text-cream">
                    {s.artist}
                  </span>
                  <span className="text-sm text-cream/60">{s.stage}</span>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
          <p className="mt-4 text-sm text-cream/55">
            Times are indicative — the full timetable is published one week
            before the festival.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
