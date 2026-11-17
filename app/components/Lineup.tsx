import { Disc3 } from "lucide-react";
import Reveal from "./Reveal";

const ARTISTS = [
  { name: "Nova Rey", genre: "Melodic Techno", day: "Fri 14 Aug", stage: "Aurora Stage" },
  { name: "Kairo", genre: "House", day: "Fri 14 Aug", stage: "Pulse Stage" },
  { name: "Luna Mara", genre: "Dream Pop", day: "Sat 15 Aug", stage: "Horizon Stage" },
  { name: "Felix Brandt", genre: "Electro", day: "Sat 15 Aug", stage: "Aurora Stage" },
  { name: "Amara Sol", genre: "Soul / R&B", day: "Sun 16 Aug", stage: "Sunset Stage" },
];

export default function Lineup() {
  return (
    <section id="lineup" className="scroll-mt-20 bg-wine-deep px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-ember">
            Lineup
          </p>
          <h2 className="font-display text-4xl leading-none text-cream sm:text-5xl">
            60+ ARTISTS. 5 STAGES.
          </h2>
          <p className="mt-3 max-w-xl text-cream/75">
            A first look at the weekend. Sofia Lane headlines Saturday night on
            the Aurora Stage — the full lineup drops soon.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal className="rounded-3xl bg-gradient-to-br from-ember to-wine-soft p-7 sm:col-span-2 lg:row-span-1">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-glow">
              Headliner — Sat 15 Aug
            </p>
            <p className="mt-2 font-display text-4xl text-cream sm:text-5xl">
              SOFIA LANE
            </p>
            <p className="mt-2 text-cream/85">
              Indie Pop / Soul — Aurora Stage, sunset set.
            </p>
            <a
              href="#artist"
              className="mt-5 inline-block rounded-full bg-cream px-5 py-2.5 text-sm font-bold text-ember-deep transition-transform hover:scale-[1.03]"
            >
              Meet Sofia →
            </a>
          </Reveal>

          {ARTISTS.map((a, i) => (
            <Reveal key={a.name} delay={0.05 * (i + 1)}>
              <article className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-ember/60">
                <Disc3 className="h-7 w-7 text-ember transition-transform duration-500 group-hover:rotate-180" aria-hidden />
                <h3 className="mt-4 font-display text-2xl tracking-wide text-cream">
                  {a.name.toUpperCase()}
                </h3>
                <p className="mt-1 text-sm font-semibold text-glow">{a.genre}</p>
                <p className="mt-3 text-sm text-cream/65">
                  {a.day} · {a.stage}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
