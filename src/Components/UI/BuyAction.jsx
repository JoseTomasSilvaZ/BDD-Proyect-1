import React from 'react'
import Modal from './Modal'

const BuyAction = ({tokenData}) => {
  return (
    <>
    <div className='border border-base-100 rounded-xl p-3 flex flex-col gap-4  mt-5'>
        <p className='text-sm text-center'>Precio actual del token: <strong className='text-white'>{tokenData.price} 🍌</strong> </p>
       
    <Modal tokenData={tokenData}/>    
    </div>
    </>
  )
}

export default BuyAction