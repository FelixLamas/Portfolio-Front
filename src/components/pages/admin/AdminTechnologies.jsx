import Table from "react-bootstrap/Table";
import Tecnology from "./Tecnology";
import axios from "axios";
import { useState, useEffect } from "react";
import { MdOutlinePostAdd } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import TechnologyEditM from "./TechnologyEditM";

const AdminTechnologies = () => {
  const [technologies, setTechnologies] = useState([]);
  const [technology, setTechnology] = useState({});
  const [showEditTech, setShowEditTech] = useState(false);

  const handleCloseEditTech = () => setShowEditTech(false);
  const handleShowEditTech = () => setShowEditTech(true);
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
      <section className="d-flex flex-row justify-content-between my-3">
        <h2>Tecnologías</h2>
        <div>
          <Link to="/createTechnology" relative="path">
            <MdOutlinePostAdd className="fs-2 mx-3" />
          </Link>
          <Link to="../adminOptions" relative="path">
            <RiArrowGoBackFill className="fs-2 mx-3" />
          </Link>
        </div>
      </section>
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
            <Tecnology
              tech={elem}
              key={index}
              handleShowEditTech={handleShowEditTech}
              setShowEditTech={setShowEditTech}
              setTechnology={setTechnology}
            />
          ))}
        </tbody>
      </Table>
      <TechnologyEditM
        showEditTech={showEditTech}
        handleCloseEditTech={handleCloseEditTech}
        technology={technology}
      />
    </section>
  );
};

export default AdminTechnologies;
