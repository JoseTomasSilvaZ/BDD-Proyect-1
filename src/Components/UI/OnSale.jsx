import React from 'react'
import { Check } from 'react-feather'

const OnSale = () => {
  return (
    <div className='badge badge-success'>
        <Check size={15} color='white'/>    
        <small className='text-white font-bold mx-1'>On sale</small>
    </div>
  )
}

export default OnSale