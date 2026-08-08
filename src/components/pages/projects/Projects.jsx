import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const Projects = () => {
  // Configuración de Certificaciones
  const certifications = [
     {
      title: "Data Engineering",
      institution: "Coderhouse",
      date: "Cursada finalizada",
      hours: "Proyecto Integrador en corrección",
      status: "Completado",
      variant: "success",
      image: "Certificado_Data_Engineer.jpg",
      link: "Certificado_Data_Engineer.jpg"
    },
    {
      title: "Bootcamp Ingeniero de Datos en Fabric",
      institution: "Código Facilito",
      date: "21 de Marzo de 2026",
      hours: "12 semanas | 22+ hs",
      status: "Completado",
      variant: "success",
      image: "Certificado - Fabric.png", // Asegúrate de colocar la ruta de tu imagen o PDF en public
      link: "Certificado - Fabric.png"
    },
    {
      title: "Data Science I",
      institution: "Coderhouse",
      date: "07 de Enero de 2026",
      hours: "10 semanas | 20 hs",
      status: "Completado",
      variant: "success",
      image: "Certificado_Data_Science_I.png",
      link: "Certificado_Data_Science_I.png"
    },
    {
      title: "Data Analytics",
      institution: "Coderhouse",
      date: "15 de Noviembre de 2025",
      hours: "12 semanas | 46 hs",
      status: "Completado",
      variant: "success",
      image: "Certificado_Data_Analytics.png",
      link: "Certificado_Data_Analytics.png"
    },
    
    {
      title: "Fullstack Web Developer",
      institution: "RollingCode School",
      date: "Julio 2024",
      hours: "Formación intensiva web",
      status: "Completado",
      variant: "success",
      image: "Certificado_fullstack.png",
    link:  "Certificado_fullstack.png"// Podés agregar la URL del QR si lo tenés subido a alguna plataforma
} ,
   
  ];

  // Configuración de Proyectos
  const projectsList = [
    {
      title: "Pipeline de Datos Reproducible - Modern Data Stack",
      category: "Data Engineering (Proyecto Final Coderhouse)",
      description:
        "Arquitectura e implementación de un pipeline end-to-end utilizando Docker, Apache Spark / PySpark, dbt para transformaciones con SQL modular, Airflow para orquestación y MinIO como Data Lake local.",
      tech: ["PySpark", "dbt", "Apache Airflow", "Docker", "MinIO", "SQL"],
      github: "https://github.com/FelixLamas/Proyecto_Final_Data_Engineer_Coderhouse",
      status: "Completado",
    },
    {
      title: "Proyecto Final Data Science I",
      category: "Data Science & Python",
      description:
        "Desarrollo de análisis exploratorio de datos (EDA), limpieza y modelado predictivo básico en Python utilizando notebooks y librerías científicas.",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook"],
      github: "https://github.com/FelixLamas/Proyecto_Final",
      status: "Completado",
    },
    {
      title: "Análisis de Rendimiento FC Barcelona (2020-2025)",
      category: "Data Analytics & ETL",
      description:
        "Proyecto de análisis de rendimiento deportivo y métricas financieras del FC Barcelona. Incluye extracción de datos, procesos de transformación (ETL), modelado relacional/estrella y visualización analítica.",
      tech: ["Power BI", "SQL", "Power Query", "Excel", "Data Modeling"],
      github: "https://github.com/FelixLamas/Data-Analytics-Rendimiento-FCB",
      status: "Completado",
    },
    
    
  ];

  return (
    <section className="container my-3">
      <section className="bg-custon-am p-4 p-lg-5 rounded shadow-sm">
        
        {/* Banner Superior */}
        <div className="row align-items-center">
          <div className="col-12 col-lg-5 text-center mb-4 mb-lg-0">
            <img
              src="https://i.pinimg.com/564x/40/48/9a/40489abc86b6b647c69dbe1249fb98b4.jpg"
              alt="Fotografía de código"
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "300px", width: "100%", objectFit: "cover" }}
            />
          </div>

          <div className="col-12 col-lg-7 ps-lg-5">
            <h2 className="fw-bold">Proyectos & Certificaciones</h2>
            <p className="fs-5">
              Te presento mis proyectos prácticos y mi trayectoria académica. 
              Aquí podrás revisar las certificaciones obtenidas y los repositorios de GitHub con la arquitectura, el código 
              y la documentación de cada desarrollo.
            </p>
          </div>
        </div>

        <hr className="my-5" />

        {/* SECCIÓN 1: CERTIFICACIONES */}
        <div className="mb-5">
          <h3 className="fw-bold mb-4 text-dark">📜 Certificaciones & Formación</h3>
          <Row className="g-4">
            {certifications.map((cert, idx) => (
              <Col key={idx} xs={12} sm={6} lg={4}>
                <Card className="h-100 border-0 shadow-sm bg-light overflow-hidden">
                  {cert.image ? (
                    <div style={{ height: "160px", overflow: "hidden", backgroundColor: "#f0f0f0" }}>
                      <Card.Img
                        variant="top"
                        src={cert.image}
                        alt={cert.title}
                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                      />
                    </div>
                  ) : (
                    <div 
                      className="d-flex align-items-center justify-content-center bg-secondary text-white" 
                      style={{ height: "160px" }}
                    >
                      <span className="fs-4 fw-bold">Próximamente</span>
                    </div>
                  )}

                  <Card.Body className="d-flex flex-column justify-content-between p-3">
                    <div>
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <Badge bg={cert.variant}>{cert.status}</Badge>
                      </div>
                      <Card.Title className="fs-6 fw-bold mb-1">{cert.title}</Card.Title>
                      <Card.Subtitle className="text-muted fs-7 mb-2">
                        {cert.institution}
                      </Card.Subtitle>
                    </div>

                    <div className="mt-2 pt-2 border-top">
                      <small className="d-block text-secondary">{cert.date}</small>
                      <small className="d-block text-muted mb-2">{cert.hours}</small>
                      
                      {cert.link && (
                        <Button
                          variant="outline-primary"
                          size="sm"
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-100 mt-1 fw-bold fs-7"
                        >
                          👁️ Ver Certificado
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <hr className="my-5" />

        {/* SECCIÓN 2: PROYECTOS */}
        <div>
          <h3 className="fw-bold mb-4 text-dark">🚀 Proyectos Destacados</h3>
          <Row className="g-4">
            {projectsList.map((project, idx) => (
              <Col key={idx} xs={12} lg={6}>
                <Card className="h-100 border-0 shadow-sm bg-light">
                  <Card.Body className="d-flex flex-column p-4">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <small className="text-primary fw-bold text-uppercase fs-7">
                        {project.category}
                      </small>
                      <Badge bg={project.github ? "success" : "secondary"}>
                        {project.status}
                      </Badge>
                    </div>
                    
                    <Card.Title className="fw-bold fs-5 mb-3">
                      {project.title}
                    </Card.Title>
                    
                    <Card.Text className="text-secondary flex-grow-1">
                      {project.description}
                    </Card.Text>

                    <div className="mb-3">
                      {project.tech.map((t, tIdx) => (
                        <Badge key={tIdx} bg="dark" className="me-1 mb-1 p-2 fw-normal">
                          {t}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-2">
                      {project.github ? (
                        <Button
                          variant="outline-dark"
                          size="sm"
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="fw-bold"
                        >
                          🐙 Ver Repositorio en GitHub
                        </Button>
                      ) : (
                        <Button variant="outline-secondary" size="sm" disabled>
                          ⏳ Repositorio Próximamente
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

      </section>
    </section>
  );
};

export default Projects;