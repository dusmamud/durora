"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Send } from "lucide-react";

/** Brand icons were removed from lucide-react — hand-drawn inline SVGs. */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
  };

  return (
    <footer className="border-t border-white/10 bg-[#120303] px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl tracking-[0.18em] text-cream">
              DUR<span className="text-ember">O</span>RA
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/65">
              Durora Music Festival 2026 — Berlin, 14–16 August. Three days,
              five stages, 60+ artists.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { icon: InstagramIcon, label: "Instagram" },
                { icon: XIcon, label: "X (Twitter)" },
                { icon: YoutubeIcon, label: "YouTube" },
                { icon: Mail, label: "Email" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#top"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream/80 transition-colors hover:border-ember hover:text-ember"
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cream/50">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5 text-sm font-semibold">
              {[
                ["About", "#about"],
                ["Lineup", "#lineup"],
                ["Sofia Lane", "#artist"],
                ["Schedule", "#schedule"],
                ["Tickets", "#tickets"],
                ["Place", "#place"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-cream/80 transition-colors hover:text-glow">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cream/50">
              Stay in the loop
            </p>
            {done ? (
              <p className="mt-4 rounded-2xl border border-ember/40 bg-ember/10 p-4 text-sm font-semibold text-cream">
                You&apos;re on the list — lineup news lands in your inbox.
              </p>
            ) : (
              <form onSubmit={subscribe} className="mt-4">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <div className="flex overflow-hidden rounded-full border border-white/15 bg-white/[0.05] focus-within:border-ember">
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex shrink-0 items-center gap-1.5 bg-ember px-4 text-sm font-bold text-white transition-colors hover:bg-ember-deep"
                  >
                    <Send className="h-4 w-4" aria-hidden />
                    Join
                  </button>
                </div>
                <p className="mt-2 text-xs text-cream/45">
                  One email a month. No spam, unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-cream/45 sm:flex-row">
          <p>© 2026 Durora Music Festival. All rights reserved.</p>
          <p>Berlin · 14–16 August 2026</p>
        </div>
      </div>
    </footer>
  );
}
