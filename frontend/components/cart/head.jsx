'use client'

import { useState } from "react"
import { colors } from "../../styles/ele"

export default function Head() {
  const [count,setCount] = useState(0)
  return (
    <div className="container mt-5">
        <h1 style={{color : colors.dark_title,fontSize : "calc(1.34375rem + 1.125vw)"}} className="text-dark fw-bold">Shop Cart</h1>
        <p style={{color : colors.gray_p_2,fontWeight : "500 !important"}}>This bag have <b>{count}</b> products</p>
    </div>
  )
}
