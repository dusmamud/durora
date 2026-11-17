export type TicketTier = {
  id: "day" | "weekend" | "vip";
  name: string;
  price: number;
  blurb: string;
  perks: string[];
  featured: boolean;
};

/** Single source of truth for ticket tiers. Used by the home Tickets
 * section and the /tickets page. Prices in EUR, per person.
 * Demo checkout only — no real payment, nothing is booked. */
export const TICKET_TIERS: TicketTier[] = [
  {
    id: "day",
    name: "Day Pass",
    price: 69,
    blurb: "One day, all stages. Pick your day at the gate.",
    perks: ["All 5 stages", "Art installations", "Food court access"],
    featured: false,
  },
  {
    id: "weekend",
    name: "Weekend Pass",
    price: 149,
    blurb: "The full three days — the best way to do Durora.",
    perks: [
      "All 3 days",
      "All 5 stages",
      "Priority entry lane",
      "Festival map + poster",
    ],
    featured: true,
  },
  {
    id: "vip",
    name: "VIP",
    price: 249,
    blurb: "Front-row views, lounge, and the sunset terrace.",
    perks: [
      "Everything in Weekend",
      "VIP lounge + terrace",
      "Dedicated bar",
      "Merch pack",
    ],
    featured: false,
  },
];

export type TierId = TicketTier["id"];

export const MAX_TICKETS_PER_TIER = 8;
