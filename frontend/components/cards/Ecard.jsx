'use client'
import { useRouter } from "next/navigation";
import { colors } from "../../styles/ele";
import { Add } from "../../svg/bag";
import { useSession } from "next-auth/react";
import AuthContext from "../AuthProvider";
import { useContext } from "react";
export default function Ecard({id,name,price,s_desc,b_desc,img,category,shipping,words}) {
  const router = useRouter()
  const toProduct = (identifier)=>{
     router.push(`./${identifier}`)
  }
  const { openL, change, handleChange, handleOpenL ,closeModalL ,openModalL} = useContext(AuthContext);
  const {data : session,status} = useSession()
  const addBag = (identifier)=>{
     if(session){
        console.log('add to bag')
     }else{
        openModalL()
     }

  }
  return (
    <div onClick={()=>toProduct(id)} className="ecard rounded border px-2 py-1 d-flex flex-column justify-content-between mt-3">
        <div className="one d-flex flex-column gap-1 gap-sm-0">
          <div>
           <img src={`.${img}`} alt={name} loading="lazy"/>
          </div>
            <small className="text-capitalize" style={{color : colors.gray_small, marginBottom : '0px'}}>{words}</small>
            <h6 className="fw-bold" style={{marginBottom : '0px'}}>{name}</h6>
            <p style={{marginBottom : '0px',color : colors.gray_p_2}}>{s_desc}</p>
            <h6 className="fw-bold" style={{marginBottom : '0px',color : colors.primary}}>{price} DA</h6>
        </div>
        <button onClick={()=>addBag(id)} className="two btn btn-dark rounded d-flex justify-content-center align-items-center">
          <Add color={'white'}/>
          Add
        </button>
    </div>
  )
}
