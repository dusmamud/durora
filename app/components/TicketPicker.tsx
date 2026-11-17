"use client";

import { useMemo, useState } from "react";
import { Check, Minus, Plus, Ticket } from "lucide-react";
import Reveal from "./Reveal";
import {
  MAX_TICKETS_PER_TIER,
  TICKET_TIERS,
  type TierId,
} from "../data/tickets";

/** Shared ticket picker: tier cards, quantity steppers, live total and
 * demo confirmation. Used by the home Tickets section and the /tickets
 * page — one implementation, no duplicated logic. */
export default function TicketPicker() {
  const [qty, setQty] = useState<Record<TierId, number>>({
    day: 0,
    weekend: 2,
    vip: 0,
  });
  const [confirmed, setConfirmed] = useState<string | null>(null);

  const total = useMemo(
    () => TICKET_TIERS.reduce((sum, t) => sum + qty[t.id] * t.price, 0),
    [qty],
  );
  const count = useMemo(
    () => Object.values(qty).reduce((a, b) => a + b, 0),
    [qty],
  );

  const set = (id: TierId, next: number) =>
    setQty((q) => ({
      ...q,
      [id]: Math.max(0, Math.min(MAX_TICKETS_PER_TIER, next)),
    }));

  const confirm = () => {
    if (count === 0) return;
    setConfirmed(
      `DUR-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
    );
  };

  return (
    <>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {TICKET_TIERS.map((t, i) => (
          <Reveal key={t.id} delay={0.05 * i} className="h-full">
            <article
              className={`flex h-full flex-col rounded-3xl p-7 ${
                t.featured
                  ? "border-2 border-ember bg-gradient-to-b from-wine-soft to-wine-deep"
                  : "border border-white/10 bg-white/[0.04]"
              }`}
            >
              {t.featured && (
                <span className="mb-3 w-fit rounded-full bg-ember px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-3xl text-cream">{t.name}</h3>
              <p className="mt-1 text-cream/70">{t.blurb}</p>
              <p className="mt-4">
                <span className="font-display text-5xl text-cream">
                  €{t.price}
                </span>
                <span className="ml-1 text-sm text-cream/60">/ person</span>
              </p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-cream/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between rounded-full border border-white/15 px-2 py-1.5">
                <button
                  type="button"
                  onClick={() => set(t.id, qty[t.id] - 1)}
                  disabled={qty[t.id] === 0}
                  aria-label={`Remove one ${t.name}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-cream transition-colors hover:bg-white/10 disabled:opacity-30"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-base font-bold text-cream" aria-live="polite">
                  {qty[t.id]} × €{t.price}
                </span>
                <button
                  type="button"
                  onClick={() => set(t.id, qty[t.id] + 1)}
                  disabled={qty[t.id] >= MAX_TICKETS_PER_TIER}
                  aria-label={`Add one ${t.name}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-cream transition-colors hover:bg-white/10 disabled:opacity-30"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-3xl bg-cream p-6 text-wine sm:flex-row">
          <p className="text-center sm:text-left">
            <span className="block text-sm font-semibold text-wine/60">
              {count === 0
                ? "No tickets selected yet"
                : `${count} ticket${count > 1 ? "s" : ""} selected`}
            </span>
            <span className="font-display text-4xl">Total €{total}</span>
          </p>
          <button
            type="button"
            onClick={confirm}
            disabled={count === 0}
            className="inline-flex items-center gap-2 rounded-full bg-ember px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Ticket className="h-4 w-4" aria-hidden />
            {confirmed ? "Booked (demo)" : "Reserve tickets"}
          </button>
        </div>
        {confirmed && (
          <p className="mt-4 rounded-2xl border border-ember/40 bg-ember/10 p-4 text-center text-sm font-semibold text-cream">
            Demo confirmation — reference {confirmed}. No payment was taken
            and nothing was booked. We&apos;ll see you in Berlin!
          </p>
        )}
      </Reveal>
    </>
  );
}
