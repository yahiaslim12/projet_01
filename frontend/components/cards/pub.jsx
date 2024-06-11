'use client'
import { useSession } from 'next-auth/react'
import { Right } from '../../svg/bag'
import { colors } from '../../styles/ele'
import AuthContext from '../AuthProvider'
import { useContext } from 'react'
import { useRouter } from 'next/navigation'
export default function Pub() {
  const router = useRouter()
  const {data : session,status} = useSession()
  const { openL, change, handleChange, handleOpenL ,closeModalL ,openModalL} = useContext(AuthContext);
  const shopNow = () => {
     if(session){
        router.push('/cart')
     }else{
        openModalL()
     }
  }
  return (
    <div className='pub border rounded'>
        <img className='rounded' src={'./photos/pub.jpg'} alt=""/>
        <div className='text-light'>
            <h3 className='fw-bold' style={{marginBottom : '0px',fontSize:'calc(1.27813rem + .3375vw)'}}>100% Organic and healthy Pastry</h3>
            <small>Get the best deal before close</small>
            <button onClick={()=>shopNow()} style={{backgroundColor : colors.primary}} className='rounded text-light px-2 py-2 gap-2 mt-3 d-flex align-items-center'>Shop Now <Right color = {'white'}/></button>
        </div>
    </div>
  )
}
