export type Artist = {
  slug: string;
  name: string;
  genre: string;
  day: string;
  stage: string;
  time: string;
  bio: string;
  portrait: string;
  headliner: boolean;
};

/**
 * Single source of truth for the Durora lineup.
 * Used by Lineup and Schedule so times, days and stages never drift apart.
 * All artists are fictional; bios are written for the festival site.
 */
export const ARTISTS: Artist[] = [
  {
    slug: "sofia-lane",
    name: "Sofia Lane",
    genre: "Indie Pop / Soul",
    day: "Sun 15 Aug",
    stage: "Aurora Stage",
    time: "20:30",
    bio: "Soulful indie-pop singer with soft vocals and cinematic storytelling. Her songs feel like late-summer evenings — warm, honest, and quietly huge. Often performs with acoustic arrangements, stripped back to one guitar and a room holding its breath.",
    portrait: "/images/sofia-lane.webp",
    headliner: true,
  },
  {
    slug: "nova-rey",
    name: "Nova Rey",
    genre: "Melodic Techno",
    day: "Sat 14 Aug",
    stage: "Aurora Stage",
    time: "22:00",
    bio: "Melodic techno producer and DJ known for hypnotic, slow-burning sets. Her late-night sets build from deep grooves to euphoric peaks. A regular on Berlin's club circuit, she closes Saturday night on the Aurora Stage.",
    portrait: "/images/nova-rey.webp",
    headliner: false,
  },
  {
    slug: "kairo",
    name: "Kairo",
    genre: "House",
    day: "Sat 14 Aug",
    stage: "Pulse Stage",
    time: "19:00",
    bio: "House DJ and producer with a crate full of disco-tinged grooves. His sets keep the floor moving from golden hour into the night. Opens the Pulse Stage on Saturday evening.",
    portrait: "/images/kairo.webp",
    headliner: false,
  },
  {
    slug: "luna-mara",
    name: "Luna Mara",
    genre: "Dream Pop",
    day: "Sun 15 Aug",
    stage: "Horizon Stage",
    time: "15:00",
    bio: "Dream-pop songwriter weaving hazy guitars and floating vocals. Her afternoon set drifts between shoegaze shimmer and pop melody. A gentle start to Sunday on the Horizon Stage.",
    portrait: "/images/luna-mara.webp",
    headliner: false,
  },
  {
    slug: "felix-brandt",
    name: "Felix Brandt",
    genre: "Electro",
    day: "Sun 15 Aug",
    stage: "Aurora Stage",
    time: "18:00",
    bio: "Electro live act blending analogue synths with driving rhythms. His hardware-only shows are loud, raw, and unrepeatable. Takes the Aurora Stage into Sunday evening.",
    portrait: "/images/felix-brandt.webp",
    headliner: false,
  },
  {
    slug: "amara-sol",
    name: "Amara Sol",
    genre: "Soul / R&B",
    day: "Mon 16 Aug",
    stage: "Sunset Stage",
    time: "19:30",
    bio: "Soul and R&B vocalist with a voice built for open skies. Her sunset set mixes originals with reworked classics. Closes Monday on the Sunset Stage.",
    portrait: "/images/amara-sol.webp",
    headliner: false,
  },
];

export const HEADLINER: Artist =
  ARTISTS.find((a) => a.headliner) ?? ARTISTS[0];

export const LINEUP: Artist[] = ARTISTS.filter((a) => !a.headliner);

export function getArtist(slug: string): Artist | undefined {
  return ARTISTS.find((a) => a.slug === slug);
}
