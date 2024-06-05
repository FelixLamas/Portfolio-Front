import fotografy from "../../../public/principal.jpg";
import SocialNetworks from "../../socialNetworks/SocialNetworks";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="container ">
      <article className="d-flex flex-column flex-lg-row justify-content-around align-items-center my-4">
        <section>
          <h3>
            Me llamo Felix Eloy Lamas, soy programador Fullstack. <br />
            Contactame a felamas@gmail.com
          </h3>
        </section>
        <SocialNetworks />
      </article>

      <article className="d-flex  flex-column my-4">
        <h3>Acerca de mi.</h3>
        <section className="d-flex  flex-column flex-lg-row align-items-center ">
          <p className="me-md-4">
            En esta seccion te contare un poco sobre quien soy.
            <br />
            Tengo 36 años, soy estudiante de la carrera de Programador
            Universitario en la UNT y egresado del Curso de Programador
            Fullstack de Rolling Code Schoole.
            <br />
            Soy padre de dos hermosas niñas Lucy y Sofy, y estoy en pareja con
            Juliana.
            <br />
            Me gusta el futbol y el ciclismo. <br />
            Comence a programar hace unos años en la facultad, mi primer
            lenguaje de programación fue C. <br />
            La facultad me dio la posibilidad de utilizar varios lenguajes. Y me
            enseño conceptos importante para el desarrollo y una base teorica
            amplia. <br />
            En 2023 me postule para una beca en Rolling Code Schoole, salí
            seleccionado y comence el curso que me dio la posibilidad de aplicar
            conceptos ya aprendidos y conocer otra forma de aprender. Trabaje en
            grupo para poder presentar los proyectos, me dio una experiencia
            valiosa, de como se trabaja de manera colaborativa, de plantear
            objetivos, conseguir avanzar en equipo y manejo de otras
            herramientas y habilidades que son necesarias para poder crecer como
            desarrollador y tambien como persona.
            <br />
            Es un breve resumen de quien soy, ahora en las siguientes secciones
            te mostrare las tecnologías que conosco y los proyectos en los que
            trabaje.
          </p>
          <div>
            <img
              src={fotografy}
              alt="Fotografia familiar"
              className="col-12 col-lg-12"
            />
          </div>
        </section>
      </article>
    </section>
  );
};

export default AboutMe;
