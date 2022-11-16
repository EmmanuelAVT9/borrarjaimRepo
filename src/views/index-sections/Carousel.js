import React from "react";
import "components/css/fonds.css";
import I from "assets/img/1/s2/Arrow_1.png"
import D from "assets/img/1/s2/Arrow_2.png"
// reactstrap components
import {
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

// core components

const items = [
  {
    src: require("assets/img/carrusel/1.png"),
   
  },
  {
    src: require("assets/img/carrusel/2.png"),
    
  },
  {
    src: require("assets/img/carrusel/3.png"),
    
  },
  {
    src: require("assets/img/carrusel/4.png"),
    
  },
];

function CarouselSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section" id="carousel" class="carr">
      <br/>
          <Row className="text-center m-0">
            <Col sm={12} className="p-0"
            >
              <Carousel 
                interval={15000}
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                
                {items.map((item) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                      
                    >
                      <img src={item.src} alt={item.altText} class="col-12" data-interval="8000"/>
                      <div className="carousel-caption" >
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <img src={I} width="20%"/>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                <img src={D} width="20%"/>
                </a>
              </Carousel>
          <div id="funciona"></div>
              
            </Col>
          </Row>
          <br/>
      </div>
    </>
  );
}

export default CarouselSection;
