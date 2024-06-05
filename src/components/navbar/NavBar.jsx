import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Login from "../pages/admin/Login";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar expand="lg" className="" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className={"nav-link"}>
              Inicio
            </NavLink>
            <NavLink
              to="/technologies"
              className={`nav-link 
              ({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "" `}
            >
              Tecnologías
            </NavLink>
            <NavLink
              to="/projects"
              className={`nav-link ({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "" `}
            >
              Proyectos
            </NavLink>
          </Nav>
          <Button variant="dark" onClick={handleShow}>
            <FaRegEdit className="fs-4" />
          </Button>
          <Login show={show} handleClose={handleClose} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
