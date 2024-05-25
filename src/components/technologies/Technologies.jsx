import imgTech from "../../../public/technologies.jpg";
import axios from "axios";
import { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";

const Technologies = () => {
  const [technologies, setTechnologies] = useState([]);
  const API = import.meta.env.VITE_API;

  const getTechnologies = async () => {
    try {
      const response = await axios.get(`${API}/technology/getTechnologies`);
      if (response.status === 200) {
        setTechnologies(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTechnologies();
  }, []);

  return (
    <section className="container  ">
      <section className="d-flex flex-column flex-lg-row align-items-center">
        <img
          src={imgTech}
          alt="Logo de lenguajes de programación"
          className="col-12 col-lg-6"
        />
        <div className="ms-3">
          <h2>Tecnologías</h2>
          <p>
            En esta seccion te mostrare las tecnologias que conocos, ire por las
            que mas he utilizado y tengo mayor manejo, hasta las que he
            utilizado menos.
          </p>
        </div>
      </section>
      <article className="d-flex flex-column flex-lg-row justify-content-evenly flex-wrap">
        {technologies.map((elem, index) => (
          <Card key={index} className="col-lg-2">
            <Card.Img variant="top" src={elem.icon} />
            <Card.Body>
              <Card.Title>{elem.name}</Card.Title>
              <Card.Text>{elem.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </article>
    </section>
  );
};

export default Technologies;
