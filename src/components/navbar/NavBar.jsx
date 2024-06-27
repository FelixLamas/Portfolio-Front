import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";

import { BsDoorOpen } from "react-icons/bs";

import { BsDoorClosed } from "react-icons/bs";

import AdminContext from "../context/AdminContext";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Login from "../pages/admin/Login";
import("../../App.css");
import logo from "../../../public/logo.jpg";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const { currentAdmin, setCurrentAdmin, RemoveAuth } =
    useContext(AdminContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const Logout = () => {
    RemoveAuth();
    setCurrentAdmin(undefined);
    navigate("/");
  };
  return (
    <Navbar expand="lg" className="bg-custom" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <img src={logo} className=""></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className={"nav-link fs-5"}>
              Inicio
            </NavLink>
            <NavLink
              to="/technologies"
              className={`nav-link fs-5
              ({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "" `}
            >
              Tecnologías
            </NavLink>
            <NavLink
              to="/projects"
              className={`nav-link fs-5 ({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "" `}
            >
              Proyectos
            </NavLink>
          </Nav>

          {currentAdmin !== undefined && (
            <NavLink
              to="/adminOptions"
              className={"btn btn-nav-custom mx-1 nav-link-custom"}
            >
              <BsPencilSquare className="fs-4" />
            </NavLink>
          )}
          {currentAdmin === undefined && (
            <Button onClick={handleShow} className="btn-nav-custom">
              <BsDoorOpen className="fs-4" />
            </Button>
          )}
          {currentAdmin !== undefined && (
            <Button onClick={Logout} className="btn-nav-custom">
              <BsDoorClosed className="fs-4" />
            </Button>
          )}
          <Login show={show} handleClose={handleClose} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
