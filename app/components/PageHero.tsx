import Link from "next/link";
import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
  crumb,
}: {
  eyebrow: string;
  title: string;
  description: string;
  crumb: string;
}) {
  return (
    <section className="bg-wine-deep px-4 pb-14 pt-28 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <nav aria-label="Breadcrumb" className="text-sm text-cream/55">
            <Link href="/" className="transition-colors hover:text-glow">
              Home
            </Link>
            <span aria-hidden className="mx-2">
              /
            </span>
            <span className="text-cream/85">{crumb}</span>
          </nav>
          <p className="mb-3 mt-8 text-xs font-bold uppercase tracking-[0.35em] text-ember">
            {eyebrow}
          </p>
          <h1 className="font-display text-5xl leading-[0.95] text-cream sm:text-7xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-cream/75">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
