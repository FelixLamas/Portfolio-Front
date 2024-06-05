import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const Login = ({ show, handleClose }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Bienvenido Felix</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="user">
              <Form.Control type="text" placeholder="Ingresa tu usuario." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña."
              />
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" type="submit" className="mx-2">
              Ingresar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
