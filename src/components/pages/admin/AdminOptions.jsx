import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <section className="container">
      <h2>Administración del portfolio</h2>
      <article>
        <Link to="/adminTechnologies" relative="path">
          <h3>Tecnologías</h3>
        </Link>
      </article>
      <article>
        <Link to="/adminProjects" relative="path">
          <h3>Proyectos</h3>
        </Link>
      </article>
    </section>
  );
};

export default Admin;
