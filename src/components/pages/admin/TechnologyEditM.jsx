import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import clsx from "clsx";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { useEffect } from "react";

const TechnologyEditM = ({ showEditTech, handleCloseEditTech, technology }) => {
  const API = import.meta.env.VITE_API;
  useEffect(() => {
    if (technology) {
      formik.setFieldValue("name", technology.name, true);
      formik.setFieldValue("icon", technology.icon, true);
      formik.setFieldValue("description", technology.description, true);
    }
  }, [technology]);

  const projectSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Minimo de 4 caracteres.")
      .max(100, "Maximo 100 caracteres.")
      .required("El nombre es requerido."),
    icon: Yup.string()
      .min(4, "Minimo de 4 caracteres.")
      .max(500, "Maximo 500 caracteres.")
      .required("La imagen es requerida."),
    description: Yup.string()
      .min(4, "Minimo de 4 caracteres.")
      .max(1500, "Maximo 500 caracteres.")
      .required("La descripción es requerida."),
  });

  const initialValues = {
    name: "",
    icon: "",
    description: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: projectSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      console.log(values);
      Swal.fire({
        title: "¿Estas seguro de guardar la tecnología?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: `Cancelar`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const res = await axios.post(`${API}/technology`, values);
            if (res.status === 201) {
              formik.resetForm();
              Swal.fire(
                "La tecnología se guardado correctamente.",
                "",
                "success"
              );
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
        show={showEditTech}
        onHide={handleCloseEditTech}
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
              <Form.Group controlId="imageProject" className="col-lg my-2">
                <Form.Label className="mb-1">Logo</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="Feldev"
                  name="icon"
                  {...formik.getFieldProps("icon")}
                  className={clsx(
                    "form-control",
                    {
                      "is-invalid": formik.touched.icon && formik.errors.icon,
                    },
                    {
                      "is-valid": formik.touched.icon && !formik.errors.icon,
                    }
                  )}
                />
                {formik.touched.icon && formik.errors.icon && (
                  <div className="mt-2 text-danger fw-bolder">
                    <span role="alert">{formik.errors.icon}</span>
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
            <Button variant="secondary" onClick={handleCloseEditTech}>
              Cerrar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default TechnologyEditM;
