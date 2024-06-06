/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdEditDocument } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

const Tecnology = ({ tech }) => {
  return (
    <tr>
      <td>{tech.name}</td>
      <td>{tech.description}</td>
      <td>
        <img src={tech.icon} alt={`Logo de {tech.name}`} className="col-2" />
      </td>
      <td>
        <Link to=".." target="_blanck">
          <MdEditDocument className="fs-2" />
        </Link>
        <Link to=".." target="_blanck">
          <AiFillDelete className="fs-2" />
        </Link>
      </td>
    </tr>
  );
};

export default Tecnology;
