"use client";
import { useState } from 'react';
import { Container, Row, Col  , Button  } from 'react-bootstrap';
import {CadeauRond , CamionRond , SupportRond} from "../svg/bag"

export default function Couv() {

  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  return (
    
    <div className="mt-5 image-container d-none d-md-block">
      <img src="./photos/bg-polygone.svg" alt="Background" className="background-image " />
      <div className="overlay">
        <Container>
          <Row >
            <Col className="text-center" style={{ marginTop:"-1.8vh" }}>
              <CadeauRond />
              <h3 className="section-title" style={{borderRight:"1px solid #85a26a" }}>FREE SHIPPING</h3>
              <p className="section-description" style={{borderRight:"1px solid #85a26a" }}>Free shipping from 3000 DA  </p>
            </Col>
            <Col className="text-center" style={{ marginTop:"-3.3vh" }}>
              <CamionRond/>
              <h3 className="section-title" style={{borderRight:"1px solid #85a26a" }}>FAST SHIPPING</h3>
              <p className="section-description" style={{borderRight:"1px solid #85a26a" }}>In less than 24 Hours </p>
            </Col>
            <Col className="text-center" style={{marginTop :"-4.6vh"}}>
              <SupportRond />
              <h3 className="section-title">ANY PROBLEM ?</h3>
              <p className="section-description">Contact us</p>
              <Button style={{backgroundColor : hovered ? "black" : "#85a26a" , borderColor :hovered ? "black" :"#85a26a" , borderRadius :"12px"}}
                     onMouseOver={handleMouseOver}
                     onMouseOut={handleMouseOut}>Click Here</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}