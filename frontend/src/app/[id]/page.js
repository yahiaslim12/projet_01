'use client'
import styles from './prodStyle.css'
import ProductContainer from "../../../components/ProductContainer"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Product({params}) {

    
  return (
    <>
          <ProductContainer id={params.id}/>
    </>
  )
}
