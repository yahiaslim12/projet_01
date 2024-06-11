'use client'
import { useState , useEffect } from "react";
import { useRouter  } from "next/navigation";
import { colors } from "../../styles/ele";
import { Add, List } from "../../svg/bag";
import Link from "next/link";
import { useContext } from "react";
import { useSession } from "next-auth/react";
import AuthContext from "../AuthProvider";
import { addIt } from "@/app/api/setPanier";
import { Alert } from '@mui/material';
export default function Daily({id,src,price,desc,title,words}) {
  const router = useRouter()
  const { openL, change, handleChange, handleOpenL ,closeModalL ,openModalL} = useContext(AuthContext);
  const [my_alert,setMy_alert] = useState({
   open : false,
   msg : '',
   backgroundColor: "",
 })


  const toProduct = (identifier)=>{
     router.push(`./${identifier}`)
  }
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
    <div className="daily border rounded">
      <img className="rounded" src={`.${src}`} alt={title} />
      <div className="p-2 d-flex flex-column justify-content-between">

        <div>
            <small style={{ color: colors.gray_small }} className="text-capitalize">
            {words}
            </small>
            <h6 className="mt-2" style={{ marginBottom: "0px" }}>{title}</h6>
            <p
            className="mt-1 fw-bold text-uppercase"
            style={{ marginBottom: "0px", fontWeight: "500 !important" }}
            >
            {price} da
            </p>
            <p style={{color : colors.gray_p}}>
                {desc}
            </p>
            
        </div>
           <div>
            <button onClick={()=>addBag(id)} className="btn btn-dark rounded text-light w-100 d-flex align-items-center justify-content-center"><Add color={'white'}/> Bag</button>
           <button
            style={{
                backgroundColor: colors.primary,
                fontWeight: "500 !important",
            }}
            className="text-light w-100 px-2 mt-2 py-2 d-flex gap-2 align-items-center rounded justify-content-center"
            onClick={()=>toProduct(id)}
            >
            <List color="white" /> Show Detail
            </button>
           </div>
      </div>
    </div>
          {
            my_alert.open && (
                <Alert variant="filled" className="my_alert" style={{position:"fixed" , zIndex :"10" ,backgroundColor : my_alert.backgroundColor}}>
                    {my_alert.msg}
                </Alert>
            )
        }
        </>
  );
}
