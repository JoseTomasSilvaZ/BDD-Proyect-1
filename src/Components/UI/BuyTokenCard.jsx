import React from 'react'
import { Check } from 'react-feather'
import BuyAction from './BuyAction'
import BuyIcons from './BuyIcons'
import NotOnSale from './NotOnSale'
import OnSale from './OnSale'
import TokenCurrentInformation from './TokenCurrentInformation'

const BuyTokenCard = ({tokenData}) => {
  return (
    <div className='bg-base-200 flex flex-col gap-3 p-5 rounded-md shadow-md'>
           <div className='badge--section'>
               {
                tokenData.onsale ? <OnSale/> : <NotOnSale/>
               }
                     
           </div>
           <div>
                <h1 className='font-bold text-white text-xl'>{tokenData.name} #{tokenData.id}</h1>
           </div>
           <div>
               <TokenCurrentInformation tokenData={tokenData}/>
                <div className='divider'/>
           </div>
           <div>
               <BuyIcons tokenData={tokenData}/>
           </div>
           <div>
               <BuyAction tokenData={tokenData}/>
           </div>
    </div>
  )
}

export default BuyTokenCard