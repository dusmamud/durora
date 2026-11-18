import { getArtist } from "./artists";

export type SetRow = { time: string; artist: string; stage: string };

export type ScheduleDay = { id: string; label: string; sets: SetRow[] };

/** The five Durora stages. Four host named artists; Grove Stage hosts
 * the closing sets and daytime programme across the weekend. */
export const STAGES = [
  "Durora Stage",
  "Pulse Stage",
  "Horizon Stage",
  "Sunset Stage",
  "Grove Stage",
] as const;

/** Artist rows read their time/day/stage from the shared artists data,
 * so Schedule and Lineup can never drift apart. */
function artistSet(slug: string): SetRow {
  const a = getArtist(slug);
  if (!a) throw new Error(`Unknown artist slug in schedule: ${slug}`);
  return { time: a.time, artist: a.name, stage: a.stage };
}

/** Single source of truth for the timetable. Used by the home Schedule
 * section and the /schedule page. Times are indicative — the full
 * timetable is published one week before the festival. */
export const SCHEDULE_DAYS: ScheduleDay[] = [
  {
    id: "sat",
    label: "Sat 14 Aug",
    sets: [
      artistSet("kairo"),
      {
        time: "21:00",
        artist: "Opening ceremony + light show",
        stage: "All stages",
      },
      artistSet("nova-rey"),
    ],
  },
  {
    id: "sun",
    label: "Sun 15 Aug",
    sets: [
      artistSet("luna-mara"),
      artistSet("felix-brandt"),
      artistSet("sofia-lane"),
    ],
  },
  {
    id: "mon",
    label: "Mon 16 Aug",
    sets: [
      {
        time: "17:30",
        artist: "Closing sets across 5 stages",
        stage: "All stages",
      },
      artistSet("amara-sol"),
      { time: "21:00", artist: "Finale light show", stage: "Durora Stage" },
    ],
  },
];
