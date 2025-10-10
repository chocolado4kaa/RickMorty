import { CharSection } from "../sections/Characters/CharSection";
import { EpisodesSection } from "../sections/Episodes/EpisodesSection";
import { Header } from "../sections/Header/Header";
import { Hero } from "../sections/Hero/Hero";
import { LocationsSection } from "../sections/Locations/LocationsSection";

export const MainPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <CharSection />
      <LocationsSection />
      <EpisodesSection />
    </>
  );
};
