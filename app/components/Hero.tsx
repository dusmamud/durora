"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ChevronDown, Clapperboard } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const STATS = [
  { value: "3", label: "Days" },
  { value: "5", label: "Stages" },
  { value: "60+", label: "Artists" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const beamsRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // GSAP: beams brighten as the hero scrolls away (ScrollTrigger scrub).
  // Client-only, guarded; Motion handles the entrance animation.
  useGSAP(
    () => {
      if (reduce) return;
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        beamsRef.current,
        { opacity: 0.35 },
        {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    },
    { scope: sectionRef, dependencies: [reduce] },
  );

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-wine"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero-stage.webp"
          alt="Durora main stage lit by orange spotlights at night"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-wine/70 via-transparent to-wine" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#1a0505_95%)]" />
      </div>

      {/* Spotlight beams */}
      <div
        ref={beamsRef}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 flex justify-center gap-10 sm:gap-24"
      >
        <div className="animate-beam h-[70vh] w-24 bg-gradient-to-b from-glow/50 via-ember/25 to-transparent blur-md [clip-path:polygon(35%_0,65%_0,100%_100%,0_100%)] sm:w-40" />
        <div
          className="animate-beam h-[70vh] w-24 bg-gradient-to-b from-cream/40 via-glow/20 to-transparent blur-md [clip-path:polygon(35%_0,65%_0,100%_100%,0_100%)] sm:w-40"
          style={{ animationDelay: "-2.5s" }}
        />
        <div
          className="animate-beam hidden h-[70vh] w-40 bg-gradient-to-b from-ember/40 via-ember/20 to-transparent blur-md [clip-path:polygon(35%_0,65%_0,100%_100%,0_100%)] sm:block"
          style={{ animationDelay: "-5s" }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 pt-32 sm:px-6">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-glow sm:text-sm"
        >
          Berlin &mdash; 14&ndash;16 August 2026
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="font-display leading-[0.9] text-cream"
        >
          <span className="block text-[17vw] tracking-wide sm:text-8xl md:text-9xl">
            DURORA
          </span>
          <span className="block bg-gradient-to-r from-ember via-glow to-ember bg-clip-text text-[10.5vw] tracking-wide text-transparent sm:text-6xl md:text-7xl">
            MUSIC FESTIVAL 2026
          </span>
        </motion.h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
        >
          <Link
            href="#tickets"
            className="rounded-full bg-cream px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-ember-deep shadow-xl shadow-black/40 transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Get Tickets
          </Link>
          <Link
            href="#artist"
            className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-cream transition-colors hover:border-glow hover:text-glow"
          >
            <Clapperboard className="h-4 w-4" aria-hidden />
            Watch Aftermovie
          </Link>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-end justify-between gap-6 border-t border-white/15 pt-6"
        >
          <p className="text-sm font-semibold leading-relaxed text-cream/90 sm:text-base">
            Berlin
            <br />
            <span className="text-cream/70">14&ndash;16 August</span>
          </p>
          <dl className="flex gap-6 sm:gap-10">
            {STATS.map((s) => (
              <div key={s.label} className="text-right">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl text-cream sm:text-4xl">
                  {s.value}
                </dd>
                <dd className="text-[11px] font-bold uppercase tracking-[0.2em] text-cream/70">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <a
          href="#about"
          aria-label="Scroll to About"
          className="animate-cue mx-auto mt-10 flex w-fit flex-col items-center gap-1 text-cream/60"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
            Scroll
          </span>
          <ChevronDown className="h-5 w-5" aria-hidden />
        </a>
      </div>
    </section>
  );
}
