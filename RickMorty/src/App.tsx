import "./App.scss";
import { MainPage } from "./components/pages/mainPage";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import { CharacterPage } from "./components/pages/CharacterPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
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
        <Route index element={<MainPage />} />
        <Route path="/characters/:id" element={<CharacterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
