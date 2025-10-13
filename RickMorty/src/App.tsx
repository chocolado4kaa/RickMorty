import "./App.scss";
import { MainPage } from "./components/pages/mainPage";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import { CharacterPage } from "./components/pages/CharacterPage";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/characters/:id" element={<CharacterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
