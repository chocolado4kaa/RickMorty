import "./App.scss";
import { CharSection } from "./components/sections/Characters/CharSection";
import { Header } from "./components/sections/Header/Header";
import { Hero } from "./components/sections/Hero/Hero";

function App() {
  
  return (
    <>
      <Header />
      <Hero />
      <CharSection />
    </>
  );
}

export default App;
