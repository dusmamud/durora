"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Reveal from "./Reveal";
import { SCHEDULE_DAYS, STAGES } from "../data/schedule";

/** Full timetable with day tabs and a stage filter.
 * Reads from the same SCHEDULE_DAYS data as the home Schedule section. */
export default function ScheduleTable() {
  const [dayId, setDayId] = useState<string>("sun");
  const [stage, setStage] = useState<string>("All");

  const day = SCHEDULE_DAYS.find((d) => d.id === dayId) ?? SCHEDULE_DAYS[0];

  const sets = useMemo(() => {
    if (stage === "All") return day.sets;
    return day.sets.filter(
      (s) => s.stage === stage || s.stage === "All stages",
    );
  }, [day, stage]);

  const pill = (active: boolean) =>
    `whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition-colors ${
      active
        ? "bg-ember-btn text-white"
        : "border border-white/20 text-cream/80 hover:border-glow hover:text-glow"
    }`;

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <Reveal>
        <div
          className="flex gap-2 overflow-x-auto pb-1"
          role="tablist"
          aria-label="Festival days"
        >
          {SCHEDULE_DAYS.map((d) => (
            <button
              key={d.id}
              type="button"
              role="tab"
              aria-selected={dayId === d.id}
              onClick={() => setDayId(d.id)}
              className={pill(dayId === d.id)}
            >
              Day {d.id === "sat" ? "1" : d.id === "sun" ? "2" : "3"} —{" "}
              {d.label}
            </button>
          ))}
        </div>
        <div
          className="mt-3 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter by stage"
        >
          {["All", ...STAGES].map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={stage === s}
              onClick={() => setStage(s)}
              className={pill(stage === s)}
            >
              {s === "All" ? "All stages" : s}
            </button>
          ))}
        </div>
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.ul
          key={`${day.id}-${stage}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="mt-6 divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.03]"
        >
          {sets.length === 0 ? (
            <li className="px-5 py-8 text-center text-cream/70">
              No sets on this stage on {day.label} yet — the full timetable
              is published one week before the festival.
            </li>
          ) : (
            sets.map((s) => (
              <li
                key={`${s.time}-${s.artist}`}
                className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:gap-6 sm:px-7"
              >
                <span className="w-16 shrink-0 font-display text-xl text-glow">
                  {s.time}
                </span>
                <span className="flex-1 text-base font-semibold text-cream">
                  {s.artist}
                </span>
                <span className="text-sm text-cream/60">{s.stage}</span>
              </li>
            ))
          )}
        </motion.ul>
      </AnimatePresence>
      <p className="mt-4 text-sm text-cream/55">
        Times are indicative — the full timetable is published one week before
        the festival. Gates open at noon each day; music runs until 23:00.
      </p>
    </section>
  );
}
