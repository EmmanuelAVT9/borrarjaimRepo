import React from "react";
import ios from "assets/img/1/s1/appstore.png";
import and from "assets/img/1/s1/google.png";
import LOGO from "assets/img/1/s1/Logo_1.png"
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-white");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("white");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-white");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
    
    <Navbar className={"fixed-top " } expand="lg" color="white">
      {collapseOpen ? (
        <div
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
        
            
          <div className="navbar-translate">
            <NavbarBrand
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("Inicio")
                  .scrollIntoView();
              }}
            >
              <img src={LOGO} width="200px"/>
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
            
              
              
            
              <NavItem className="text-center">
              <ama> 
              <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                  
                  
                  <b>&nbsp;¡Descarga la APP ya mismo!</b><br/></ama>
                  <a href="https://apps.apple.com/mx/app/jaimito/id1547081528" target="_blank"><img src={ios}/></a><a href="https://play.google.com/store/apps/details?id=com.genexus.Jaimito"><img src={and} /></a>
                
              </NavItem>
            </Nav>
        </Collapse>
      </Navbar>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

         
          </>
  );
}

export default IndexNavbar;
