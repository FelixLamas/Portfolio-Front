import technologies from "../../../../public/technologies.jpg";

const Technologies = () => {
  return (
    <section className="container  ">
      <section className="d-flex flex-column flex-lg-row align-items-center">
        <img
          src={technologies}
          alt="Logo de lenguajes de programación"
          className="col-12 col-lg-6"
        />
        <div className="ms-3">
          <h2>Tecnologías</h2>
          <p>
            En esta seccion te mostrare las tecnologias que conocos, ire por las
            que mas he utilizado y tengo mayor manejo, hasta las que he
            utilizado menos.
          </p>
        </div>
      </section>
      <article>
        <p>
          en este articulo mostrare las tecnologias que obtengo desde la api
        </p>
      </article>
    </section>
  );
};

export default Technologies;
