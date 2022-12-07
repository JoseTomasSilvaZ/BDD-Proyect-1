import React from 'react'
import { Heart, Share } from 'react-feather'

const BuyIcons = () => {
  return (
    <div className='flex justify-between'>
        <div>
            <Heart size={15} className='inline'/>
            <span className='font-bold text-sm ml-1'>{5}</span>
        </div>
        <div>

        <Share size={15} className='inline'/>
        <span className='font-bold text-sm ml-1'>Compartir</span>

        </div>
        <div>

        <Share size={15} className='inline'/>
        <span className='font-bold text-sm ml-1'>Option</span>

        </div>
    </div>
  )
}

export default BuyIcons