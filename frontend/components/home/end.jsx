'use client'
import { useState } from "react";
import Ecard from "../cards/Ecard";

export default function End() {
  const [cards,setCards] = useState([1,2,3,4,5,6,7,8])
  return (
    <section className="container mt-3 p-2" style={{padding : '0px'}}>
      <h1 style={{fontSize : 'calc(1.27813rem + .3375vw)'}}>Other Collection</h1>
        <div className="d-flex justify-content-center flex-wrap mt-3 w-100 gap-4">
          {cards.map((item,i)=>(
             <Ecard key={i}/>
          ))}
        </div>
       
    </section>
  )
}
