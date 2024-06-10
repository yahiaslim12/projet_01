'use client'
import { useRouter } from "next/navigation";
import { colors } from "../../styles/ele";
import { Add, List } from "../../svg/bag";
import Link from "next/link";
import { useContext } from "react";
import { useSession } from "next-auth/react";
import AuthContext from "../AuthProvider";
export default function Daily({id,src,price,desc,title,words}) {
  const router = useRouter()
  const { openL, change, handleChange, handleOpenL ,closeModalL ,openModalL} = useContext(AuthContext);

  const toProduct = (identifier)=>{
     router.push(`./${identifier}`)
  }
  const {data : session,status} = useSession()
  const addBag = (identifier)=>{
     if(session){
        console.log('add to bag')
     }else{
        openModalL()
     }

  }
  return (
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
  );
}
