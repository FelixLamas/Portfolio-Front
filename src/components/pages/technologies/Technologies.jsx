import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

const Technologies = () => {
  const techCategories = [
    {
      title: "1. Ingestión & Streaming (Data Ingestion)",
      icon: "⚡",
      badgeBg: "primary",
      description: "Captura de eventos en tiempo real y flujos batch. Aplicación de patrones de resiliencia (at-least-once, idempotencia, DLQ) y consumo de APIs/bases relacionales.",
      skills: [
        "Apache Kafka",
        "Kafka Connect",
        "Schema Registry (Avro)",
        "Python (Pandas, Scripts)",
        "APIs REST & CDC",
        "Microsoft Fabric (Dataflows Gen2)"
      ]
    },
    {
      title: "2. Almacenamiento & Procesamiento (Storage & Compute)",
      icon: "🛢️",
      badgeBg: "dark",
      description: "Persistencia de datos en formatos columnarios comprimidos y procesamiento distribuido a gran escala bajo arquitectura de Data Lake / Lakehouse.",
      skills: [
        "Apache Spark (PySpark)",
        "DuckDB",
        "MinIO / AWS S3",
        "Parquet / Avro / ORC",
        "PostgreSQL & SQL Server",
        "OneLake / Delta Lake"
      ]
    },
    {
      title: "3. Transformación & Gobernanza (Data Modeling & QA)",
      icon: "📊",
      badgeBg: "danger",
      description: "Modelado dimensional (Kimball / Estrella), transformaciones versionadas mediante SQL modular, pruebas automáticas de calidad y linaje de datos.",
      skills: [
        "dbt (data build tool)",
        "T-SQL / PostgreSQL",
        "Modelado en Estrella",
        "Data Quality Checks",
        "DataHub (Metadata & Lineage)",
        "Power BI & DAX"
      ]
    },
    {
      title: "4. Orquestación, Infraestructura & CI/CD",
      icon: "⚙️",
      badgeBg: "secondary",
      description: "Programación y monitoreo de DAGs, automatización de entornos de desarrollo reproducibles mediante contenedores y flujos de integración continua.",
      skills: [
        "Apache Airflow",
        "Docker & Docker Compose",
        "GitHub Actions (CI/CD)",
        "Git & GitFlow",
        "Prometheus & Grafana",
        "Linux / Bash"
      ]
    }
  ];

  return (
    <section className="container my-3" id="technology">
      {/* Contenedor principal con el fondo unificado */}
      <section className="bg-custon-am p-4 p-lg-5 rounded shadow-sm">
        
        <div className="row align-items-center">
          
          {/* Columna de Texto */}
          <div className="col-12 col-lg-7">
            <h2 className="fw-bold">Tecnologías & Stack de Datos</h2>
            <p className="fs-5">
              En esta sección te presento mi stack técnico, estructurado bajo el paradigma del{" "}
              <strong>Modern Data Stack (MDS)</strong> y fortalecido tras completar el programa de{" "}
              <strong>Ingeniería de Datos en Coderhouse</strong> y mi certificación del <strong>Bootcamp Ingeniero de Datos en Fabric</strong>.
            </p>
            <p className="text-muted">
              Herramientas y patrones organizados según el ciclo de vida del dato: desde la ingestión y el procesamiento distribuido, hasta el modelado, orquestación y gobernanza.
            </p>
          </div>

          {/* Columna de Imagen */}
          <div className="col-12 col-lg-5 text-center mt-4 mt-lg-0">
            <img
              src="https://i.pinimg.com/564x/dc/96/36/dc9636358debe5e52ae70dea2c94d088.jpg"
              alt="Logo de lenguajes de programación"
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "300px", width: "100%", objectFit: "cover" }}
            />
          </div>

        </div>

        <hr className="my-4" />

        {/* Grilla de Cards con el Stack Tecnológico */}
        <Row className="g-4 mt-2">
          {techCategories.map((cat, idx) => (
            <Col key={idx} xs={12} md={6}>
              <Card className="h-100 shadow-sm border-0 bg-light">
                <Card.Body className="d-flex flex-column p-4">
                  <Card.Title className="d-flex align-items-center fs-5 fw-bold mb-3 text-dark">
                    <span className="me-2 fs-4">{cat.icon}</span>
                    {cat.title}
                  </Card.Title>
                  <Card.Text className="text-secondary flex-grow-1">
                    {cat.description}
                  </Card.Text>
                  <div className="mt-3">
                    {cat.skills.map((skill, sIdx) => (
                      <Badge 
                        key={sIdx} 
                        bg={cat.badgeBg} 
                        className="me-2 mb-2 p-2 fs-6 fw-normal"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

      </section>
    </section>
  );
};

export default Technologies;