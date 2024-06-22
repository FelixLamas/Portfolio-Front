import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import clsx from "clsx";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { useEffect } from "react";

const ProjectEditM = ({ showEdit, handleCloseEdit, project , getProjects}) => {
  const API = import.meta.env.VITE_API;
  useEffect(() => {
    if (project) {
      formik.setFieldValue("name", project.name || "", true);
      formik.setFieldValue("url", project.url || "", true);
      formik.setFieldValue("repository", project.repository || "", true);
      formik.setFieldValue("image", project.image || "", true);
      formik.setFieldValue("description", project.description || "", true);
    }
  }, [project]);

  const projectSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Minimo de 4 caracteres.")
      .max(100, "Maximo 100 caracteres.")
      .required("El nombre es requerido."),
    url: Yup.string()
      .min(4, "Minimo de 4 caracteres.")
      .max(500, "Maximo 200 caracteres.")
      .required("La url es requerida."),
    repository: Yup.string()
      .min(4, "Minimo de 4 caracteres.")
      .max(500, "Maximo 200 caracteres.")
      .required("El repositorio es requerido."),
    image: Yup.string()
      .min(4, "Minimo de 4 caracteres.")
      .max(500, "Maximo 200 caracteres.")
      .required("La imagen es requerida."),
    description: Yup.string()
      .min(4, "Minimo de 4 caracteres.")
      .max(1500, "Maximo 500 caracteres.")
      .required("La descripción es requerida."),
  });

  const initialValues = {
    name: "",
    url: "",
    repository: "",
    image: "",
    description: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: projectSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
     
      Swal.fire({
        title: "¿Estas seguro de editar el proyecto?",
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: `Cancelar`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const res = await axios.put(`${API}/project/update/${project._id}`, values);
            if (res.status === 200) {
              formik.resetForm();
              getProjects();
              Swal.fire("Proyecto guardado correctamente.", "", "success");
              handleCloseEdit();
            }
          } catch (error) {
            console.error(error);
          }
        }
      });
    },
  });

  return (
    <section>
      <Modal
        size="lg"
        show={showEdit}
        onHide={handleCloseEdit}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <div className="row">
              <Form.Group controlId="nameProject" className="col-lg my-2">
                <Form.Label className="mb-1">Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Feldev"
                  name="name"
                  {...formik.getFieldProps("name")}
                  className={clsx(
                    "form-control",
                    {
                      "is-invalid": formik.touched.name && formik.errors.name,
                    },
                    {
                      "is-valid": formik.touched.name && !formik.errors.name,
                    }
                  )}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="mt-2 text-danger fw-bolder">
                    <span role="alert">{formik.errors.name}</span>
                  </div>
                )}
              </Form.Group>
              <Form.Group controlId="urlProject" className="col-lg my-2">
                <Form.Label className="mb-1">URL</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="Feldev"
                  name="url"
                  {...formik.getFieldProps("url")}
                  className={clsx(
                    "form-control",
                    {
                      "is-invalid": formik.touched.url && formik.errors.url,
                    },
                    {
                      "is-valid": formik.touched.url && !formik.errors.url,
                    }
                  )}
                />
                {formik.touched.url && formik.errors.url && (
                  <div className="mt-2 text-danger fw-bolder">
                    <span role="alert">{formik.errors.url}</span>
                  </div>
                )}
              </Form.Group>
            </div>
            <div className="row">
              <Form.Group controlId="repositoryProject" className="col-lg my-2">
                <Form.Label className="mb-1">Repositorio</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="Feldev"
                  name="repository"
                  {...formik.getFieldProps("repository")}
                  className={clsx(
                    "form-control",
                    {
                      "is-invalid":
                        formik.touched.repository && formik.errors.repository,
                    },
                    {
                      "is-valid":
                        formik.touched.repository && !formik.errors.repository,
                    }
                  )}
                />
                {formik.touched.repository && formik.errors.repository && (
                  <div className="mt-2 text-danger fw-bolder">
                    <span role="alert">{formik.errors.repository}</span>
                  </div>
                )}
              </Form.Group>
              <Form.Group controlId="imageProject" className="col-lg my-2">
                <Form.Label className="mb-1">URL Imagen</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="Feldev"
                  name="image"
                  {...formik.getFieldProps("image")}
                  className={clsx(
                    "form-control",
                    {
                      "is-invalid": formik.touched.image && formik.errors.image,
                    },
                    {
                      "is-valid": formik.touched.image && !formik.errors.image,
                    }
                  )}
                />
                {formik.touched.image && formik.errors.image && (
                  <div className="mt-2 text-danger fw-bolder">
                    <span role="alert">{formik.errors.image}</span>
                  </div>
                )}
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="descriptionProject">
              <Form.Label className="mb-1">Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="description"
                {...formik.getFieldProps("description")}
                className={clsx(
                  "form-control",
                  {
                    "is-invalid":
                      formik.touched.description && formik.errors.description,
                  },
                  {
                    "is-valid":
                      formik.touched.description && !formik.errors.description,
                  }
                )}
              />
              {formik.touched.description && formik.errors.description && (
                <div className="mt-2 text-danger fw-bolder">
                  <span role="alert">{formik.errors.description}</span>
                </div>
              )}
            </Form.Group>

            <Button variant="primary" type="submit">
              Guardar
            </Button>
            <Button variant="secondary" onClick={handleCloseEdit}>
              Cerrar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default ProjectEditM;
