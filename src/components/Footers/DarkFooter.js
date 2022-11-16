/*eslint-disable*/
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import fl from "assets/img/1/footer/logfoo.png"
import Fb from "assets/img/1/footer/FB.png"
import In from "assets/img/1/footer/IG.png"

// reactstrap components
import {
 Card, CardDeck,CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const DarkFooter = (props) => {
  const {
    terminos
  } = props;
  const [modal, setModal] = useState(false);
  
  const toggle = () => setModal(!modal);
  return (
    <>
< CardDeck >
<Card className="text-center">
            <CardBody className="text-center">
            <p class="p-0 mt-2 mb-0"><b>ATENCIÓN A CLIENTES</b></p>
            <p className="m-0"><a href="tel:5513389155">&#x260f;&nbsp; Telefono</a>  &nbsp; &nbsp; &nbsp;
            <a href="mailto:atencionaclientes@jaimito.mx">&#x2709;&nbsp; E-mail</a></p>
            </CardBody>
          </Card>
<Card inverse className="text-center">
            <CardBody className="text-center">
            <img width="200px" src={fl} alt="Card image cap"  />
            </CardBody>
          </Card>
          
          <Card inverse className="text-center">
            <CardBody className="text-center">
            <a href="https://www.instagram.com/jaimito_mayordomo.virtual/" target="_blank"><img width="50px" src={In} alt="Card image cap" class="mr-3" /></a>
            <a href="https://www.facebook.com/JaimitoMayordomoVirtual" target="_blank"><img width="50px" src={Fb} alt="Card image cap" class="ml-3" /></a>
            </CardBody>
          </Card>
          <Card className="text-center">
            <CardBody className="text-center">
              <p></p> 
            </CardBody>
          </Card>
          
          <Card className="text-center">
            <CardBody className="text-center">
              <Button color="link" onClick={toggle}><br/><b><p>Términos y condiciones</p></b></Button> 
            </CardBody>
          </Card>
          </ CardDeck>

<div className="items-center">
<Modal isOpen={modal} toggle={toggle} className={terminos}>
  <ModalHeader ><b>Términos y condiciones</b></ModalHeader>
  <ModalBody>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </ModalBody>
  <ModalFooter className=" ml-auto" >
    <Button color="warning" onClick={toggle}>Aceptar</Button>{' '}
    
  </ModalFooter>
</Modal>
</div>
      </>
 
  );
}

export default DarkFooter;
