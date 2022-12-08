import React, { useEffect, useState } from 'react'
import { Check, Heart, Share, X } from 'react-feather'
import { useParams } from 'react-router-dom'
import BarLoader from 'react-spinners/BarLoader'
import BuyTokenCard from '../Components/UI/BuyTokenCard'
import Modal from '../Components/UI/Modal'
import TokenRow from '../Components/UI/TokenRow'


const Token = () => {
    const {id} = useParams()
    const [loading, setLoading] = useState(true)
    const [tokenData, setTokenData] = useState()
    const fetchTokenData  = async (id) => {
        console.log(id, 'resultadoID')
        const data = await fetch(`http://localhost:5000/api/tokens/${id}`)
        const result = await data.json()
        console.log(result[0], 'resultadoEnToken')
        setTokenData(result[0])
        setLoading(false)
    }
    useEffect(() => {
        fetchTokenData(id);
    }, [])
  return (
    <>
    {loading && 
    <div className='h-full w-full flex items-center justify-center'>
        
        <BarLoader color='#37d7b7'/>
        </div>
        }
   {(!loading && tokenData) && (

    <div className='flex flex-col w-full h-full gap-10 relative'>
        <div className='first--section flex '>
            <div className='left--section w-2/3 flex items-center justify-center '>
                <img src={tokenData.url} className='w-[400px] h-[400px] rounded-xl object-cover'/>
            </div>
            <div className='right--section w-1/3 sticky'>
                <BuyTokenCard tokenData={tokenData} />
            </div>

        </div>

        <div className='second--section flex flex-col gap-10'>
            <div className='left--section w-full'>
                <h1 className='font-bold text-white text-xl'>
                    Descripcion
                </h1>
                <p className='text-sm'>
                    {tokenData.description}
                </p>
            </div>
            
            <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-white text-xl'>
                    Mas tokens de este usuario
                </h1>
                <TokenRow id={tokenData.owner_id}/>
            </div>

        </div>

    </div>
   )}
    </>
  )
}

export default Token