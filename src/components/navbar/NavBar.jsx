import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { IoExit } from "react-icons/io5";
import AdminContext from "../context/AdminContext";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Login from "../pages/admin/Login";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const {currentAdmin, setCurrentAdmin,RemoveAuth}= useContext(AdminContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate=useNavigate();

  const Logout=()=>{
    RemoveAuth();
    setCurrentAdmin(undefined);
    navigate("/")
  }
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
          
          
          {currentAdmin!==undefined && <NavLink
            to="/adminOptions"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""}
          >
            <FaRegEdit className="fs-4" />
          </NavLink>}
          {
            currentAdmin===undefined && <Button variant="dark" onClick={handleShow}>
            <FiLogIn className="fs-4" />
            </Button>
          }
          {
            currentAdmin!==undefined && <Button variant="dark" onClick={Logout}>
            <IoExit className="fs-4"/>
           </Button>
          }
          <Login show={show} handleClose={handleClose} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
