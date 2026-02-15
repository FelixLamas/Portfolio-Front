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
import SocialNetworks from "../socialNetworks/SocialNetworks";
import("../../App.css");


const NavBar = () => {
  
  return (
    <Navbar expand="lg" className="bg-custom" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <img src="/logo.svg" alt="FelDE Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
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
        </Navbar.Collapse>
        <SocialNetworks />
      </Container>
    </Navbar>
  );
};

export default NavBar;
