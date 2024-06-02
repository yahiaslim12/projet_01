"use client";

import React , {useState} from 'react';
import { Cart } from "../../svg/bag"
import { Card, Button } from 'react-bootstrap';

const CardComponent = () => {
    
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  return (
    <Card style={{ width: '60vw' , height : "45vh" , borderRadius: '18px' }} className="pt-3 taille-md taille-lg mb-4 borderH">
        <Card.Title className='text-center align-content-center title-md title-lg ' style={{ backgroundColor :"#85a26a", marginTop :"-3.5vh", fontSize :'1rem' , height:"6.3%", marginLeft :"12%" , marginRight :"12%" , color: "#fff" ,borderRadius: '18px'}}>HOT COOKIMINO'S</Card.Title>
        <Card.Img variant="top" src="./photos/cook.jpeg" className="px-3" style={{ height: '55%' }} />
        <Card.Body className='text-center' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' , height:"25%" }}>
        <Card.Text className='fw-bold mb-1' style={{margin :'0 30%' ,  color:"#fff" ,  backgroundColor :"#000000 " , borderRadius: '18px'}}>
            750 DA
        </Card.Text>
        <div style={{ border: '1px solid black' }} />
        <Card.Text className='fw-light text-secondary info-lg info-md' style={{color:"#14c2f7" , fontSize : "0.75rem" }}>
            Cookie sablé fourré à la pâte à tartiner. Tout juste sorti du four.
        </Card.Text>
      </Card.Body>
      <Button
      style={{
        backgroundColor: hovered ? 'black' : 'rgb(133, 162, 106)',
        borderColor: hovered ? 'black' : 'rgb(133, 162, 106)',
        color: 'white',
        width: '100%',
        height: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '7.5px' ,
        borderRadius: '18px'
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Cart />
      Buy Now
    </Button>
    </Card>
  );
}

export default CardComponent;
