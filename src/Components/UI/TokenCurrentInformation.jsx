import React from 'react'
import {Link} from 'react-router-dom'

const TokenCurrentInformation = ({tokenData}) => {
    console.log(tokenData, 'tokenDataOnB')
  return (
    <div className='flex justify-between'>
        <div className='flex items-center'>
            <div className='avatar'>
                <div className='rounded-full bg-success w-10 h-10'/>
            </div>
            <div className='ml-3'>
                <p className='text-xs'>Creador</p>
                <Link to={`/profile/${tokenData.creator_id}`}>
                <h1 className='font-bold text-white text-start'>{tokenData.creator_name}</h1>
                </Link>
            </div>
        </div>

        <div className='flex items-center'>
            <div className='avatar'>
                <div className='rounded-full bg-success w-10 h-10'/>
            </div>
            <div className='ml-3'>
                <p className='text-xs'>Dueño actual</p>
                <Link to={`/profile/${tokenData.owner_id}`}>
                <h1 className='font-bold text-white text-start'>{tokenData.owner_name}</h1>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default TokenCurrentInformation