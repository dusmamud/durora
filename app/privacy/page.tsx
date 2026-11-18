import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Durora privacy policy: what data this demo site collects — essentially none beyond what you type into its client-side forms, which never leaves your browser.",
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

export default function PrivacyPage() {
  return (
    <div className="bg-wine pb-20">
      <PageHero
        eyebrow="Privacy"
        title="PRIVACY POLICY"
        description="What this demo site collects — essentially nothing. Last updated 18 November 2026."
        crumb="Privacy"
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <Section title="1. What we collect">
            <p>
              This is a static demonstration website. It has no backend, no
              accounts, no analytics and no tracking cookies. We do not
              collect, store or share personal data on any server.
            </p>
            <p>
              The only places you can enter information are the contact form,
              the newsletter signup and the demo ticket picker. Everything
              you type there stays in your own browser — it is never sent
              anywhere, because there is nowhere to send it to.
            </p>
          </Section>

          <Section title="2. Local storage">
            <p>
              The demo ticket picker keeps your selected quantities in your
              browser only, for the current visit. Nothing is uploaded or
              shared. Clearing your browser data removes it.
            </p>
          </Section>

          <Section title="3. Links to other sites">
            <p>
              This site links to Google Maps for directions. If you follow
              that link, Google&apos;s own privacy policy applies to what
              happens there.
            </p>
          </Section>

          <Section title="4. When real ticket sales open">
            <p>
              When real tickets go on sale, this policy will be updated to
              describe what the ticket provider collects (name, email,
              payment details), why, and how long it is kept. Until then,
              the honest answer is: we collect nothing.
            </p>
          </Section>

          <Section title="5. Contact">
            <p>
              Privacy questions: email{" "}
              <a href="mailto:hello@durora.live" className="font-bold text-glow hover:underline">
                hello@durora.live
              </a>{" "}
              (placeholder address for the demo site).
            </p>
          </Section>
        </Reveal>
      </div>
    </div>
  );
}
