import { ARTISTS, type Artist } from "../data/artists";
import { TICKET_TIERS } from "../data/tickets";

const SITE_URL = "https://durora.pages.dev";

/**
 * Single source of truth for Durora structured data.
 * - MusicEvent: one block per event-related page. `performers` is all 6
 *   announced artists on the home/lineup/schedule/tickets/venue/gallery/
 *   info pages, and ONLY the page's own artist on /lineup/<slug>.
 * - Tickets first went on sale when the site launched, so validFrom is
 *   that launch date — do not invent another one.
 * - No FAQPage anywhere: Google removed FAQ rich results, so the markup
 *   earns nothing.
 */
export function musicEventJsonLd(performers: Artist[]) {
  return {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    name: "Durora Music Festival 2027",
    url: `${SITE_URL}/`,
    startDate: "2027-08-14T12:00:00+02:00",
    endDate: "2027-08-16T23:00:00+02:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    image: [`${SITE_URL}/og.jpg`],
    description:
      "A three-day music festival in Berlin combining electronic music, art installations, and light shows. 60+ artists across 5 stages.",
    location: {
      "@type": "Place",
      name: "Tempelhofer Feld",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Tempelhofer Damm",
        postalCode: "12101",
        addressLocality: "Berlin",
        addressCountry: "DE",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Durora",
      url: `${SITE_URL}/`,
    },
    performer: performers.map((a) => ({
      "@type": "MusicGroup",
      name: a.name,
    })),
    offers: TICKET_TIERS.map((t) => ({
      "@type": "Offer",
      name: t.name,
      price: t.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/tickets`,
      validFrom: "2026-11-17T00:00:00+01:00",
    })),
  };
}

export function lineupItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Durora 2027 lineup",
    itemListElement: ARTISTS.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "MusicGroup",
        name: a.name,
        genre: a.genre,
        url: `${SITE_URL}/lineup/${a.slug}`,
      },
    })),
  };
}
