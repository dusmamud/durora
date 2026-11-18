import Image from "next/image";
import Reveal from "./Reveal";
import { HEADLINER, LINEUP } from "../data/artists";

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
            A first look at the weekend. Sofia Lane headlines Sunday night on
            the Aurora Stage — the full lineup drops soon.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Headliner: large portrait card */}
          <Reveal className="sm:col-span-2">
            <article className="group relative min-h-[420px] overflow-hidden rounded-3xl transition-transform duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50">
              <Image
                src={HEADLINER.portrait}
                alt={`${HEADLINER.name} — ${HEADLINER.genre}`}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover object-[center_28%] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-glow">
                  Headliner — {HEADLINER.day}
                </p>
                <p className="mt-2 font-display text-4xl text-cream sm:text-5xl">
                  {HEADLINER.name.toUpperCase()}
                </p>
                <p className="mt-2 text-cream/85">
                  {HEADLINER.genre} — {HEADLINER.stage}, sunset set.
                </p>
                <a
                  href="#artist"
                  className="mt-5 inline-block rounded-full bg-cream px-5 py-2.5 text-sm font-bold text-ember-deep transition-transform hover:scale-[1.03]"
                >
                  Meet Sofia →
                </a>
              </div>
            </article>
          </Reveal>

          {LINEUP.map((a, i) => (
            <Reveal key={a.slug} delay={0.05 * (i + 1)} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition-all duration-500 hover:-translate-y-1 hover:border-ember/60 hover:shadow-2xl hover:shadow-black/50">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={a.portrait}
                    alt={`${a.name} — ${a.genre}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl tracking-wide text-cream">
                    {a.name.toUpperCase()}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-glow">
                    {a.genre}
                  </p>
                  <p className="mt-3 text-sm text-cream/65">
                    {a.day} · {a.stage} · {a.time}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
