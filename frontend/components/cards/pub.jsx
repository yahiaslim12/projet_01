import React from 'react'
import { Right } from '../../svg/bag'
import { colors } from '../../styles/ele'

export default function Pub() {
  return (
    <div className='pub border rounded'>
        <img className='rounded' src={'./photos/pub.jpg'} alt=""/>
        <div className='text-light'>
            <h3 className='fw-bold' style={{marginBottom : '0px',fontSize:'calc(1.27813rem + .3375vw)'}}>100% Organic and healthy Pastry</h3>
            <small>Get the best deal before close</small>
            <button style={{backgroundColor : colors.primary}} className='rounded text-light px-2 py-2 gap-2 mt-3 d-flex align-items-center'>Shop Now <Right color = {'white'}/></button>
        </div>
    </div>
  )
}
