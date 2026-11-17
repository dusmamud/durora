import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Lineup from "./components/Lineup";
import ArtistSpotlight from "./components/ArtistSpotlight";
import Schedule from "./components/Schedule";
import Tickets from "./components/Tickets";
import Place from "./components/Place";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Lineup />
      <ArtistSpotlight />
      <Schedule />
      <Tickets />
      <Place />
      <Faq />
    </>
  );
}
