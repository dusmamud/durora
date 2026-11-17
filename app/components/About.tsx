import Image from "next/image";
import Reveal from "./Reveal";

const STATS = [
  { value: "60+", label: "Artists" },
  { value: "5", label: "Stages" },
  { value: "3", label: "Days" },
  { value: "20,000", label: "Guests" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-wine px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-ember">
            About the festival
          </p>
          <h2 className="font-display text-4xl leading-none text-cream sm:text-5xl">
            THREE DAYS OF SOUND &amp; LIGHT
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Reveal className="flex flex-col justify-center rounded-3xl bg-gradient-to-br from-ember via-ember-deep to-wine-deep p-8">
            <p className="font-display text-2xl leading-tight text-cream sm:text-3xl">
              DURORA
            </p>
            <p className="mt-3 text-lg font-medium leading-relaxed text-cream/95">
              is a three-day music festival that combines electronic music, art
              installations, and light shows.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="relative min-h-[320px] overflow-hidden rounded-3xl md:min-h-[420px]">
            <Image
              src="/images/crowd.webp"
              alt="Festival crowd dancing in golden-hour light"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-black/55 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-cream backdrop-blur">
              Golden hour, main stage
            </span>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col justify-center rounded-3xl bg-cream p-8">
            <dl className="space-y-5">
              {STATS.map((s) => (
                <div key={s.label} className="flex items-baseline justify-between gap-4 border-b border-ember/20 pb-4 last:border-0 last:pb-0">
                  <dd className="font-display text-3xl text-ember-deep sm:text-4xl">
                    {s.value}
                  </dd>
                  <dt className="text-sm font-bold uppercase tracking-[0.2em] text-wine/70">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
