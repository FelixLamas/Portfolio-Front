import fotografy from "../../../../public/principal.jpg";


import "../../../App.css";

const AboutMe = () => {
  return (
  <section className="container my-3">
    {/* Contenedor principal con fondo gris unificado */}
    <section className="bg-custon-am p-4 p-lg-5 shadow-sm">
      
      {/* Fila de Encabezado: Nombre y Contacto */}
      <div className="row mb-4">
        <div className="col-12">
          <h3 className="mb-2">
  Soy <strong>Felix Eloy Lamas</strong> | Data Engineer & Analytics Specialist.
</h3>
          <p className="fs-5">
            Contactame en: <strong>felamas@gmail.com</strong>
          </p>
        </div>
      </div>

      <hr className="my-4" />

      {/* Fila de Contenido: Texto e Imagen */}
      <div className="row align-items-center">
        
        {/* Columna de Texto (7/12 del ancho en pantallas grandes) */}
        <div className="col-12 col-lg-7">
          <article>
            <h5 className="fw-bold text-primary-custom">🚀 Mi camino profesional</h5>
            <p>
              Vengo del mundo del desarrollo Fullstack, lo que me dio una base lógica y técnica muy sólida. Sin embargo, mi pasión por optimizar procesos y estructurar información me llevó a especializarme en los datos.
            </p>
            <p>
              Actualmente, me desempeño como <strong>Analista de Datos en Teleperformance</strong>, donde mi enfoque ha evolucionado hacia la ingeniería: hoy paso mis días diseñando e implementando <strong>procesos ETL y automatizaciones</strong> de flujos de datos para hacer los reportes más eficientes y precisos.
            </p>
          </article>

          <article className="mt-4">
            <h5 className="fw-bold text-primary-custom">📚 Formación y Evolución</h5>
            <p>
              Mi base académica comenzó en la UNT (Programador Universitario), donde aprendí la importancia de la teoría computacional con C. Luego, mi paso por Rolling Code School me enseñó el valor del trabajo colaborativo, el cumplimiento de objetivos en equipo y el desarrollo ágil.
            </p>
            <p>
  Hoy, sigo en constante movimiento: finalicé la formación de <strong>Data Engineer en Coderhouse</strong> y completé el bootcamp de ingeniería de datos enfocado en <strong>Microsoft Fabric en Código Facilito</strong>. Mi objetivo continúa siendo especializarme cada vez más en <strong>arquitecturas cloud</strong> y el procesamiento avanzado de datos.
</p>
          </article>

          <article className="mt-4">
            <h5 className="fw-bold text-primary-custom">🏠 Fuera del código</h5>
            <p>
              Soy el orgulloso padre de Lucy y Sofy, y comparto mi vida con Juliana. 
              Me encanta el futbol y el ciclismo.
            </p>
          </article>
        </div>

        {/* Columna de Imagen (5/12 del ancho en pantallas grandes) */}
        <div className="col-12 col-lg-5 text-center mt-4 mt-lg-0">
          <img
            src={fotografy}
            alt="Fotografia familiar"
            className="img-fluid rounded shadow-lg border border-light"
            style={{ maxHeight: "450px", objectFit: "cover" }}
          />
        </div>

      </div>
    </section>
  </section>
);
};

export default AboutMe;
