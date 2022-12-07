import React from 'react'
import { X } from 'react-feather'

const NotOnSale = () => {
  return (
    <div className='badge badge-error'>
        <X size={15} color='white'/>    
        <small className='text-white font-bold mx-1'>Not on sale</small>
    </div>
  )
}

export default NotOnSale