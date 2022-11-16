import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page
import BasicElements from "./index-sections/BasicElements.js";
import Navbars from "./index-sections/Navbars.js";
import Typography from "./index-sections/Typography.js";
import Carousel from "./index-sections/Carousel.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
    <div  id="Inicio"></div>
      <IndexNavbar />
      <IndexHeader />
      <Carousel />
     
      <Typography />
      
      <BasicElements />
      <DarkFooter />
      <Navbars/>
      <hr className="col-12 my-5 p-0"  style={{color: "#BC9626", position:"fixed",top:"34pt" ,backgroundColor: "#BC9626",height: 4 }}></hr>

    </>
  );
}

export default Index;
