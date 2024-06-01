'use client'
import { Modal ,Box, Drawer} from "@mui/material"
import { ul ,button, link, pallet} from "../styles/ele"
import {Bag,List,Person, Search} from "../svg/bag"
import Link from "next/link"
import { useEffect, useState } from "react"
import SearchModal from "./SearchModal"
import { colors } from "../styles/ele"
import Drawer_content from "./Drawer_content"
export default function Header() {
  const [open,setOpen] = useState(false);
  const [drawer,setDrawer] = useState(false)
  const handleOpen = ()=>{
      setOpen(false)
  }
  const closeDrawer = ()=>{
    setDrawer(false)
  }
  return (
    <header className='border'>
        <div className='headerContainer container d-flex justify-content-between align-items-center'>
            <Link className="logo" href={'./'}><img className='' src={'./photos/logo.jpg'} alt=""/></Link>
            <nav className="d-md-block d-none">
                <ul style={ul} className="d-flex gap-4 align-items-center">
                    <li style={{color : colors.primary}}><Link href={'./'} style={link}>Home</Link></li>
                    <li><Link href={'#category'} style={link}>Category</Link></li>
                    <li><Link href={'./'} style={link}>Bag</Link></li>
                    <li><Link href={'#about'} style={link}>About us</Link></li>
                </ul>
            </nav>
           
            <div className="d-flex gap-3 align-items-center">
                <button onClick={()=>setOpen(true)} className="btn btn-light d-flex align-items-center gap-2" style={button}><Search/> Search</button>
                <button style={button} className="btn btn-light d-flex align-items-center gap-2"><Person/>Login</button>
                <button className="btn d-md-none d-block" onClick={()=>setDrawer(true)}><List/></button>
            </div>
        </div>
        <Modal open={open} onClose={()=> setOpen(false)}>
            <Box className = "search_modal">
                <SearchModal setOpen = {handleOpen}/>
            </Box>
        </Modal>
        <Drawer anchor="left" open = {drawer} onClose={()=>setDrawer(false)}>
           <Drawer_content drawer = {closeDrawer}/>
        </Drawer>
    </header>
  )
}
