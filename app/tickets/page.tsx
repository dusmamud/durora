import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import TicketPicker from "../components/TicketPicker";

export const metadata: Metadata = {
  title: "Tickets",
  description:
    "Durora 2027 tickets: Day Pass €69, Weekend Pass €149, VIP €249. Berlin, 14–16 August. Demo checkout — no real payment, nothing is booked.",
};

export default function TicketsPage() {
  return (
    <div className="bg-wine pb-20">
      <PageHero
        eyebrow="Tickets"
        title="GET YOUR TICKETS"
        description="Day Pass €69, Weekend Pass €149, VIP €249. Pick your tier, set your quantity, and reserve — demo checkout, no real payment and nothing is booked."
        crumb="Tickets"
      />
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <TicketPicker />
        <Reveal className="mt-10">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="font-display text-xl text-cream">REFUNDS</h2>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                Refunds are available until 31 July 2027. Tickets are
                transferable to another person up to 7 days before the
                festival.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="font-display text-xl text-cream">AT THE GATE</h2>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                Bring the ticket (phone or printout) and a photo ID matching
                the name on it. Gates open at noon each day.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="font-display text-xl text-cream">UNDER-16S</h2>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                Under-16s need to be accompanied by an adult after 20:00.
                See the{" "}
                <Link href="/info" className="font-bold text-glow hover:underline">
                  practical info
                </Link>{" "}
                page for the full age policy.
              </p>
            </div>
          </div>
          <p className="mt-6 rounded-2xl border border-ember/40 bg-ember/10 p-4 text-center text-sm font-semibold text-cream">
            Demo checkout — this page takes no payment and books nothing.
            When real tickets go on sale, this page is where they will be.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
