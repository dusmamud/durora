"use client";

import { useState } from "react";
import { CheckCircle2, Mail } from "lucide-react";
import Reveal from "./Reveal";

const TOPICS = [
  "General question",
  "Tickets",
  "Accessibility",
  "Press & media",
  "Partnerships",
  "Lost & found",
] as const;

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<string>(TOPICS[0]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = "Please enter a valid email address.";
    if (message.trim().length < 10)
      next.message = "Please write a message of at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-3xl border border-ember/40 bg-ember/10 p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-ember" aria-hidden />
        <h2 className="mt-4 font-display text-3xl text-cream">
          MESSAGE RECEIVED
        </h2>
        <p className="mx-auto mt-2 max-w-md text-cream/75">
          Thanks, {name.trim()} — your message about “{topic}” is noted.
          This is a demo form: nothing was sent anywhere. For a real reply,
          email{" "}
          <a
            href="mailto:hello@durora.live"
            className="font-bold text-glow hover:underline"
          >
            hello@durora.live
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setName("");
            setEmail("");
            setTopic(TOPICS[0]);
            setMessage("");
            setErrors({});
          }}
          className="mt-6 rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold text-cream transition-colors hover:border-glow hover:text-glow"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-2xl border border-white/15 bg-white/[0.05] px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-ember focus:outline-none";

  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-sm font-bold text-cream">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className={inputCls}
        />
        {errors.name && <p className="mt-1.5 text-sm text-ember">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm font-bold text-cream">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={inputCls}
        />
        {errors.email && <p className="mt-1.5 text-sm text-ember">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="contact-topic" className="mb-1.5 block text-sm font-bold text-cream">
          Topic
        </label>
        <select
          id="contact-topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className={`${inputCls} appearance-none`}
        >
          {TOPICS.map((t) => (
            <option key={t} value={t} className="bg-wine text-cream">
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-bold text-cream">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can we help?"
          className={`${inputCls} resize-y`}
        />
        {errors.message && <p className="mt-1.5 text-sm text-ember">{errors.message}</p>}
      </div>
      <button
        type="submit"
        className="rounded-full bg-ember-btn px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white transition-transform hover:scale-[1.03]"
      >
        Send message
      </button>
      <p className="text-xs text-cream/50">
        Demo form — no backend. Your message stays in your browser and is
        not sent anywhere.
      </p>
    </form>
  );
}

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <Mail className="h-6 w-6 text-ember" aria-hidden />
        <h2 className="mt-3 font-display text-xl text-cream">EMAIL</h2>
        <p className="mt-2 text-sm leading-relaxed text-cream/70">
          <a
            href="mailto:hello@durora.live"
            className="font-bold text-glow hover:underline"
          >
            hello@durora.live
          </a>
          <span className="mt-1 block text-xs text-cream/50">
            Placeholder address for the demo site — not a monitored inbox
            yet.
          </span>
        </p>
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <h2 className="font-display text-xl text-cream">SOCIAL</h2>
        <p className="mt-2 text-sm leading-relaxed text-cream/70">
          Find Durora on Instagram, X and YouTube — search “Durora Festival”
          once the official accounts go live.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {["Instagram", "X", "YouTube"].map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/15 px-4 py-1.5 text-sm font-semibold text-cream/80"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
        <h2 className="font-display text-xl text-cream">ON SITE</h2>
        <p className="mt-2 text-sm leading-relaxed text-cream/70">
          During the festival weekend, the info point at the main gate can
          help with anything on site — tickets, lost property, accessibility.
        </p>
      </div>
    </div>
  );
}
