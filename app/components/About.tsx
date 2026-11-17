import Image from "next/image";
import Reveal from "./Reveal";

const STATS = [
  { value: "60+", label: "artists" },
  { value: "5", label: "stages" },
  { value: "3", label: "days" },
  { value: "20,000", label: "guests" },
];

/** Small four-point sparkle, like the reference's crosshair markers. */
function Sparkle({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute z-20 hidden -translate-x-1/2 -translate-y-1/2 text-lg leading-none text-white drop-shadow md:block ${className ?? ""}`}
    >
      ✦
    </span>
  );
}

/**
 * Reference 3-panel layout, no section heading:
 * orange text panel | crowd photo | peach stats panel.
 * Thin hairlines + sparkle markers sit across the panel boundaries.
 */
export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20">
      {/* Hairline grid + corner markers (desktop only) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-10 hidden md:block">
        <div className="absolute inset-y-0 left-1/3 w-px bg-white/25" />
        <div className="absolute inset-y-0 left-2/3 w-px bg-white/25" />
        <div className="absolute inset-x-0 top-[18%] h-px bg-white/20" />
        <div className="absolute inset-x-0 top-[82%] h-px bg-white/20" />
      </div>
      <Sparkle className="left-1/3 top-[18%]" />
      <Sparkle className="left-2/3 top-[18%]" />
      <Sparkle className="left-1/3 top-[82%]" />
      <Sparkle className="left-2/3 top-[82%]" />

      <div className="grid md:grid-cols-3">
        {/* Left: orange text panel */}
        <Reveal className="relative flex min-h-[420px] flex-col items-center justify-center bg-gradient-to-br from-[#ff8a3d] via-ember to-ember-deep px-8 py-16 text-center md:min-h-[560px]">
          <p className="font-display text-4xl tracking-wide text-white sm:text-5xl">
            DURORA
          </p>
          <p className="mt-4 max-w-[26ch] text-xl font-medium leading-relaxed text-white">
            is a three-day music festival that combines electronic music, art
            installations, and light shows.
          </p>
        </Reveal>

        {/* Middle: full-height crowd photo */}
        <Reveal
          delay={0.1}
          className="relative min-h-[420px] overflow-hidden md:min-h-[560px]"
        >
          <Image
            src="/images/crowd.webp"
            alt="Festival crowd dancing in golden-hour light"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </Reveal>

        {/* Right: peach stats panel */}
        <Reveal
          delay={0.2}
          className="flex min-h-[320px] flex-col justify-center bg-[#ffe9d9] px-8 py-14 md:min-h-[560px]"
        >
          <dl className="space-y-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex items-baseline gap-3">
                <dd className="font-display text-4xl leading-none text-ember-deep sm:text-5xl">
                  {s.value}
                </dd>
                <dt className="text-xl font-bold lowercase text-ember-deep sm:text-2xl">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
