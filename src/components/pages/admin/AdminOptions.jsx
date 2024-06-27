import { Link } from "react-router-dom";
import("../../../App.css");
const Admin = () => {
  return (
    <section className="container my-2 py-2">
      <h2 className="my-3 py-3 ">Administración del portfolio</h2>
      <section className="d-flex flex-column flex-lg-row mb-2 pb-3">
        <article className="col-12 col-lg-6 mb-3 me-lg-3 ">
          <Link
            to="/adminTechnologies"
            relative="path"
            className="image-container"
          >
            <img
              src="https://i.pinimg.com/564x/dc/96/36/dc9636358debe5e52ae70dea2c94d088.jpg"
              alt="Logo de lenguajes de programación"
              className=" image-option"
            />
            <p className="text-overlay fs-1">
              {" "}
              <strong>Tecnologías</strong>
            </p>
          </Link>
        </article>
        <article className="col-12 col-lg-6 ">
          <Link to="/adminProjects" relative="path" className="image-container">
            <img
              src="https://i.pinimg.com/564x/40/48/9a/40489abc86b6b647c69dbe1249fb98b4.jpg"
              alt="Fotografia de una porcion de codigo"
              className=" image-option"
            />
            <p className="text-overlay fs-1">
              <strong>Proyectos</strong>
            </p>
          </Link>
        </article>
      </section>
    </section>
  );
};

export default Admin;
