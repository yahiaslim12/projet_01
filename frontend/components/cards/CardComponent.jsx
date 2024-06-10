"use client";

import React , {useState} from 'react';
import { Cart } from "../../svg/bag"
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';


const CardComponent = ({product}) => {
    
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  return (
    <Link style={{textDecoration:"none"}} href={"./"+product.id_product}>
    <Card style={{ width: '60vw' , height : "45vh" , borderRadius: '18px' , cursor :"pointer" }} className="pt-3 taille-md taille-lg mb-4 borderH">
        <Card.Title className='text-center align-content-center title-md title-lg ' style={{ backgroundColor :"#85a26a", marginTop :"-3.5vh", fontSize :'1rem' , height:"6.3%", marginLeft :"12%" , marginRight :"12%" , color: "#fff" ,borderRadius: '18px'}}>{product.name}</Card.Title>
        <Card.Img variant="top" src={"."+product.img} alt={'photo '+product.name} className="px-3" style={{ height: '55%' , objectFit :'cover' }} />
        <Card.Body className='text-center' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' , height:"25%" }}>
        <Card.Text className='fw-bold mb-1' style={{margin :'0 30%' ,  color:"#fff" ,  backgroundColor :"#000000 " , borderRadius: '18px'}}>
            {Math.floor(product.price)} DA
        </Card.Text>
        <div style={{ border: '1px solid black' }} />
        <Card.Text className='fw-light text-secondary info-lg info-md' style={{ fontSize : "0.75rem" }}>
            {product.s_desc}
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
    </Link>
  );
}

export default CardComponent;