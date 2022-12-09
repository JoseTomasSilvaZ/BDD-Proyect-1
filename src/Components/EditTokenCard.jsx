import React, { useEffect, useState, useContext } from 'react'
import {useForm} from 'react-hook-form'
import NotOnSale from './UI/NotOnSale'
import OnSale from './UI/OnSale'
import TokenCard from './UI/TokenCard'
import { UserContext } from '../Context/Context'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const EditTokenCard = ({id}) => {
    const {register, watch, formState:{errors}, handleSubmit} = useForm()
    const {userData} = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const [tokenData, setTokenData] = useState()
    const [loadingReques, setLoadingRequest] = useState(false)
    const navigate = useNavigate()
    const notify =( )=> {
        toast('Token actualizado con exito!', {
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar:true,
            theme:'dark'
        })
    }
    const fetchTokenInformation = async() => {
        setLoading(true)
        const response = await fetch(`http://localhost:5000/api/tokens/${id}`)
        const result = await response.json()
        console.log(result, 'fetchresult')
        setTokenData(result[0])
        return setLoading(false)

    }
    useEffect(() => {
        fetchTokenInformation()
    }, [])

    const onSubmit = async (data) => {
        setLoadingRequest(true)
        const req = await fetch(`http://localhost:5000/api/tokens/${id}`, {
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.token_name,
                price:data.price,
                onsale:data.onsale,
                description:data.description,
            })
        })
        const response = await req.json()
        console.log(response, 'async')
        notify()
        navigate(`/token/${id}`)
         setLoadingRequest(false)
    }
   
  return (
    <>{
        ((!loading && tokenData && userData.id ) && 
            (
                ((userData.id === tokenData.owner_id) ? (
                    <div className='w-full h-auto bg-base-300 rounded-xl flex p-5 '>
        <div className='w-2/3 flex flex-col items-start justify-center '>
            <h1 className='font-bold text-white text-xl '>Editar token: {tokenData.name}</h1>
            <small className='mb-2'>Rellena la informacion a continuacion</small>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 w-1/2'>
                <input type='text' className='input input-md' placeholder='Nombre del Token' defaultValue={tokenData.name} {...register('token_name', {required:true})}/>
                <input type='text' className='input input-md' defaultValue={tokenData.description} placeholder='Descripcion' {...register('description', {required:true})}/>
                <input type='number' className='input input-md' defaultValue={tokenData.price} placeholder='Precio' {...register('price', {required:true})}/>

                <select className='select' {...register('onsale', {required:true})} >
                    <option value={true} >En venta</option>
                    <option value={false}>No en venta</option>


                </select>

           <button className={`btn btn-primary ${loading ? 'loading':''}`} type='submit'>Editar token</button>
            </form>
        </div>
       
 
        <div className='w-1/3 flex flex-col justify-center'>
            <TokenCard token={watch()} url={tokenData.url}/>
        </div>
        
    </div>
                )
                :
                
                ((userData.id !== tokenData.owner_id) && (
                    <div>
                        <h1>Whoops, parece que </h1>
                    </div>
                ))
                )

                
            )
            )
            
    }
    
    </>
  )
}

export default EditTokenCard