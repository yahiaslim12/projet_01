'use client'
import { useState } from "react";
import Daily from "../cards/daily";
import Pub from "../cards/pub";


export default function Init_Pro() {
  const [cards,setCards] = useState([
    {
        id:1,
        title : 'Madlan Vany',
        desc : 'Our Madlan chocolat is crafted to be the perfect balance of taste and health.',
        price : 1500,
        src : './photos/products/madlan.png'
    },
    {
        id:2,
        title : 'Madlan Vany',
        desc : 'Our Madlan chocolat is crafted to be the perfect balance of taste and health.',
        price : 1500,
        src : "./photos/products/mad2.jpg"
    },
    {
        id:3,
        title : 'Madlan Vany',
        desc : 'Our Madlan chocolat is crafted to be the perfect balance of taste and health.',
        price : 1500,
        src : "./photos/products/madlan.png"
    }
  ])
  return (
    <section className="init_pro container mt-5">
        <div className="title">
            <h1 style={{marginBottom : '0px',fontSize: 'calc(1.27813rem + .3375vw)'}}>Daily Best Product</h1>
        </div>
        <div className="cards d-flex gap-2 mt-3">
            <Pub/>
            {cards.map((item)=>(
                <Daily key={item.id} desc={item.desc} title={item.title} price={item.price} src={item.src} />
            ))}
        </div>
    </section>
  )
}
