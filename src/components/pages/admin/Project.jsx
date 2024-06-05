/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdEditDocument } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

const Project = ({ proj }) => {
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

export default Project;
