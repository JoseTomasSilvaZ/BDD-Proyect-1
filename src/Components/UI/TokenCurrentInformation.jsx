import React from 'react'

const TokenCurrentInformation = ({tokenData}) => {
  return (
    <div className='flex justify-between'>
        <div className='flex items-center'>
            <div className='avatar'>
                <div className='rounded-full bg-success w-10 h-10'/>
            </div>
            <div className='ml-3'>
                <p className='text-xs'>Creador</p>
                <h1 className='font-bold text-white text-start'>{tokenData.created_by}</h1>
            </div>
        </div>

        <div className='flex items-center'>
            <div className='avatar'>
                <div className='rounded-full bg-success w-10 h-10'/>
            </div>
            <div className='ml-3'>
                <p className='text-xs'>Dueño actual</p>
                <h1 className='font-bold text-white text-start'>{tokenData.created_by}</h1>
            </div>
        </div>
    </div>
  )
}

export default TokenCurrentInformation