import { colors } from "../../styles/ele";
import { Add } from "../../svg/bag";

export default function Ecard({name,price,s_desc,b_desc,img,category,shipping,words}) {
  return (
    <div className="ecard rounded border px-2 py-1 d-flex flex-column justify-content-between mt-3">
        <div className="one d-flex flex-column gap-1 gap-sm-0">
          <div>
           <img src={`.${img}`} alt={name} loading="lazy"/>
          </div>
            <small style={{color : colors.gray_small, marginBottom : '0px'}}>{words}</small>
            <h6 className="fw-bold" style={{marginBottom : '0px'}}>{name}</h6>
            <p style={{marginBottom : '0px',color : colors.gray_p_2}}>{s_desc}</p>
            <h6 className="fw-bold" style={{marginBottom : '0px',color : colors.primary}}>{price} DA</h6>
        </div>
        <button className="two btn btn-dark rounded d-flex justify-content-center align-items-center">
          <Add color={'white'}/>
          Add
        </button>
    </div>
  )
}
