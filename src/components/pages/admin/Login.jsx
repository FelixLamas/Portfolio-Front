import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import clsx from "clsx";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminContext from "../../context/AdminContext";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

const Login = ({ show, handleClose }) => {
  const { setCurrentAdmin, SaveAuth } = useContext(AdminContext);
  const API = import.meta.env.VITE_API;
  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    user: Yup.string()
      .min(4, "Minimo de 4 caracteres")
      .max(20, "Maximo de 20 caracteres")
      .required("El usuario es requerido"),
    password: Yup.string()
      .min(8, "Minimo de 8 caracteres.")
      .max(16, "Maximo de 16 caracteres.")
      .required("La contraseña es requrida.")
      .matches(
        /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
        "Formato incorrecto"
      ),
  });

  const initialValues = {
    user: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values) => {
      Swal.fire({
        title: "Iniciando sesión...!",
        allowEscapeKey: false,
        allowOutsideClick: false,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
      });
      try {
        const res = await axios.post(`${API}/admin/login`, values);
        if (res.status === 200) {
          SaveAuth(res.data);
          setCurrentAdmin(res.data);
          formik.resetForm();
          Swal.close();
          handleClose();
          navigate("/adminOptions");
        }
      } catch (error) {
        Swal.close();
        if (error.response.status) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Email y/o usuario incorrecto",
          });
        } else {
          console.error(error);
        }
      }
    },
  });
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body className="modal-custom">
          <Modal.Title className="mb-4">Bienvenido Felix</Modal.Title>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="user">
              <Form.Control
                type="text"
                placeholder="Ingresa tu usuario."
                name="user"
                {...formik.getFieldProps("user")}
                className={clsx(
                  "form-control",
                  {
                    "is-invalid": formik.touched.user && formik.errors.user,
                  },
                  {
                    "is-valid": formik.touched.user && !formik.errors.user,
                  },
                  "input-custom"
                )}
              />
              {formik.touched.user && formik.errors.user && (
                <div className="mt-2 text-danger fw-bolder">
                  <span role="alert">{formik.errors.user}</span>
                </div>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña."
                name="password"
                {...formik.getFieldProps("password")}
                className={clsx(
                  "form-control",
                  {
                    "is-invalid":
                      formik.touched.password && formik.errors.password,
                  },
                  {
                    "is-valid":
                      formik.touched.password && !formik.errors.password,
                  },
                  "input-custom"
                )}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="mt-2 text-danger fw-bolder">
                  <span role="alert">{formik.errors.password}</span>
                </div>
              )}
            </Form.Group>
            <Button onClick={handleClose} className="btn-close-modal-custom">
              Cerrar
            </Button>
            <Button type="submit" className="mx-2 btn-modal-custom">
              Ingresar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
