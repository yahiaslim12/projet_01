"use client"
import { colors } from "../styles/ele"
import { Typewriter } from "react-simple-typewriter"
import { Right } from "../svg/bag"
import { Avatar, Rating } from "@mui/material"
export default function Couv() {
  return (
    <section className="couv d-flex align-items-center">
        <div className="container d-flex justify-content-center align-items-center gap-2">
            <div className="part_one">
                <h1 className="fw-bold" style={{marginBottom : '0px'}}>Welcome to TastrovalDZ <span style={{color : colors.primary}}><Typewriter words={["Your Path to Healthy Choices in Pastries"]} loop = {0} cursor typeSpeed={100}/></span></h1>
                <p  className= "mt-3" style={{marginBottom : '0px',color : colors.gray_p}}>
                Discover a variety of pastries made with premium ingredients and love. Your journey to better health begins with every delicious choice you make.
                </p>
                <div className="mt-3 d-flex gap-3">
                    <button className="rounded px-2 py-1">Show Categorys</button>
                    <button className="rounded px-2 py-1">Consult our Services <Right/></button>
                </div>
            </div>
            <div className="part_two">
                <div>
                    <img src={"./photos/pastry_shop.jpg"} alt="" className="rounded" />
                </div>
                <div className="glass rounded border w-50 px-2 py-1">
                    <Rating name="read-only" value={5} readOnly />
                    <p style={{marginBottom : '0px',fontWeight :'500 !important'}}>Our product provided for a good health</p>
                </div>
                <div className="black text-light px-2 py-1 rounded w-50">
                    <h6 className="fw-bold" style={{marginBottom : '0px'}}>TastrovalDZ</h6>
                    <p style={{marginBottom : '0px'}}>Your pastry provided for your health</p>
                    <div className="d-flex mt-3 gap-1 align-items-center">
                        <Avatar src="./photos/skandar.jpg"/>
                        <Avatar src="./photos/skandar.jpg"/>
                        <Avatar src="./photos/skandar.jpg"/>
                        <Avatar src="./photos/skandar.jpg"/>
                        <b>+5k</b>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
