import { colors } from "../../styles/ele";
import { Add } from "../../svg/bag";

export default function Ecard() {
  return (
    <div className="ecard rounded border px-2 py-1 d-flex flex-column gap-2 mt-3">
        <img src={'./photos/products/mad2.jpg'} alt=""/>
        <div>
            <small style={{color : colors.gray_small}}>Good , Healthy & Perfect</small>
            <h6 style={{color : colors.primary}}>1500 Da</h6>
            <p style={{color : colors.gray_p}}>This pastry used by succer 30g ...</p>
            <button className="mt-1 mt-sm-3 fw-bold w-100 rounded bg-dark text-light p-sm-2 "><Add color={'white'}/> Add</button>
        </div>
    </div>
  )
}
