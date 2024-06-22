/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import { MdEditDocument } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import axios from "axios";

const Tecnology = ({ tech, setShowEditTech, setTechnology, getTechnologies }) => {
  const API = import.meta.env.VITE_API;

  const deleteTech=()=>{
    Swal.fire({
      title: "¿Estás seguro de eliminar la tecnología?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText:"Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res=await axios.delete(`${API}/technology/delete/${tech._id}`);
          getTechnologies();
          Swal.fire({
            title: "¡Exito!",
            text: "Se elimino la tecnología correctamente.",
            icon: "success"
          });      
        } catch (error) {
          console.error(error);
        }
        
      }
    });
  }

  return (
    <tr>
      <td>{tech.name}</td>
      <td>{tech.seniority}</td>
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
        <Button variant="primary" onClick={ deleteTech}>
          <AiFillDelete className="fs-2" />
        </Button>
      </td>
    </tr>
  );
};

export default Tecnology;
