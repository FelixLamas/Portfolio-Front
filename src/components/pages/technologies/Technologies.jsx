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
    <section className="container  " id="technology">
      <section className="d-flex flex-column flex-lg-row align-items-center bg-custon-am my-3">
        <img
          src="https://i.pinimg.com/564x/dc/96/36/dc9636358debe5e52ae70dea2c94d088.jpg"
          alt="Logo de lenguajes de programación"
          className="col-12 col-lg-6"
        />
        <div className="mx-3">
          <h2>Tecnologías</h2>
          <p>
            En ésta sección te muestro las tecnologías que conozco, iré por las
            que más he utilizado y tengo mayor manejo, hasta las que he
            utilizado menos.
          </p>
        </div>
      </section>
      <article className="d-flex flex-column flex-lg-row justify-content-evenly flex-wrap align-items-stretch ">
        {technologies.map((elem, index) => (
          <Card
            key={index}
            className="col-8 col-lg-2 p-2 mx-auto mx-lg-1 my-2  d-flex flex-column bg-card-custom"
          >
            <Card.Img
              variant="top"
              src={elem.icon}
              className="img-fluid image mx-auto"
            />
            <Card.Body className="text-center">
              <Card.Title>{elem.name}</Card.Title>
              <Card.Text>{elem.seniority}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </article>
    </section>
  );
};

export default Technologies;
