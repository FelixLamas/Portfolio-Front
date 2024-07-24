/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdEditDocument } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import axios from "axios";

const Project = ({ proj, setShowEdit, setProject, getProjects }) => {
  const API = import.meta.env.VITE_API;

  const deleteProject = () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar la Proyecto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.delete(`${API}/project/delete/${proj._id}`);
          getProjects();
          Swal.fire({
            title: "¡Exito!",
            text: "Se elimino el proyecto correctamente.",
            icon: "success",
          });
        } catch (error) {
          console.error(error);
        }
      }
    });
  };
  return (
    <tr className="align-middle">
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
        <img src={proj.image} alt={`Logo de ${proj.name}`} className="col-10" />
      </td>
      <td className="text-center">
        <Button
          className="p-0 my-2"
          onClick={() => {
            setShowEdit(true);
            setProject(proj);
          }}
        >
          <MdEditDocument className="fs-2  btn-modal-custom" />
        </Button>
        <Button onClick={deleteProject} className="p-0">
          <AiFillDelete className="fs-2  btn-modal-custom" />
        </Button>
      </td>
    </tr>
  );
};

export default Project;
