'use client'
import { Modal ,Box, Drawer} from "@mui/material"
import { ul ,button, link, pallet} from "../styles/ele"
import {Bag,Close,List,Person, Search} from "../svg/bag"
import Link from "next/link"
import { useEffect, useState } from "react"
import SearchModal from "./SearchModal"
import { colors } from "../styles/ele"
import Drawer_content from "./Drawer_content"
import axios from "axios"
export default function Header() {
  const [open,setOpen] = useState(false);
  const [drawer,setDrawer] = useState(false)
  const [openL,setOpenL] = useState(false)
  const [change,setChange] = useState(false)
  const [values,setValues] = useState({
     firstname : '',
     lastname : '',
     age : "",
     weight : "",
     email : "",
     password : ""
  })
  const handleOpen = ()=>{
      setOpen(false)
  }
  const closeDrawer = ()=>{
    setDrawer(false)
  }
  const handleChange = (e) => {
     e.preventDefault()
     setChange(!change)
  }
  const handleCloseLoginModal = ()=>{
    setOpenL(false)
  }
  const handleValues = (e) => {
    setValues(prev => ({
        ...prev,
        [e.target.name] : e.target.value
    }))
  }
  const createAccount = (e) => {
     e.preventDefault()
     axios({
        url : 'http://localhost:8000/api/createAccount',
        method : 'post',
        data : values,
        withCredentials : true,
        headers: {
            'Accept': 'application/json'
        }
     }).then((res)=>{
         console.log(res)
     }).catch((err)=>{
         console.log(err)
     })
  }
  return (
    <header className='border'>
        <div className='headerContainer container d-flex justify-content-between align-items-center'>
            <Link className="logo" href={'./'}><img className='' src={'./photos/logo.jpg'} alt=""/></Link>
            <nav className="d-md-block d-none">
                <ul style={ul} className="d-flex gap-4 align-items-center">
                    <li style={{color : colors.primary}}><Link href={'./'} style={link}>Home</Link></li>
                    <li><Link href={'#category'} style={link}>Category</Link></li>
                    <li><Link href={'./Bag'} style={link}>Bag</Link></li>
                    <li><Link href={'#about'} style={link}>About us</Link></li>
                </ul>
            </nav>
           
            <div className="d-flex gap-3 align-items-center">
                <button onClick={()=>setOpen(true)} className="btn btn-light d-flex align-items-center gap-2" style={button}><Search/> Search</button>
                <button style={button} onClick={()=>setOpenL(true)} className="btn btn-light d-flex align-items-center gap-2"><Person/>Login</button>
                <button className="btn d-md-none d-block" onClick={()=>setDrawer(true)}><List color={'black'}/></button>
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
        <Modal open = {openL} onClose={()=>setOpenL(false)}>
            <Box className = "login_modal">
                <div className="d-flex justify-content-between">
                    <div>
                        <h5>{!change ? "Connect to your account" : "Create an account"}</h5>
                        <p style={{color : colors.gray_small,fontSize : '14px'}}>{!change ? 'Enter your Email and password to connect to your account' : 'Enter your personal information to create an account'}</p>

                    </div>
                    <Close setState={handleCloseLoginModal} type={'close'}/>
                </div>
                <form action="" className="d-flex flex-column gap-1 mt-5">
                    {!change ? (
                        <>
                        <div className="input-floating-label form-floating mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    val
                                />
                                <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="input-floating-label form-floating mb-4">
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                id="floatingInput"
                                placeholder="password"
        
                            />
                            <label htmlFor="floatingInput">Password</label>
                        </div>
                        </>
                    ):(
                        <>
                          <div className="d-flex gap-3 flex-wrap flex-sm-nowrap">
                            <div className="input-floating-label form-floating mb-4 w-100 w-sm-50">
                                    <input
                                        type="text"
                                        name="firstname"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="firstname"
                                        value={values.firstname}
                                        onChange={(e)=>handleValues(e)}
                                    />
                                    <label htmlFor="floatingInput">FirstName</label>
                            </div>
                            <div className="input-floating-label form-floating mb-4 w-100 w-sm-50">
                                    <input
                                        type="text"
                                        name="lastname"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="lastname"
                                        value={values.lastname}
                                        onChange={(e)=>handleValues(e)}
                                    />
                                    <label htmlFor="floatingInput">LastName</label>
                            </div>
                            </div>
                            <div className="d-flex gap-3">
                                <div className="input-floating-label form-floating mb-4">
                                <input
                                    type="text"
                                    name="age"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="22"
                                    value={values.age}
                                    onChange={(e)=>handleValues(e)}
                                />
                                <label htmlFor="floatingInput">Age</label>
                             </div>
                             <div className="input-floating-label form-floating mb-4">
                                <input
                                    type="text"
                                    name="weight"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="weight"
                                    value={values.weight}
                                    onChange={(e)=>handleValues(e)}
                                />
                                <label htmlFor="floatingInput">Weight</label>
                                </div>
                            </div>
                            <div className="input-floating-label form-floating mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    value={values.email}
                                    onChange={(e)=>handleValues(e)}
                                />
                                <label htmlFor="floatingInput">Email</label>
                                </div>
                            <div className="input-floating-label form-floating mb-4">
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    value={values.password}
                                    onChange={(e)=>handleValues(e)}
                                />
                                <label htmlFor="floatingInput">Password</label>
                            </div>
                          
                        </>

                    )
                    }
                    <button className="btn btn-dark text-light" onClick={(e)=> change ? createAccount(e) : ""}>{!change ? "Connect" : "Create"}</button>
                    <small className="text-center">
                        {!change ? "if you don't have account " : "if you have account "}
                         <button onClick={(e)=>handleChange(e)} style={{color : colors.primary,backgroundColor : 'white',border : 'none'}}>{!change ? 'Create Account':'Login'}</button></small>
                </form>
            </Box>
        </Modal>
    </header>
  )
}
