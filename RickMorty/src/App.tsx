import "./App.scss";
import { MainPage } from "./components/pages/mainPage";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import { CharacterPage } from "./components/pages/CharacterPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#202329",
            color: "#ffffff",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/characters/:id" element={<CharacterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
