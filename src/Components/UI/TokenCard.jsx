import React from 'react'
import NotOnSale from './NotOnSale'
import OnSale from './OnSale'

const TokenCard = ({token}) => {
  return (
    <div className="card w-64 h-80 bg-base-200 shadow-xl p-3 border-slate-100">
 <img src={token.url} className='object-cover w-full h-2/3 overflow-hidden rounded-t-md'/>
  <div className="mt-2">
    <h2 className="text-md font-bold text-white">{token.token_name}</h2>
    <p className='text-sm'>{token.description}</p>
  </div>
  <div className='w-full mt-3 bg-base-100 rounded-md py-3 px-2 flex justify-between'>
    <div>
    <p className='text-xs font-md mb-1'>Status:</p>
    {token.onsale == 'true' ? <OnSale/>: <NotOnSale/>}
    </div>
  <div>
    <p className='text-xs font-md mb-1'>Price:</p>
        <p className='text-md font-bold text-white'>{token.price} 🍌</p>
  </div>
  </div>
</div>
  )
}

export default TokenCard