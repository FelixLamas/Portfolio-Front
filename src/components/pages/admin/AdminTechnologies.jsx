import Table from "react-bootstrap/Table";
import Tecnology from "./Tecnology";
import axios from "axios";
import { useState, useEffect } from "react";

const AdminTechnologies = () => {
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
    <section className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre de la tecnología</th>
            <th>Descripción</th>
            <th>Logo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {technologies.map((elem, index) => (
            <Tecnology tech={elem} key={index} />
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default AdminTechnologies;
