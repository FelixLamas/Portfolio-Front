import NavBar from "./components/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home";
import Foot from "./components/footer/Foot";
import { Routes, Route } from "react-router-dom";
import Projects from "./components/pages/projects/Projects";
import Technologies from "./components/pages/technologies/Technologies";

import("./App.css");

function App() {
  
  return (
    <>
      <header className="sticky-top ">
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <footer className="bg-dark text-light text-center pb-1 bg-custom">
        <Foot />
      </footer>
    </>
  );
}

export default App;
