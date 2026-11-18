"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { ARTISTS } from "../data/artists";
import { STAGES } from "../data/schedule";

const DAYS = ["All", "Sat", "Sun", "Mon"] as const;

export default function LineupIndex() {
  const [day, setDay] = useState<(typeof DAYS)[number]>("All");
  const [stage, setStage] = useState<string>("All");

  const filtered = useMemo(
    () =>
      ARTISTS.filter(
        (a) =>
          (day === "All" || a.day.startsWith(day)) &&
          (stage === "All" || a.stage === stage),
      ),
    [day, stage],
  );

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
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter by day"
        >
          {DAYS.map((d) => (
            <button
              key={d}
              type="button"
              aria-pressed={day === d}
              onClick={() => setDay(d)}
              className={pill(day === d)}
            >
              {d === "All" ? "All days" : d}
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

      {filtered.length === 0 ? (
        <p className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center text-cream/70">
          No acts on that stage that day yet — the full lineup drops soon.
        </p>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a, i) => (
            <Reveal key={a.slug} delay={0.05 * (i % 3)} className="h-full">
              <Link href={`/lineup/${a.slug}`} className="block h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition-all duration-500 hover:-translate-y-1 hover:border-ember/60 hover:shadow-2xl hover:shadow-black/50">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={a.portrait}
                      alt={`${a.name} — ${a.genre}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    {a.headliner && (
                      <span className="absolute left-4 top-4 rounded-full bg-ember-btn px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white">
                        Headliner
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-2xl tracking-wide text-cream">
                      {a.name.toUpperCase()}
                    </h2>
                    <p className="mt-1 text-sm font-semibold text-glow">
                      {a.genre}
                    </p>
                    <p className="mt-3 text-sm text-cream/65">
                      {a.day} · {a.stage} · {a.time}
                    </p>
                    <p className="mt-3 line-clamp-2 text-sm text-cream/60">
                      {a.bio}
                    </p>
                    <span className="mt-4 text-sm font-bold text-ember">
                      View artist →
                    </span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      )}

      <p className="mt-10 text-center text-sm text-cream/55">
        60+ artists across 5 stages — more names announced soon.
      </p>
    </section>
  );
}
