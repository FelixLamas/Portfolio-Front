import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";
import clsx from "clsx";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CreateTechnology = () => {
  const API = import.meta.env.VITE_API;
  const navigate=useNavigate();

  const projectSchema = Yup.object().shape({
    name: Yup.string()
      .min(1, "Minimo de 1 caracteres.")
      .max(100, "Maximo 100 caracteres.")
      .required("El nombre es requerido."),
    icon: Yup.string()
      .min(4, "Minimo de 4 caracteres.")
      .max(500, "Maximo 500 caracteres.")
      .required("La imagen es requerida."),
    seniority: Yup.string()
      .min(4, "Minimo de 4 caracteres.")
      .max(1500, "Maximo 500 caracteres.")
      .required("La descripción es requerida."),
  });

  const initialValues = {
    name: "",
    icon: "",
    seniority: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: projectSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      
      Swal.fire({
        title: "¿Estas seguro de guardar la tecnología?",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Guardar",
        cancelButtonText:"Cancelar",
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
              navigate("/adminTechnologies");
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
        <h3>Crear Tecnología</h3>
        <Link to="../adminTechnologies" relative="path">
          <RiArrowGoBackFill className="fs-2 mx-3" />
        </Link>
      </section>
      <Form onSubmit={formik.handleSubmit}>
        <div className="row">
          <Form.Group controlId="nameTechnology" className="col-lg my-2">
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
          <Form.Group controlId="imageTechnologi" className="col-lg my-2">
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
        <Form.Group className="mb-3" controlId="seniorityProject">
          <Form.Label className="mb-1">Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="seniority"
            {...formik.getFieldProps("seniority")}
            className={clsx(
              "form-control",
              {
                "is-invalid":
                  formik.touched.seniority && formik.errors.seniority,
              },
              {
                "is-valid":
                  formik.touched.seniority && !formik.errors.seniority,
              }
            )}
          />
          {formik.touched.seniority && formik.errors.seniority && (
            <div className="mt-2 text-danger fw-bolder">
              <span role="alert">{formik.errors.seniority}</span>
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

export default CreateTechnology;
