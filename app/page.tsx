import type { ReactNode } from "react";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import TicketBar from "./components/TicketBar";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Lineup from "./components/Lineup";
import ArtistSpotlight from "./components/ArtistSpotlight";
import Schedule from "./components/Schedule";
import Tickets from "./components/Tickets";
import Place from "./components/Place";
import Faq from "./components/Faq";
import JsonLd from "./components/JsonLd";
import { ARTISTS } from "./data/artists";
import { musicEventJsonLd } from "./lib/event-jsonld";

/** One rounded card on the dark brown outer frame, like the reference. */
function Card({ children }: { children: ReactNode }) {
  return <div className="overflow-hidden rounded-[2rem]">{children}</div>;
}

export default function Home() {
  return (
    <div className="bg-[#20100c] px-3 py-3 sm:px-5 sm:py-5">
      <JsonLd data={musicEventJsonLd(ARTISTS)} />
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 sm:gap-5">
        <Card>
          <Hero />
        </Card>
        <Countdown />
        <Card>
          <Marquee />
        </Card>
        <Card>
          <About />
        </Card>
        <Card>
          <Lineup />
        </Card>
        <Card>
          <ArtistSpotlight />
        </Card>
        <Card>
          <Schedule />
        </Card>
        <Card>
          <Tickets />
        </Card>
        <Card>
          <Place />
        </Card>
        <Card>
          <Faq />
        </Card>
      </div>
      <TicketBar />
    </div>
  );
}
