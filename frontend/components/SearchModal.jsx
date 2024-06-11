'use client'
import { Close } from "../svg/bag";
import { colors, pallet } from "../styles/ele";
import { useEffect, useState } from "react";
import { Search } from "@/app/api/products";
import { useRouter } from "next/navigation";
export default function SearchModal({open,handleOpen}) { 
  const router = useRouter()
  const [count , setCount] = useState(0)
  const [cards , setCards] = useState([])
  const [value,setValue] = useState('')
  const handleSearch = async() => {
    const res = await Search(value)
    setCards(res)
  }
  const toProduct = (id)=>{
      router.push(`/${id}`)
      handleOpen()

  }
  useEffect(()=>{
    setCount(cards.length)
  },[cards.length])
  return (
    <div className="searchModal">
        <div className="modalHead d-flex justify-content-between border-bottom py-3 px-2">
            <div>
                <h3 style={{marginBottom : '0px'}}>Search</h3>
                <p style={{marginBottom : '0px',color : colors.gray_p}}>Search for your favorite pastries like croissants, éclairs, and more in our shop</p>
            </div>
            <Close state={open} setState={handleOpen} type={"close"}/>
        </div>
        <div className="d-flex gap-3 mt-3">
            <input className="search_input px-2 py-1 rounded w-100" type="text" name="search" value={value} onChange={(e)=>setValue(e.target.value)} placeholder="exp:Madlan"/>
            <button className="rounded px-2 py-1" onClick={()=>handleSearch()} style={{color : 'white',backgroundColor : colors.primary}}>Search</button>
        </div>
        <div className="mt-3 border-bottom pb-3">
            <small>Product number : <b>{count}</b></small>
        </div>
        <div className="container_of_cards" style={{overflowY : 'auto'}}>
            {cards.map((item)=>(
                <div onClick={()=>toProduct(item.id_product)} key={item.id_product} style={{height : '80px'}} className="search_product mt-2 d-flex justify-content-between px-2 py-1 align-items-center">
                    <div className="d-flex gap-2 align-items-center">
                        <img className="border rounded" src={`.${item.img}`} alt="" width={50}/>
                        <div>
                            <h6 style={{marginBottom : '0px'}}>{item.name}</h6>
                            <small className="d-none d-sm-block" style={{color : colors.gray_small ,fontSize : '12px'}}>{item.words}</small>
                        </div>
                    </div>
                    <h6 className="fw-bold" style={{color : colors.primary,fontSize : '14px'}}>{item.price} DA</h6>
            </div>
            ))}
        </div>
    </div>
  )
}
