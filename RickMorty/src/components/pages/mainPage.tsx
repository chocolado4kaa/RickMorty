import { CharSection } from "../sections/Characters/CharSection";
import { EpisodesSection } from "../sections/Episodes/EpisodesSection";
import { Header } from "../sections/Header/Header";
import { Hero } from "../sections/Hero/Hero";
import { LocationsSection } from "../sections/Locations/LocationsSection";
import { SectionHeaders } from "../../shared/const/Headers";

export const MainPage = () => {
  return (
    <>
      <Header
        headers={[
          SectionHeaders().characters,
          SectionHeaders().locations,
          SectionHeaders().episodes,
        ]}
      />
      <Hero />
      <CharSection />
      <LocationsSection />
      <EpisodesSection />
    </>
  );
};
