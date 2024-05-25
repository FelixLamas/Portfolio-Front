import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Foot = () => {
  return (
    <article className="container">
      <div className="d-flex flex-column flex-lg-row justify-content-around align-items-center">
        <section className="d-flex flex-column mt-3">
          <h5>Contacto</h5>
          <p className="my-1">felamas@gmail.com</p>
          <p className="my-1">381-5747112</p>
        </section>
        <section>
          <FaGithubAlt className="fs-1 mx-2" />
          <FaLinkedin className="fs-1 mx-2" />
        </section>
      </div>
      <section>
        <p className="mt-2 mb-1">Todos los derechos reservados.</p>
      </section>
    </article>
  );
};

export default Foot;
