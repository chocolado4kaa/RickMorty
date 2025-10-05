import "./App.scss";
import { CharSection } from "./components/sections/Characters/CharSection";
import { Header } from "./components/sections/Header/Header";
import { Hero } from "./components/sections/Hero/Hero";
import { LocationsSection } from "./components/sections/Locations/LocationsSection";
import { EpisodesSections } from "./components/sections/Episodes/EpisodesSection";

function App() {
  
  return (
    <>
      <Header />
      <Hero />
      <CharSection />
      <LocationsSection />
      <EpisodesSections />
    </>
  );
}

export default App;
