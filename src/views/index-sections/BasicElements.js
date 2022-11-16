import React from "react";
// react plugin used to create switch buttons
import LMT from "assets/img/1/s4/tx.png";
import LM1 from "assets/img/1/s4/Img_2.png";
import LM2 from "assets/img/1/s4/Img_2.png";
import LM3 from "assets/img/1/s4/Img_2.png";
import LM4 from "assets/img/1/s4/Img_2.png";
import LM5 from "assets/img/1/s4/Img_2.png";
import LM6 from "assets/img/1/s4/Img_2.png";
// plugin that creates slider


// reactstrap components
import {
  Container, Card, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from "reactstrap";

// core components

function BasicElements() {
  return (
    <>
      <div className="section section-basic losm" >
        <h1 class="text-center"><img width="700px" src={LMT} alt="Card image cap" class="py-4 px-2 mt-2" /></h1>

        < CardDeck >
          <Card inverse className="text-center">
            <CardBody className="text-center">
              <img width="70%" src={LM1} alt="Card image cap" class="pb-3" />
              <CardTitle tag="h2"><b>2X1</b></CardTitle>
              <hr style={{ color: "#BC9626", backgroundColor: "#BC9626", height: 3 }}></hr>
              <CardText><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </b></CardText>
            </CardBody>
          </Card>
          <Card inverse className="text-center">
            <CardBody className="text-center cthm">
             <img width="70%" src={LM2} alt="Card image cap" class="pb-3" />
             <CardTitle tag="h2"><b>2X1</b></CardTitle>
              <hr style={{ color: "#BC9626", backgroundColor: "#BC9626", height: 3 }}></hr>
              <CardText><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </b></CardText>
            </CardBody>
          </Card>
          <Card inverse className="text-center">
            <CardBody className="text-center cthm">
             <img width="70%" src={LM3} alt="Card image cap" class="pb-3" />
             <CardTitle tag="h2"><b>2X1</b></CardTitle>
              <hr style={{ color: "#BC9626", backgroundColor: "#BC9626", height: 3 }}></hr>
              <CardText><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </b></CardText>
            </CardBody>
          </Card>

        </ CardDeck>
        < CardDeck >
          <Card inverse className="text-center">
            <CardBody className="text-center cthm">
             <img width="70%" src={LM4} alt="Card image cap" class="pb-3" />
             <CardTitle tag="h2"><b>2X1</b></CardTitle>
              <hr style={{ color: "#BC9626", backgroundColor: "#BC9626", height: 3 }}></hr>
              <CardText><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </b></CardText>
            </CardBody>
          </Card>
          <Card inverse className="text-center">
            <CardBody className="text-center cthm">
             <img width="70%" src={LM5} alt="Card image cap" class="pb-3" />
             <CardTitle tag="h2"><b>2X1</b></CardTitle>
              <hr style={{ color: "#BC9626", backgroundColor: "#BC9626", height: 3 }}></hr>
              <CardText><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </b></CardText>
            </CardBody>
          </Card>
          <Card inverse className="text-center">
            <CardBody className="text-center cthm">
             <img width="70%" src={LM6} alt="Card image cap" class="pb-3" />
             <CardTitle tag="h2"><b>2X1</b></CardTitle>
              <hr style={{ color: "#BC9626", backgroundColor: "#BC9626", height: 3 }}></hr>
              <CardText><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </b></CardText>
            </CardBody>
          </Card>

        </ CardDeck>
      </div>
    </>
  );
}

export default BasicElements;
