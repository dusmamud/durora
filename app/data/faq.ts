export type FaqItem = { q: string; a: string };

/** The six questions shown on the home page. The /faq page shows these
 * plus the extended set below. */
export const HOME_FAQ: FaqItem[] = [
  {
    q: "When and where is Durora 2027?",
    a: "14–16 August 2027 at Tempelhofer Feld, Berlin. Gates open at noon each day; music runs until 23:00.",
  },
  {
    q: "Is there an age limit?",
    a: "All ages are welcome. Under-16s need to be accompanied by an adult after 20:00.",
  },
  {
    q: "Can I bring food and drinks?",
    a: "Sealed water bottles are allowed. Food stalls and bars are on site — outside alcohol is not permitted.",
  },
  {
    q: "What if it rains?",
    a: "Durora is an open-air festival and runs rain or shine. Covered areas and ponchos are available on site.",
  },
  {
    q: "How do I get there?",
    a: "Take the U6 to Paradestraße or Platz der Luftbrücke. Night buses run all weekend and there is bike parking at the north gate.",
  },
  {
    q: "Can I get a refund if I can't come?",
    a: "Tickets are transferable to another person up to 7 days before the festival. Refunds are available until 31 July 2027.",
  },
];

export const EXTENDED_FAQ: FaqItem[] = [
  {
    q: "Are tickets transferable?",
    a: "Yes. You can transfer a ticket to another person free of charge up to 7 days before the festival (7 August 2027). The name on the ticket must match the ID shown at the gate.",
  },
  {
    q: "Is there camping on site?",
    a: "No — Durora is a day festival at Tempelhofer Feld, not a camping festival. Gates close at 23:00 each night. Berlin has plenty of hotels and hostels nearby; see the venue page for options.",
  },
  {
    q: "Is the festival accessible?",
    a: "Yes. Tempelhofer Feld is flat, open ground. There are accessible viewing platforms at the Durora and Sunset stages, step-free entry lanes, accessible toilets, and a dedicated assistance team. Email us in advance so we can reserve a platform spot.",
  },
  {
    q: "Can I pay by card on site?",
    a: "Yes — Durora is cashless. Cards and phone payments work at every bar, food stall and merch stand. Bring a charged phone or a card; cash is not accepted on site.",
  },
  {
    q: "What food and drink is available?",
    a: "Over 30 food stalls across the site, including vegan, vegetarian and gluten-free options, plus bars, coffee and free drinking-water points. Sealed water bottles (up to 0.5 l) may be brought in.",
  },
  {
    q: "How do I contact Durora?",
    a: "Email hello@durora.live or use the contact form on this site. During the festival weekend, the info point at the main gate can help with anything on site.",
  },
];

/** Full FAQ set for the /faq page. */
export const ALL_FAQ: FaqItem[] = [...HOME_FAQ, ...EXTENDED_FAQ];
