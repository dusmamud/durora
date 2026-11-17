"use client";

import Reveal from "./Reveal";
import TicketPicker from "./TicketPicker";

export default function Tickets() {
  return (
    <section id="tickets" className="scroll-mt-20 bg-wine px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-ember">
            Tickets
          </p>
          <h2 className="font-display text-4xl leading-none text-cream sm:text-5xl">
            PICK YOUR WEEKEND
          </h2>
          <p className="mt-3 text-cream/75">
            Demo checkout — no real payment, nothing is booked.
          </p>
        </Reveal>

        <TicketPicker />
      </div>
    </section>
  );
}
