import "./App.scss";
import { CharSection } from "./components/sections/Characters/CharSection";
import { Header } from "./components/sections/Header/Header";
import { Hero } from "./components/sections/Hero/Hero";
import { LocationsSection } from "./components/sections/Locations/LocationsSection";

function App() {
  
  return (
    <>
      <Header />
      <Hero />
      <CharSection />
      <LocationsSection />
    </>
  );
}

export default App;
