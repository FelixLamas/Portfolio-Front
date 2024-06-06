import NavBar from "./components/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/pages/Home";
import Foot from "./components/footer/Foot";
import { Routes, Route } from "react-router-dom";
import AdminOptions from "./components/pages/admin/AdminOptions";
import Projects from "./components/pages/projects/Projects";
import Technologies from "./components/pages/technologies/Technologies";
import AdminTechnologies from "./components/pages/admin/AdminTechnologies";
import AdminProjects from "./components/pages/admin/AdminProjects";
import CreateProject from "./components/pages/admin/CreateProject";
import CreateTechnology from "./components/pages/admin/CreateTechnology";

function App() {
  return (
    <>
      <header className="sticky-top">
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminOptions" element={<AdminOptions />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/adminTechnologies" element={<AdminTechnologies />} />
          <Route path="/adminProjects" element={<AdminProjects />} />
          <Route path="/createProject" element={<CreateProject />} />
          <Route path="/createTechnology" element={<CreateTechnology />} />
        </Routes>
      </main>
      <footer className="bg-dark text-light text-center pb-1">
        <Foot />
      </footer>
    </>
  );
}

export default App;
