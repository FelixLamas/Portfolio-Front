import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Project from "./Project";
import { MdOutlinePostAdd } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";
import ProjectEditM from "./ProjectEditM";

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({});
  const [showEdit, setShowEdit] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const API = import.meta.env.VITE_API;

  const getProjects = async () => {
    try {
      const response = await axios.get(`${API}/project/getProjects`);

      if (response.status === 200) {
        setProjects(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);
  return (
    <section className="container mb-3">
      <section className="d-flex flex-row justify-content-between my-3">
        <h2>Proyectos</h2>
        <div>
          <Link to="/createProject" relative="path">
            <MdOutlinePostAdd className="fs-2 mx-3" />
          </Link>
          <Link to="../adminOptions" relative="path">
            <RiArrowGoBackFill className="fs-2 mx-3" />
          </Link>
        </div>
      </section>
      <Table striped bordered hover responsive>
        <thead className="align-middle">
          <tr>
            <th>Nombre del proyecto</th>
            <th>Descripcion</th>
            <th>URL</th>
            <th>Repositorio</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((elem, index) => (
            <Project
              proj={elem}
              key={index}
              handleShowEdit={handleShowEdit}
              setShowEdit={setShowEdit}
              setProject={setProject}
              getProjects={getProjects}
            />
          ))}
        </tbody>
      </Table>
      <ProjectEditM
        showEdit={showEdit}
        handleCloseEdit={handleCloseEdit}
        project={project}
        getProjects={getProjects}
      />
    </section>
  );
};

export default AdminProjects;
