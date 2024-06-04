import { colors } from "../../styles/ele";

export default function Payment() {
  return (
    <section className="payment border rounded p-4">
        <h6 className="fw-bold" style={{color : colors.dark_title}}>Summary</h6>
            <ul style={{paddingLeft : '0px'}} className="border rounded mt-3">
                <li className="d-flex px-3 py-2 border-bottom justify-content-between align-items-center">Item Sub total <b>7500 DA</b></li>
                <li className="d-flex px-3 py-2 border-bottom justify-content-between align-items-center">Service externe <b>100 DA</b></li>
                <li className="d-flex px-3 py-2  justify-content-between align-items-center">
                    <b>Total</b>
                    <b>7600 DA</b>
                </li>
            </ul>
            <button className="w-100 rounded text-light fw-bold p-2" style={{backgroundColor : colors.primary}}>Go To Check Out 7600 DA</button>
            <p style={{color : colors.gray_small,fontSize : '12px'}} className="mt-3">By placing your order, you agree to be bound by the Freshcart Terms of Service and Privacy Policy.</p>
            <h6 className="mt-3 fw-bold text-capitalize" style={{color : colors.dark_title}}>Add code promo</h6>
            <input type="text" name="code" id="" placeholder="exp:Xy3Hq" className="rounded border px-2 py-1 w-100 mt-3"/>
            <p style={{color : colors.gray_small,fontSize : '12px'}} className="mt-3">Terms & Conditions apply</p>
    </section>
  )
}
