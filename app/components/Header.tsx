"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Ticket, X } from "lucide-react";

const NAV = [
  { label: "About", href: "/#about" },
  { label: "Lineup", href: "/lineup" },
  { label: "Schedule", href: "/schedule" },
  { label: "Tickets", href: "/tickets" },
  { label: "Venue", href: "/venue" },
  { label: "Gallery", href: "/gallery" },
  { label: "Info", href: "/info" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-[#2a0a0a]/90 shadow-lg shadow-black/30 backdrop-blur-md"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-display text-2xl tracking-[0.18em] text-cream"
          aria-label="Durora — home"
        >
          DUR<span className="text-ember">O</span>RA
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-semibold tracking-wide text-cream/85 transition-colors hover:text-glow"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/tickets"
            className="hidden items-center gap-2 rounded-full bg-ember px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-ember-deep sm:inline-flex"
          >
            <Ticket className="h-4 w-4" aria-hidden />
            Get Tickets
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-cream transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border-t border-white/10 bg-wine/95 px-4 pb-6 pt-2 backdrop-blur-md lg:hidden"
            aria-label="Mobile"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/5 py-3.5 text-lg font-semibold text-cream/90"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/tickets"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-ember px-4 py-3 text-base font-bold text-white"
            >
              <Ticket className="h-5 w-5" aria-hidden />
              Get Tickets
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
