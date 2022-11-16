import React from "react";
import a1 from "assets/img/1/s3/N1.png";
import a2 from "assets/img/1/s3/Ico_1.png";
import b1 from "assets/img/1/s3/N2.png";
import b2 from "assets/img/1/s3/Ico_2.png";
import c1 from "assets/img/1/s3/N3.png";
import c2 from "assets/img/1/s3/Ico_3.png";
import d1 from "assets/img/1/s3/N4.png";
import d2 from "assets/img/1/s3/Ico_4.png";
import "components/css/fonds.css";
// reactstrap components
import {
  Card, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from "reactstrap";

// core components

function Typography() {
  return (
    <>
      <div className="section">

        <div>
          <h1 class="text-center"><b>¿Cómo pedirle a Jaimito?</b></h1>

          < CardDeck >
            <Card className="text-center transparent">
              <CardBody className="text-center cthm">
                <img width="15%" src={a1} alt="Card image cap" class="pb-3" />
                <CardTitle tag="h5">Descarga la app.</CardTitle>
                <hr style={{ color: "#BC9626", backgroundColor: "#BC9626", height: 3 }}></hr>
                <CardText>Busca la app como "Jaimito" desde App Store para iPhone o Play Store para teléfonos Android, descárgala e instálala.</CardText>
                <img width="20%" src={a2} alt="Card image cap" />
              </CardBody>
            </Card>
            <Card class="text-center">
              <CardBody className="text-center">
                <img width="15%" src={b1} alt="Card image cap" class="pb-3" />
                <CardTitle tag="h5" >Confirma tu dirección.</CardTitle>
                <hr style={{ color: "#BC9626", backgroundColor: "#BC9626", height: 3 }}></hr>
                <CardText>Válida que te encuentres en una de las zonas de cobertura de "Jaimito" para la entrega de lo que solicites.<br /></CardText>
                <img width="40%" src={b2} alt="Card image cap" />
              </CardBody>
            </Card>
            <Card className="transparent" style={{ backgroundColor: '#ffffff', borderColor: '#333' }}>
              <CardBody className="text-center">
                <img width="15%" src={c1} alt="Card image cap" class="pb-3" />
                <CardTitle tag="h5">Pidele a Jaimito.</CardTitle>
                <hr style={{ color: "#BC9626", backgroundColor: "#BC9626", height: 3 }}></hr>
                <CardText>Elige lo que necesitas para tu fiesta, reunión o evento.</CardText><br /><br />
                <img width="40%" src={c2} alt="Card image cap" />
              </CardBody>
            </Card>
            <Card class="text-center border-0">
              <CardBody className="text-center">
                <img width="15%" src={d1} alt="Card image cap" class="pb-3" />
                <CardTitle tag="h5">Elige tu forma de pago.</CardTitle>
                <hr style={{ color: "#BC9626", backgroundColor: "#BC9626", height: 3 }}></hr>

                <CardText>Siempre te mantendremos al tanto del estado y tiempo de entrega de tu pedido.</CardText><br />
                <img width="40%" src={d2} alt="Card image cap" />
              </CardBody>
            </Card>

          </ CardDeck>
          <div id="losmas"></div>
          <br/>
          <br/>
        </div>
      </div>
    </>
  );
}

export default Typography;
