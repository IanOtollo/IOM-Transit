import Hero from "@/components/home/Hero";
import Trust from "@/components/home/Trust";
import Grids from "@/components/home/Grids";
import FleetNetwork from "@/components/home/FleetNetwork";
import { Leadership, QuoteForm } from "@/components/home/AboutQuote";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Grids />
      <FleetNetwork />
      <Leadership />
      <QuoteForm />
    </>
  );
}
