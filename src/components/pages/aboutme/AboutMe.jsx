import fotografy from "../../../../public/principal.jpg";
import SocialNetworks from "../../socialNetworks/SocialNetworks";

import "../../../App.css";

const AboutMe = () => {
  return (
    <section className="container bg-custon-am ">
      <article className="d-flex flex-column flex-lg-row justify-content-around align-items-center my-3 pt-3 px-2">
        <section className="mb-3 mb-lg-0">
          <h3>
            Soy Felix Eloy Lamas, programador Fullstack. <br />
            Contactame a <strong>felamas@gmail.com</strong>
          </h3>
        </section>
        <section>
          <SocialNetworks />
        </section>
      </article>

      <article className="d-flex  flex-column my-4 px-2">
        <h3>Acerca de mí.</h3>
        <section className="d-flex  flex-column flex-lg-row align-items-center ">
          <p className="me-md-4">
            En esta sección te contaré un poco sobre quién soy.
            <br />
            Soy estudiante de la carrera de Programador Universitario en la UNT
            y egresado del Curso de Programador Fullstack de Rolling Code
            Schoole.
            <br />
            Soy padre de dos hermosas niñas Lucy y Sofy, y estoy en pareja con
            Juliana.
            <br />
            Me gusta el futbol y el ciclismo. <br />
            Comencé a programar hace unos años en la facultad, mi primer
            lenguaje de programación fue C. <br />
            La facultad me dio la posibilidad de utilizar varios lenguajes. Y me
            enseño conceptos importante para el desarrollo y una base teórica
            amplia. <br />
            En 2023 me postule para una beca en Rolling Code Schoole, salí
            seleccionado y comencé el curso que me dio la posibilidad de aplicar
            conceptos ya aprendidos y conocer otra forma de aprender. Trabaje en
            grupo para poder presentar los proyectos, me dio una experiencia
            valiosa, de como se trabaja de manera colaborativa, de plantear
            objetivos, conseguir avanzar en equipo y manejo de otras
            herramientas y habilidades que son necesarias para poder crecer como
            desarrollador y también como persona.
            <br />
            Es un breve resumen de quien soy, ahora en las siguientes secciones
            te mostrare las tecnologías que conozco y los proyectos en los que
            trabajé.
          </p>
          <div>
            <img
              src={fotografy}
              alt="Fotografia familiar"
              className="col-12 col-lg-12 mb-3 mb-lg-0"
            />
          </div>
        </section>
      </article>
    </section>
  );
};

export default AboutMe;
