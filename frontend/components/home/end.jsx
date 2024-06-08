'use client'
import { useEffect, useState } from "react";
import Ecard from "../cards/Ecard";
import { GET_END } from "@/app/api/products";
export default function End() {
  const [cards,setCards] = useState([])
  const GET = async ()=>{
      const res = await GET_END();
      setCards(res)
  }
  useEffect(()=>{
     GET()
  },[])
  return (
    <section className="container mt-3 p-2" style={{padding : '0px'}}>
      <h1 style={{fontSize : 'calc(1.27813rem + .3375vw)'}}>Other Collection</h1>
        <div className="d-flex justify-content-center flex-wrap mt-3 w-100 gap-4">
          {cards.map((item,i)=>(
             <Ecard 
             key={item.id_product} 
             s_desc = {item.s_desc} 
             b_desc = {item.b_desc} 
             name = {item.name} 
             price = {item.price}
             img = {item.img}
             category = {item.category}
             shipping = {item.shipping}
             words = {item.words}
             />
          ))}
        </div>
       
    </section>
  )
}
