/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import { MdEditDocument } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

const Tecnology = ({ tech, setShowEditTech, setTechnology }) => {
  return (
    <tr>
      <td>{tech.name}</td>
      <td>{tech.description}</td>
      <td>
        <img src={tech.icon} alt={`Logo de {tech.name}`} className="col-2" />
      </td>
      <td>
        <Button
          variant="primary"
          onClick={() => {
            setShowEditTech(true);
            setTechnology(tech);
          }}
        >
          <MdEditDocument className="fs-2" />
        </Button>
        <Button variant="primary" onClick={() => setShowEditTech(true)}>
          <AiFillDelete className="fs-2" />
        </Button>
      </td>
    </tr>
  );
};

export default Tecnology;
