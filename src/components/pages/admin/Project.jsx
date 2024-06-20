/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdEditDocument } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import Button from "react-bootstrap/Button";

const Project = ({ proj, setShowEdit, setProject }) => {
  return (
    <tr>
      <td>{proj.name}</td>
      <td>{proj.description}</td>
      <td>
        <Link to={proj.url} target="_blanck">
          Ver Deploy
        </Link>
      </td>
      <td>
        <Link to={proj.repository} target="_blanck">
          Ver Deploy
        </Link>
      </td>
      <td>
        <img src={proj.image} alt={`Logo de ${proj.name}`} className="col-2" />
      </td>
      <td>
        <Button
          variant="primary"
          onClick={() => {
            setShowEdit(true);
            setProject(proj);
          }}
        >
          <MdEditDocument className="fs-2" />
        </Button>
        <Button variant="primary" onClick={() => setShowEdit(true)}>
          <AiFillDelete className="fs-2" />
        </Button>
      </td>
    </tr>
  );
};

export default Project;
