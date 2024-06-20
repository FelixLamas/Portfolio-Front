import axios from "axios";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

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
      <section className="d-flex flex-column flex-lg-row align-items-center">
        <div>
          <h2>Proyectos</h2>
          <p>
            Ahora te presentare los distintos proyectos en los que trabaje, te
            compartire en caso de tener el repositorio de github y el sitio y/o
            app ya deployada
          </p>
        </div>
        <img
          src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Fotografia de una porcion de codigo"
          className="col-12 col-lg-6"
        />
      </section>
      <section>
        {projects.map((elem, index) => (
          <Card key={index}>
            <Card.Img variant="top" src={elem.image} />
            <Card.Body>
              <Card.Text>{elem.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </section>
    </section>
  );
};
export default Projects;
