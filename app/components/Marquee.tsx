const ITEMS = [
  "Durora",
  "Berlin",
  "14–16 August 2027",
  "60+ Artists",
  "5 Stages",
  "20,000 Guests",
  "Sofia Lane",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-ember/30 bg-gradient-to-r from-ember-deep via-ember to-ember-deep py-3" aria-hidden>
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-8">
            {row.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center gap-8 font-display text-lg tracking-[0.15em] text-cream sm:text-xl"
              >
                {item.toUpperCase()}
                <span className="text-glow">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
