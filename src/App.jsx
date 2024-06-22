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
import adminContext from "./components/context/AdminContext"
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [currentAdmin, setCurrentAdmin] = useState(undefined);

  const SaveAuth = (auth) => {
    sessionStorage.setItem("auth", JSON.stringify(auth));
  };

  const GetAuth = () => {
    return JSON.parse(sessionStorage.getItem("auth"));
  };

  const RemoveAuth = () => {
    sessionStorage.removeItem("auth");
  };

  useEffect(() => {
    const session = GetAuth();
    if (session) {
      setCurrentAdmin(session);
    }
    return () => {
      setCurrentAdmin(undefined);
    };
  }, []);

  useEffect(() => {
    if (currentAdmin !== undefined) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${currentAdmin.token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [currentAdmin]);
  return (
    <>
      <adminContext.Provider value={{currentAdmin, setCurrentAdmin, SaveAuth, GetAuth, RemoveAuth}}>
      <header className="sticky-top">
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminOptions" element={currentAdmin!==undefined &&<AdminOptions />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/projects" element={ <Projects />} />
          <Route path="/adminTechnologies" element={ currentAdmin!==undefined &&<AdminTechnologies />} />
          <Route path="/adminProjects" element={ currentAdmin!==undefined &&<AdminProjects />} />
          <Route path="/createProject" element={ currentAdmin!==undefined &&<CreateProject />} />
          <Route path="/createTechnology" element={currentAdmin!==undefined &&<CreateTechnology />} />
        </Routes>
      </main>
      <footer className="bg-dark text-light text-center pb-1">
        <Foot />
      </footer>
      </adminContext.Provider>
    </>
  );
}

export default App;
