import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";
import clsx from "clsx";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";

const CreateProject = () => {
  const API = import.meta.env.VITE_API;

  const projectSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Minimo de 4 caracteres.")
      .max(100, "Maximo 100 caracteres.")
      .required("El nombre es requerido."),
    url: Yup.string()
      .min(4, "Minimo de 4 caracteres.")
      .max(200, "Maximo 200 caracteres.")
      .required("La url es requerida."),
    repository: Yup.string()
      .min(4, "Minimo de 4 caracteres.")
      .max(200, "Maximo 200 caracteres.")
      .required("El repositorio es requerido."),
    image: Yup.string()
      .min(4, "Minimo de 4 caracteres.")
      .max(200, "Maximo 200 caracteres.")
      .required("La imagen es requerida."),
    description: Yup.string()
      .min(4, "Minimo de 4 caracteres.")
      .max(500, "Maximo 500 caracteres.")
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
      console.log(values);
      Swal.fire({
        title: "¿Estas seguro de guardar el proyecto?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardas",
        denyButtonText: `Cancelar`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const res = await axios.post(`${API}/project`, values);
            if (res.status === 201) {
              formik.resetForm();
              Swal.fire("Proyecto guardado correctamente.", "", "success");
            }
          } catch (error) {
            console.error(error);
          }
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    },
  });

  return (
    <section className="container my-3">
      <section className="d-flex flex-row justify-content-between my-3">
        <h3>Crear Proyecto</h3>
        <Link to="../adminProjects" relative="path">
          <RiArrowGoBackFill className="fs-2 mx-3" />
        </Link>
      </section>
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
      </Form>
    </section>
  );
};

export default CreateProject;
