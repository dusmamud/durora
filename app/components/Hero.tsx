"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import Magnetic from "./Magnetic";

const EASE = [0.22, 1, 0.36, 1] as const;

/** One title line inside an overflow mask: slides up from below the mask. */
function TitleLine({
  children,
  delay,
  reduce,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  reduce: boolean;
  className: string;
}) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className={`block ${className}`}
        initial={reduce ? false : { y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.85, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion() ?? false;

  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] flex-col overflow-hidden bg-[#160404]"
    >
      {/* Backdrop photo — deliberately subtle, never the dominant element */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/images/hero-stage.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#160404]/80 via-[#160404]/40 to-[#160404]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#160404_92%)]" />
      </div>

      {/* Two dramatic light beams: wedges from the top corners converging
          toward centre. CSS sway (transform/opacity only). */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="animate-beam absolute left-0 top-0 h-[85%] w-[58%] bg-gradient-to-b from-[#ffd9a0]/70 via-ember/35 to-transparent blur-xl [clip-path:polygon(0_0,22%_0,64%_100%,0_100%)]"
          style={{ transformOrigin: "top left" }}
        />
        <div
          className="animate-beam absolute right-0 top-0 h-[85%] w-[58%] bg-gradient-to-b from-cream/60 via-glow/30 to-transparent blur-xl [clip-path:polygon(100%_0,78%_0,36%_100%,100%_100%)]"
          style={{ transformOrigin: "top right", animationDelay: "-3.5s" }}
        />
      </div>

      {/* Centered content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 pb-10 pt-28 text-center sm:pt-32">
        <h1 className="font-display leading-[0.92]">
          <TitleLine
            reduce={reduce}
            delay={0.05}
            className="text-[clamp(3.75rem,13vw,9.5rem)] tracking-wide text-cream"
          >
            DURORA
          </TitleLine>
          <TitleLine
            reduce={reduce}
            delay={0.18}
            className="bg-gradient-to-r from-ember via-glow to-ember bg-clip-text text-[clamp(1.85rem,6.4vw,4.75rem)] tracking-wide text-transparent"
          >
            MUSIC FESTIVAL 2027
          </TitleLine>
        </h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.38, ease: EASE }}
          className="mt-9"
        >
          <Magnetic>
            <Link
              href="#tickets"
              className="inline-block rounded-full bg-cream px-8 py-3.5 text-sm font-extrabold uppercase tracking-wider text-ember-deep shadow-xl shadow-black/40 transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Get Tickets
            </Link>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.52 }}
          className="mt-5"
        >
          <Link
            href="#artist"
            className="text-[11px] font-bold uppercase tracking-[0.35em] text-cream/80 transition-colors hover:text-glow sm:text-xs"
          >
            Watch Aftermovie
          </Link>
        </motion.div>
      </div>

      {/* Bottom meta row, split left / right */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 mx-auto flex w-full max-w-6xl items-end justify-between px-5 pb-7 text-[11px] font-bold uppercase leading-relaxed tracking-[0.2em] text-cream/90 sm:px-8 sm:text-sm"
      >
        <p className="text-left">
          Berlin
          <br />
          <span className="text-cream/70">14–16 August</span>
        </p>
        <p className="text-right">
          3 Days
          <br />
          5 Stages
          <br />
          60+ Artists
        </p>
      </motion.div>
    </section>
  );
}
