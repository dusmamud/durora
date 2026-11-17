"use client";

import { useRef } from "react";
import Image from "next/image";
import { useReducedMotion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

/**
 * Full-bleed Sofia Lane spotlight, like the reference: the portrait is the
 * whole card, type and meta sit on top of it. GSAP ScrollTrigger parallax
 * (desktop only, disabled on reduced motion) — Motion handles nothing here,
 * so the two systems never fight over the same element.
 */
export default function ArtistSpotlight() {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useGSAP(
    () => {
      if (reduce) return;
      if (!window.matchMedia("(min-width: 768px)").matches) return;
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        photoRef.current,
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
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
      id="artist"
      ref={sectionRef}
      className="relative min-h-[88svh] scroll-mt-20 overflow-hidden bg-wine-deep"
    >
      {/* Parallax photo: oversized vertically so the yPercent shift never
          reveals an edge. */}
      <div ref={photoRef} className="absolute inset-x-0 -top-[10%] h-[120%]">
        <Image
          src="/images/sofia-lane.webp"
          alt="Sofia Lane wearing headphones, warm orange light"
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-transparent to-black/75" />

      {/* Top hairline rule with repeating DURORA */}
      <div className="absolute inset-x-5 top-5 z-10 sm:inset-x-8 sm:top-7">
        <div className="flex items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-[0.35em] text-cream/75">
          {["DURORA", "DURORA", "DURORA", "DURORA", "DURORA", "DURORA"].map(
            (t, i) => (
              <span key={i} className={i > 1 ? "hidden sm:inline" : ""}>
                {t}
              </span>
            ),
          )}
        </div>
        <div className="mt-2 h-px bg-white/40" />
      </div>

      {/* Left overlay text */}
      <p className="absolute left-5 top-[23%] z-10 max-w-[220px] text-xl font-bold leading-snug text-cream [text-shadow:0_1px_14px_rgba(0,0,0,0.65)] sm:left-8 sm:max-w-xs sm:text-2xl">
        Often performs with acoustic arrangements
      </p>

      {/* Right overlay text */}
      <p className="absolute right-5 top-[47%] z-10 max-w-[240px] text-right text-base font-medium leading-relaxed text-cream/95 [text-shadow:0_1px_14px_rgba(0,0,0,0.65)] sm:right-8 sm:max-w-sm sm:text-xl">
        Soulful indie-pop singer with soft vocals and cinematic storytelling
      </p>

      {/* Bottom meta row + giant name */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-5 sm:px-8 sm:pb-7">
        <div className="flex items-end justify-between gap-4 border-t border-white/40 pt-4 text-xs font-bold uppercase tracking-[0.2em] text-cream sm:text-base">
          <span>United Kingdom</span>
          <span>Indie Pop / Soul</span>
        </div>
        <p className="mt-1 font-display leading-[0.85] text-cream/95 text-[clamp(3.8rem,13vw,10.5rem)]">
          Sofia Lane
        </p>
      </div>
    </section>
  );
}
