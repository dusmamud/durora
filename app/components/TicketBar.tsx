"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Magnetic from "./Magnetic";

/**
 * Sticky ticket bar. Fixed positioning (no layout shift): it slides in with
 * transform/opacity only after the hero has scrolled out of view, and is
 * pointer-events-none while hidden.
 */
export default function TicketBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      data-ticket-bar
      aria-hidden={!visible}
      className={`fixed inset-x-3 bottom-3 z-40 transition-all duration-500 ease-out sm:inset-x-6 sm:bottom-4 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-24 opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 rounded-full border border-white/10 bg-[#2a0a0a]/95 py-2 pl-5 pr-2 shadow-2xl shadow-black/60 backdrop-blur-md sm:pl-6">
        <p className="min-w-0 truncate text-xs font-bold text-cream sm:text-sm">
          Durora — 14–16 Aug 2026 · Berlin
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <span className="text-xs font-bold text-glow sm:text-sm">
            From €69
          </span>
          <Magnetic strength={0.25}>
            <Link
              href="#tickets"
              tabIndex={visible ? 0 : -1}
              className="inline-block rounded-full bg-ember px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-white transition-colors hover:bg-ember-deep sm:px-5 sm:text-sm"
            >
              Get Tickets
            </Link>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}
