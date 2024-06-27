import axios from "axios";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import("../../../App.css");

const Projects = () => {
  const [projects, setProjects] = useState([]);
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
    <section className="container my-3">
      <section className="d-flex flex-column flex-lg-row align-items-center mb-3 bg-custon-am ">
        <div className="mx-2 px-2">
          <h2>Proyectos</h2>
          <p>
            Ahora te presento los distintos proyectos en los que trabajé, te
            compartiré repositorio de github y el sitio y/o app ya deployada.
          </p>
        </div>
        <img
          src="https://i.pinimg.com/564x/40/48/9a/40489abc86b6b647c69dbe1249fb98b4.jpg"
          alt="Fotografia de una porcion de codigo"
          className="col-12 col-lg-5 img-fluid"
        />
      </section>
      <section>
        {projects.map((elem, index) => (
          <Card
            key={index}
            className="mb-3 d-flex flex-lg-row align-items-center p-2 bg-card-custom"
          >
            <Card.Img variant="top" src={elem.image} className="img-fluid" />
            <Card.Body>
              <Card.Text>
                <strong className="fs-4"> {elem.name}</strong>
              </Card.Text>
              <Card.Text>{elem.description}</Card.Text>
            </Card.Body>
            <section>
              <Link
                to={elem.url}
                target="_blanck"
                className="btn  btn-custom btn-modal-custom mx-3 mx-lg-0 my-2"
              >
                Ver Deploy
              </Link>
              <Link
                to={elem.repository}
                target="_blanck"
                className="btn btn-custom btn-modal-custom mx-3 mx-lg-0 my-2"
              >
                Ver Repo
              </Link>
            </section>
          </Card>
        ))}
      </section>
    </section>
  );
};
export default Projects;
