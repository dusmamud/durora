"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2027-08-14T12:00:00+02:00").getTime();

function parts(now: number) {
  const diff = Math.max(0, TARGET - now);
  const totalSecs = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSecs / 86400),
    hours: Math.floor((totalSecs % 86400) / 3600),
    mins: Math.floor((totalSecs % 3600) / 60),
    secs: totalSecs % 60,
  };
}

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "mins", label: "Mins" },
  { key: "secs", label: "Secs" },
] as const;

/**
 * Live countdown to gates opening (Sat 14 Aug 2027, 12:00 CEST).
 * Renders zeros until mounted so server and client HTML match.
 */
export default function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const p = now === null ? { days: 0, hours: 0, mins: 0, secs: 0 } : parts(now);

  return (
    <div
      id="countdown"
      data-countdown
      className="flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-[#160404] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8"
      role="timer"
      aria-label="Countdown to Durora Music Festival 2027"
    >
      <p className="text-center sm:text-left">
        <span className="block text-xs font-extrabold uppercase tracking-[0.3em] text-ember">
          Countdown to the first beat
        </span>
        <span className="mt-1 block text-sm font-semibold text-cream/70">
          Gates open Saturday 14 August 2027 · Berlin
        </span>
      </p>
      <div className="flex items-center justify-center gap-5 sm:gap-7">
        {UNITS.map((u) => (
          <div key={u.key} className="text-center">
            <span className="block font-display text-4xl leading-none text-ember tabular-nums sm:text-5xl">
              {String(p[u.key]).padStart(2, "0")}
            </span>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.25em] text-cream/60">
              {u.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
