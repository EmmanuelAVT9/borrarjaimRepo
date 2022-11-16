import React, { useState } from "react";

// reactstrap components
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

// core components

function Navbars() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => React.setIsOpen(!isOpen);
  return (
    <>
      <div class="arriba col-12 p-0">
        <Navbar color="transparent" light expand="md" className="m-0 py-0">

        <div className="navbar-translate ml-auto ">
            
        <NavbarBrand className="m-0"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document
                .getElementById("Inicio")
                  .scrollIntoView();
              }}
              
            >
            <ama><b>Inicio </b></ama>
            </NavbarBrand>
            <b><ama>&nbsp;&nbsp;|&nbsp;&nbsp;</ama></b>
            
            <NavbarBrand className="m-0"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("funciona")
                  .scrollIntoView();
              }}
            >
            <ama><b>¿Cómo Funciona?</b></ama>
            </NavbarBrand>
            <b><ama>&nbsp;&nbsp;|&nbsp;&nbsp;</ama></b>
            <NavbarBrand
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document
                .getElementById("losmas")
                  .scrollIntoView();
              }}
            >
            <ama><b>lo más vendido</b></ama>
            </NavbarBrand>
            </div>
        </Navbar>
      </div>
     
    </>
  );
}

export default Navbars;
