'use client'
import { useState , useEffect } from "react";
import { useRouter } from "next/navigation";
import { colors } from "../../styles/ele";
import { Add } from "../../svg/bag";
import { useSession } from "next-auth/react";
import AuthContext from "../AuthProvider";
import { useContext } from "react";
import { addIt } from "@/app/api/setPanier";
import { Alert } from '@mui/material';
export default function Ecard({id,name,price,s_desc,b_desc,img,category,shipping,words}) {
  const router = useRouter()
  const toProduct = (identifier)=>{
     router.push(`./${identifier}`)
  }
  const { openL, change, handleChange, handleOpenL ,closeModalL ,openModalL} = useContext(AuthContext);
  const [my_alert,setMy_alert] = useState({
    open : false,
    msg : '',
    backgroundColor: "",
  })
 
  const {data : session,status} = useSession()
  const [values,setValues] = useState({
    id_produit : id ,
    email : session && session.user.email,
    qte : 1
 })
 useEffect(()=>{
    setValues({
       id_produit : id ,
       email : session && session.user.email,
       qte : 1
    })
   },[id, status] )
   const addBag = (identifier)=>{
      if(session){
         addIt99(values)
      }else{
         openModalL()
      }
   }
   const addIt99 = async(e)=>{
    const res = await addIt(values);
    if(res.rows===1){
       setMy_alert(prev => ({
         open : true,
         msg : 'Added to your bag'
     }))
     setTimeout(()=>{
         setMy_alert(prev =>({
             ...prev,
             open : false,
             backgroundColor : "#85a26a"
         }))
     },4000)
     }else {
       setMy_alert(prev => ({
         open : true,
         msg : 'Already added',
         backgroundColor : "red"
     }))
     setTimeout(()=>{
         setMy_alert(prev =>({
             ...prev,
             open : false,
         }))
     },4000)
     }
   }
  return (
    <>
    <div className="ecard rounded border px-2 py-1 d-flex flex-column justify-content-between mt-3">
        <div onClick={()=>toProduct(id)} className="one d-flex flex-column gap-1 gap-sm-0">
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
              {
                my_alert.open && (
                    <Alert variant="filled" className="my_alert" style={{position:"fixed" , zIndex :"10" ,backgroundColor : my_alert.backgroundColor}}>
                        {my_alert.msg}
                    </Alert>
                )
            }
            </>
  )
}
