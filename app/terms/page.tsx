import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Durora 2027 ticket terms: demo purchases, refunds and transfers, age and entry rules, and what happens if the festival is cancelled or rescheduled.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="font-display text-2xl text-cream">{title}</h2>
      <div className="mt-2 space-y-3 text-sm leading-relaxed text-cream/75">
        {children}
      </div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <div className="bg-wine pb-20">
      <PageHero
        eyebrow="Terms"
        title="TERMS & CONDITIONS"
        description="The rules for Durora 2027 tickets and entry. Last updated 18 November 2026."
        crumb="Terms"
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <p className="rounded-2xl border border-ember/40 bg-ember/10 p-4 text-sm font-semibold text-cream">
            Demo-purchase note: this website is a demonstration. Ticket
            reservations made here take no payment, book nothing, and create
            no contract. These terms describe how real ticket sales will
            work when they open.
          </p>

          <Section title="1. Tickets">
            <p>
              Tickets are sold as Day Pass (€69), Weekend Pass (€149) and VIP
              (€249), per person, in EUR. Prices include VAT. A ticket admits
              one person; re-entry on the same day is allowed with a valid
              wristband.
            </p>
            <p>
              The name on the ticket must match a photo ID shown at the gate.
              Tickets are transferable to another person free of charge up to
              7 days before the festival (7 August 2027).
            </p>
          </Section>

          <Section title="2. Refunds">
            <p>
              Refunds are available until 31 July 2027. After that date,
              tickets are non-refundable except as described below. Refund
              requests go to{" "}
              <a href="mailto:hello@durora.live" className="font-bold text-glow hover:underline">
                hello@durora.live
              </a>
              .
            </p>
            <p>
              If Durora 2027 is cancelled, all ticket holders receive a full
              refund. If the festival is rescheduled, tickets remain valid
              for the new dates, or a refund may be requested within 30 days
              of the announcement.
            </p>
          </Section>

          <Section title="3. Age and entry">
            <p>
              All ages are welcome. Under-16s must be accompanied by an
              adult after 20:00. Under-18s cannot buy alcohol on site.
              Security may refuse entry to anyone who is intoxicated,
              aggressive, or carrying prohibited items.
            </p>
          </Section>

          <Section title="4. Entry rules">
            <p>
              Gates open at noon each day; music runs until 23:00 and gates
              close at 23:00. There is no camping on site. Bag checks apply
              at every gate. Outside alcohol, glass bottles, drones,
              fireworks and weapons are not allowed.
            </p>
            <p>
              The festival is open-air and runs rain or shine. The lineup
              and timetable may change; no refund is due for a change of
              artist or stage.
            </p>
          </Section>

          <Section title="5. Liability">
            <p>
              Attendance is at your own risk. Durora is not liable for loss
              or damage to personal belongings, or for injury arising from
              failure to follow staff instructions. First aid is available
              on site.
            </p>
          </Section>

          <Section title="6. Contact">
            <p>
              Questions about these terms: email{" "}
              <a href="mailto:hello@durora.live" className="font-bold text-glow hover:underline">
                hello@durora.live
              </a>{" "}
              or use the{" "}
              <Link href="/contact" className="font-bold text-glow hover:underline">
                contact form
              </Link>
              .
            </p>
          </Section>
        </Reveal>
      </div>
    </div>
  );
}
