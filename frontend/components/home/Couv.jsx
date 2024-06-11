'use client'
import { Typewriter } from "react-simple-typewriter"
import { Avatar,Rating } from "@mui/material"
import { colors } from "../../styles/ele"

export default function Couv() {
  return (
    
    <section className='couv container mt-3 d-flex align-items-center justify-content-center'>
         <div className='part_one'>
             <h1 style={{marginBottom : '0px'}} className="fw-bold">Welcome to TastrovalDZ 
                <span style={{color :colors.primary}}>
                    <Typewriter words={[' Your Path to Healthy Choices in Pastries']} cursor typeSpeed={100} loop = {0}/>
                </span>
            </h1>
             <p style={{marginBottom : '0px'}} className="mt-3">
             Discover a variety of pastries made with premium ingredients and love. Your journey to better health begins with every delicious choice you make.
             </p>
         </div>
         <div className='part_two d-flex justify-content-center align-items-center'>
             <div className="div_img">
                <img src={'./photos/pastry_shop.jpg'} className="rounded" alt="home pic" />
                <div className="glass w-50 rounded px-2 py-1 border">
                    <Rating value={5} readOnly/>
                    <p style={{marginBottom : '0px'}}>Choose your healthy pastry for good healthy</p>
                </div>
                <div className="black w-50 text-light rounded px-2 py-1" style={{backgroundColor : colors.black}}>
                    <h4 style={{marginBottom : '0px'}}>Our Team</h4>
                    <p style={{marginBottom : '0px'}} className="mt-2">
                        We are a team of passionate pastry chefs dedicated to creating delicious and healthy pastries for our customers
                    </p>
                    <div className="d-flex gap-1 align-items-center">
                        <Avatar alt = "iskandar" src={'./photos/skandar.jpg'}/>
                        <Avatar alt = "iskandar" src={'./photos/skandar.jpg'}/>
                        <Avatar alt = "iskandar" src={'./photos/skandar.jpg'}/>
                        <Avatar alt = "iskandar" src={'./photos/skandar.jpg'}/>
                        <b>+100 Person</b>
                    </div>
                </div>
             </div>
         </div>
    </section>

  )
}
