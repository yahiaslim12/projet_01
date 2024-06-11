'use client'
import { Modal ,Box} from "@mui/material";
import { colors } from "../../styles/ele";
import { useState } from "react";
export default function Payment({som,openC,closeOpenC,openOpenC,text,handleText,confirm_cmd}) {
  
  return (
    <section className="payment border rounded p-4">
        <h6 className="fw-bold" style={{color : colors.dark_title}}>Summary</h6>
            <ul style={{paddingLeft : '0px'}} className="border rounded mt-3">
                <li className="d-flex px-3 py-2 border-bottom justify-content-between align-items-center">Item Sub total <b>{som} DA</b></li>
                <li className="d-flex px-3 py-2 border-bottom justify-content-between align-items-center">Service externe <b>700 DA</b></li>
                <li className="d-flex px-3 py-2  justify-content-between align-items-center">
                    <b>Total</b>
                    <b>{som + 700} DA</b>
                </li>
            </ul>
            <button className="w-100 rounded text-light fw-bold p-2" style={{backgroundColor : colors.primary}} onClick={()=>openOpenC()}>Command</button>
            <p style={{color : colors.gray_small,fontSize : '12px'}} className="mt-3">By placing your order, you agree to be bound by the Freshcart Terms of Service and Privacy Policy.</p>
            <h6 className="mt-3 fw-bold text-capitalize" style={{color : colors.dark_title}}>Information (optional) </h6>
            <input type="text" name="code" id="" value={text} onChange={(e)=>handleText(e)} placeholder="exp:Any Notice" className="rounded border px-2 py-1 w-100 mt-3"/>
            <h6 className="mt-3 fw-bold text-capitalize" style={{color : colors.dark_title}}>Add code promo</h6>
            <input type="text" name="code" id="" placeholder="exp:Xy3Hq" className="rounded border px-2 py-1 w-100 mt-3"/>
            <p style={{color : colors.gray_small,fontSize : '12px'}} className="mt-3">Terms & Conditions apply</p>
            <Modal open = {openC} onClose = {()=>closeOpenC()}>
               <Box className = 'commandModal'>
                   <div className="border-bottom px-2 py-3">
                      <h3>Command Confirmation</h3>
                      <p>you should confirme or cancel your command</p>
                   </div>
                   <div className="d-flex gap-3 px-2 mt-3">
                     <button className="w-50 btn btn-danger text-light rounded" onClick={()=>closeOpenC()}>Cancel</button>
                     <button className="w-50 btn btn-dark text-light rounded" onClick={()=>confirm_cmd()}>Confirm</button>
                   </div>
               </Box>
            </Modal>
    </section>
  )
}
