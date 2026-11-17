import Image from "next/image";
import { Headphones, MapPin, Music2, Quote } from "lucide-react";
import Reveal from "./Reveal";

export default function ArtistSpotlight() {
  return (
    <section id="artist" className="scroll-mt-20 overflow-hidden bg-wine px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-center">
        <Reveal className="relative min-h-[420px] overflow-hidden rounded-3xl sm:min-h-[560px]">
          <Image
            src="/images/sofia-lane.webp"
            alt="Sofia Lane wearing headphones, warm orange light"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
          />
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-glow">
              Featured artist
            </span>
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="flex items-center gap-2 text-sm font-semibold text-cream/75">
            <MapPin className="h-4 w-4 text-ember" aria-hidden />
            United Kingdom
          </p>
          <h2 className="mt-3 font-display text-6xl leading-[0.9] text-cream sm:text-7xl">
            SOFIA
            <br />
            LANE
          </h2>
          <p className="mt-2 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-glow">
            <Music2 className="h-4 w-4" aria-hidden />
            Indie Pop / Soul
          </p>

          <p className="mt-6 text-lg leading-relaxed text-cream/85">
            Soulful indie-pop singer with soft vocals and cinematic
            storytelling. Her songs feel like late-summer evenings — warm,
            honest, and quietly huge.
          </p>

          <blockquote className="mt-6 flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <Quote className="h-6 w-6 shrink-0 text-ember" aria-hidden />
            <p className="text-base font-medium text-cream/90">
              &ldquo;Often performs with acoustic arrangements&rdquo; — stripped
              back, one guitar, and a room holding its breath.
            </p>
          </blockquote>

          <p className="mt-6 flex items-center gap-2 text-sm text-cream/70">
            <Headphones className="h-4 w-4 text-ember" aria-hidden />
            Saturday 15 August · Aurora Stage · sunset set
          </p>
        </Reveal>
      </div>
    </section>
  );
}
