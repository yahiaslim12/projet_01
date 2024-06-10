'use client'
import { useEffect, useState } from "react";
import Daily from "../cards/daily";
import Pub from "../cards/pub";
import { GET_DAILY } from "@/app/api/products";


export default function Init_Pro() {
  const [cards,setCards] = useState([])
  const GET = async() => {

    const res = await GET_DAILY([1,3,9])
    setCards(res)
  }
   useEffect(()=>{
     GET()
  },[])
  return (
    <section className="init_pro container mt-5">
        <div className="title">
            <h1 style={{marginBottom : '0px',fontSize: 'calc(1.27813rem + .3375vw)'}}>Daily Best Product</h1>
        </div>
        <div className="cards d-flex gap-2 mt-3">
            <Pub/>
            {cards.map((item)=>(
                <Daily key={item.id_product} id = {item.id_product} words={item.words} desc={item.s_desc} title={item.name} price={item.price} src={item.img} />
            ))}
        </div>
    </section>
  )
}
