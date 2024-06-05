/* eslint-disable react/prop-types */
const Tecnology = ({ tech }) => {
  return (
    <tr>
      <td>{tech.name}</td>
      <td>{tech.description}</td>
      <td>
        <img src={tech.icon} alt={`Logo de {tech.name}`} className="col-2" />
      </td>
      <td>{}</td>
    </tr>
  );
};

export default Tecnology;
