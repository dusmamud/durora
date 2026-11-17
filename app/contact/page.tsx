import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import ContactForm, { ContactInfo } from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Durora: email hello@durora.live or use the contact form. Tickets, accessibility, press, partnerships and lost & found.",
};

export default function ContactPage() {
  return (
    <div className="bg-wine pb-20">
      <PageHero
        eyebrow="Contact"
        title="TALK TO US"
        description="Questions about tickets, accessibility, press or anything else? Send a message — the form is a demo with no backend, or email us directly."
        crumb="Contact"
      />
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-2">
            <ContactInfo />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
