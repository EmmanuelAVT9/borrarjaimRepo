/*eslint-disable*/
import React from "react";
import Abc from "assets/img/1/s1/logo.png";
import Bcd from "assets/img/1/s1/QR.png";
import ios from "assets/img/1/s1/appstore.png";
import and from "assets/img/1/s1/google.png";
// reactstrap components
import {  Card, Row, Col } from "reactstrap";
// core components

function IndexHeader() {


  return (
    <>

      
        <div >

          <Row>
            <Col sm="8" className="text-center">
              <Card body >
                <img src={Abc} width="650" class="my-3"/>
                <h2><b>¡Descárgala ahora mismo!</b></h2>
                <h5>Y comienza a disfrutar de los beneficios que tiene pedirle a <ama><b>"Jaimito"</b></ama></h5>
              </Card>
            </Col>
            <Col sm="4" className="text-center">
              <Card body>
              <br/><br/><img src={Bcd} width="200px" /><br/><br/>
              <a href="https://apps.apple.com/mx/app/jaimito/id1547081528" target="_blank"><img src={ios}  width="100px"className="mr-2"  /></a><a href="https://play.google.com/store/apps/details?id=com.genexus.Jaimito"><img src={and} width="100px" className="ml-2"/></a>
              </Card>
            </Col>
          </Row>
        </div>
      
    </>
  );
}

export default IndexHeader;
