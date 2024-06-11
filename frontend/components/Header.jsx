'use client'
import { Modal ,Box, Drawer,Alert,CircularProgress} from "@mui/material"
import { ul ,button, link} from "../styles/ele"
import {Bag,Close,List,Person, Search} from "../svg/bag"
import Link from "next/link"
import { useContext, useState } from "react"
import SearchModal from "./SearchModal"
import { colors } from "../styles/ele"
import Drawer_content from "./Drawer_content"
import { create } from "@/app/api/createAccount"
import { useRouter } from "next/navigation"
import {signIn, signOut, useSession} from 'next-auth/react'
import AuthContext from "./AuthProvider"
export default function Header() {
  const [open,setOpen] = useState(false);
  const [drawer,setDrawer] = useState(false)
  const [values,setValues] = useState({
     firstname : '',
     lastname : '',
     age : "",
     weight : "",
     email : "",
     password : ""
  })
  const [credentials,setCredentials] = useState({
    email : '',
    password : ''
  })
  const [my_alert,setMy_alert] = useState({
    open : false,
    msg : '',
    backgroundColor: "",
  })
  const { openL, change, handleChange, handleOpenL ,closeModalL ,openModalL} = useContext(AuthContext);
  const {data: session,status} = useSession()
  const router = useRouter()
  const handleOpen = ()=>{
      setOpen(false)
  }
  const closeDrawer = ()=>{
    setDrawer(false)
  }
  
  const handleValues = (e) => {
    setValues(prev => ({
        ...prev,
        [e.target.name] : e.target.value
    }))
  }
  const handleCredentials = (e)=>{
     setCredentials(prev => ({
        ...prev,
        [e.target.name] : e.target.value
     }))
  }
  const createAccount = async(e) => {
     e.preventDefault()
     const res = await create(values)
     if(res && res.command) {
        console.log(res.command);
        closeModalL()
        router.push('./')
        setMy_alert(prev => ({
            open : true,
            msg : 'Account Created Succussfuly'
        }))
        setTimeout(()=>{
            setMy_alert(prev =>({
                ...prev,
                open : false,
                backgroundColor : "#85a26a"
            }))
        },4000)
     }else{
        setMy_alert(prev => ({
            open : true,
            msg : 'Creation failed',
            backgroundColor : "red"
        }))
        setTimeout(()=>{
            setMy_alert(prev =>({
                ...prev,
                open : false,
            }))
        },4000)
     }
  }
  const Login = async(e) => {
     e.preventDefault()
     console.log(credentials);
     const res =await signIn('credentials' ,{
        email : credentials.email,
        password : credentials.password,
        redirect : false
     }).then((res)=>{
        console.log(res);
        if(res.status !== 200){
            setMy_alert(prev =>({
                open : true,
                msg : 'Email or Password Incorrect',
                backgroundColor : 'red'
            }))
            setTimeout(()=>{
                setMy_alert(prev =>({
                    ...prev,
                    open : false,
                }))
            },4000)
        }else{
            router.refresh()
            setMy_alert(prev =>({
                open : true,
                msg : 'Connection succussfuly',
                backgroundColor : '#85a26a'
            }))
            setTimeout(()=>{
                setMy_alert(prev =>({
                    ...prev,
                    open : false,
                }))
            },4000)
        }
        closeModalL()
        
     }).catch(err =>{
        console.log(err); 
     })
     
  }
  const Logout = ()=>{
     signOut({
        callbackUrl : '/'
     })

  }
  return (
    <header className='border'>
        <div className='headerContainer container d-flex justify-content-between align-items-center'>
            <Link className="logo" href={'./'}><img className='' src={'./photos/logo.jpg'} alt=""/></Link>
            <nav className="d-md-block d-none">
                <ul style={ul} className="d-flex gap-4 align-items-center">
                    <li style={{color : colors.primary}}><Link href={'./'} style={link}>Home</Link></li>
                    <li><Link href={'/categories'} style={link}>Category</Link></li>
                    <li>
                        {
                            session ? (
                                <Link href={'./cart'} style={link}>Bag</Link>
                            ):(
                                <button style={{backgroundColor : 'white',border : 'none'}} onClick={()=>openModalL()}>Bag</button>
                            )
                        }
                    </li>
                    <li><Link href={'#about'} style={link}>About us</Link></li>
                </ul>
            </nav>
           
            <div className="d-flex gap-3 align-items-center">
                <button onClick={()=>setOpen(true)} className="btn btn-light d-flex align-items-center gap-2" style={button}><Search/> Search</button>
                <button style={button} onClick={()=>handleOpenL()} className="btn btn-light d-flex align-items-center gap-2">
                    <Person/>
                    {status === 'loading' ? <CircularProgress style={{width : '20px',height:'20px',color : 'black'}}/> : session ? session.user.name : 'Login'}
                </button>
                <button className="btn d-md-none d-block" onClick={()=>setDrawer(true)}><List color={'black'}/></button>
            </div>
        </div>
        <Modal open={open} onClose={()=> setOpen(false)}>
            <Box className = "search_modal">
                <SearchModal handleOpen = {handleOpen}/>
            </Box>
        </Modal>
        <Drawer anchor="left" open = {drawer} onClose={()=>setDrawer(false)}>
           <Drawer_content drawer = {closeDrawer}/>
        </Drawer>
        <Modal open = {openL} onClose={()=>closeModalL()}>
            <Box className = "login_modal">
                <div className="d-flex justify-content-between">
                    <div>
                        <h5>{!change ? "Connect to your account" : !session ? "Create an account" : session.user.name}</h5>
                        <p style={{color : colors.gray_small,fontSize : '14px'}}>{!change ? 'Enter your Email and password to connect to your account' : !session ? 'Enter your personal information to create an account' : session.user.email}</p>

                    </div>
                    <Close setState={closeModalL} type={'close'}/>
                </div>
                <form action="" className="d-flex flex-column gap-1 mt-5" onSubmit={!change ? Login : createAccount}>
                    {!change ? (
                        <>
                        <div className="input-floating-label form-floating mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="name@example.com"
                                    value={credentials.email}
                                    onChange={(e)=>handleCredentials(e)}
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
                                value={credentials.password}
                                onChange={(e)=>handleCredentials(e)}
                            />
                            <label htmlFor="floatingInput">Password</label>
                        </div>
                        </>
                    ):(

                        <>
                        {!session && (
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
                          
                        </>

                    )
                    }
                    {!session && <button className="btn btn-dark text-light" type="submit">{!change ? "Connect" : "Create"}</button>}
                    {
                        session && <button className="btn btn-danger text-light" onClick={()=>Logout()}>Logout</button>
                    }
                    {
                        !session && (
                            <small className="text-center">
                            {!change ? "if you don't have account " : "if you have account "}
                             <button onClick={(e)=>handleChange(e)} style={{color : colors.primary,backgroundColor : 'white',border : 'none'}}>{!change ? 'Create Account':'Login'}</button>
                         </small>
                        )
                    }
                </form>
            </Box>
        </Modal>
        {
            my_alert.open && (
                <Alert variant="filled" className="my_alert" style={{backgroundColor : my_alert.backgroundColor}}>
                    {my_alert.msg}
                </Alert>
            )
        }
    </header>
  )
}