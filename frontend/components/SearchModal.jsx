'use client'
import { Close } from "../svg/bag";
import { colors, pallet } from "../styles/ele";
import { useState } from "react";
export default function SearchModal({open,setOpen}) {
  const [count , setCount] = useState(0)
  return (
    <div className="searchModal">
        <div className="modalHead d-flex justify-content-between border-bottom py-3 px-2">
            <div>
                <h3 style={{marginBottom : '0px'}}>Search</h3>
                <p style={{marginBottom : '0px',color : colors.gray_p}}>Search for your favorite pastries like croissants, éclairs, and more in our shop</p>
            </div>
            <Close state={open} setState={setOpen} type={"close"}/>
        </div>
        <div className="d-flex gap-3 mt-3">
            <input className="search_input px-2 py-1 rounded w-100" type="text" name="" id="" placeholder="exp:Madlan"/>
            <button className="rounded px-2 py-1" style={{color : 'white',backgroundColor : colors.primary}}>Search</button>
        </div>
        <div className="mt-3 border-bottom pb-3">
            <small>Product number : <b>{count}</b></small>
        </div>
        <div className="search_product">

        </div>
    </div>
  )
}
