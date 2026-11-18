import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import { ARTISTS, getArtist } from "../../data/artists";

export function generateStaticParams() {
  return ARTISTS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const artist = getArtist(slug);
  if (!artist) return { title: "Artist not found" };
  return {
    title: artist.name,
    description: `${artist.name} — ${artist.genre} at Durora 2027. ${artist.day}, ${artist.stage}, ${artist.time}. Berlin, 14–16 August.`,
    openGraph: {
      images: [{ url: artist.portrait, alt: artist.name }],
    },
  };
}

export default async function ArtistPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artist = getArtist(slug);
  if (!artist) notFound();

  const others = ARTISTS.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <div className="bg-wine pb-20">
      <PageHero
        eyebrow="Artist"
        title={artist.name.toUpperCase()}
        description={`${artist.genre} — ${artist.day}, ${artist.stage}, ${artist.time}.`}
        crumb={artist.name}
      />
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
              <Image
                src={artist.portrait}
                alt={`${artist.name} — ${artist.genre}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center">
              {artist.headliner && (
                <span className="mb-4 w-fit rounded-full bg-ember px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white">
                  Headliner
                </span>
              )}
              <dl className="space-y-4">
                <div className="flex gap-4 border-b border-white/10 pb-4">
                  <dt className="w-20 shrink-0 text-sm font-bold uppercase tracking-wider text-cream/50">
                    Genre
                  </dt>
                  <dd className="font-semibold text-cream">{artist.genre}</dd>
                </div>
                <div className="flex gap-4 border-b border-white/10 pb-4">
                  <dt className="w-20 shrink-0 text-sm font-bold uppercase tracking-wider text-cream/50">
                    Day
                  </dt>
                  <dd className="font-semibold text-cream">{artist.day}</dd>
                </div>
                <div className="flex gap-4 border-b border-white/10 pb-4">
                  <dt className="w-20 shrink-0 text-sm font-bold uppercase tracking-wider text-cream/50">
                    Stage
                  </dt>
                  <dd className="font-semibold text-cream">{artist.stage}</dd>
                </div>
                <div className="flex gap-4 border-b border-white/10 pb-4">
                  <dt className="w-20 shrink-0 text-sm font-bold uppercase tracking-wider text-cream/50">
                    Time
                  </dt>
                  <dd className="font-semibold text-glow">{artist.time}</dd>
                </div>
              </dl>
              <p className="mt-6 leading-relaxed text-cream/80">{artist.bio}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/lineup"
                  className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold text-cream transition-colors hover:border-glow hover:text-glow"
                >
                  ← Back to lineup
                </Link>
                <Link
                  href="/tickets"
                  className="rounded-full bg-ember px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-ember-deep"
                >
                  Get tickets
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <h2 className="font-display text-3xl text-cream sm:text-4xl">
            MORE ARTISTS
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {others.map((a) => (
              <Link key={a.slug} href={`/lineup/${a.slug}`} className="block">
                <article className="group flex gap-5 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-4 transition-all hover:-translate-y-1 hover:border-ember/60">
                  <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-2xl">
                    <Image
                      src={a.portrait}
                      alt={`${a.name} — ${a.genre}`}
                      fill
                      sizes="96px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-display text-2xl text-cream">
                      {a.name.toUpperCase()}
                    </h3>
                    <p className="text-sm font-semibold text-glow">{a.genre}</p>
                    <p className="mt-1 text-sm text-cream/65">
                      {a.day} · {a.stage} · {a.time}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
