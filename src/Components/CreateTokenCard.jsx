import React, { useEffect, useState, useContext } from 'react'
import {useForm} from 'react-hook-form'
import NotOnSale from './UI/NotOnSale'
import OnSale from './UI/OnSale'
import TokenCard from './UI/TokenCard'
import { UserContext } from '../Context/Context'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const CreateTokenCard = () => {
    const {register, watch, formState:{errors}, handleSubmit} = useForm()
    const {userData} = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const notify =( )=> {
        toast('Token creado con exito!', {
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar:true,
            theme:'dark'
        })
    }
    const onSubmit = async (data) => {
        setLoading(true)
        const req = await fetch(`http://localhost:5000/api/tokens/`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.token_name,
                url:data.url,
                price:data.price,
                onsale:data.onsale,
                description:data.description,
                ownerId:userData.id

            })
        })
        const response = await req.json()
        console.log(response, 'async')
        notify()
        navigate(`/token/${response[0].id}`)
        return  setLoading(false)
    }
   
  return (
    <>
    <div className='w-full h-auto bg-base-300 rounded-xl flex p-5 '>
        <div className='w-2/3 flex flex-col items-start justify-center '>
            <h1 className='font-bold text-white text-xl '>Crear un nuevo token</h1>
            <small className='mb-2'>Rellena la informacion a continuacion</small>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 w-1/2'>
                <input type='text' className='input input-md' placeholder='Nombre del Token' defaultValue='' {...register('token_name', {required:true})}/>
                <input type='text' className='input input-md' placeholder='URL de la imagen' {...register('url', {required:true})}/>
                <input type='text' className='input input-md' defaultValue='' placeholder='Descripcion' {...register('description', {required:true})}/>
                <input type='number' className='input input-md' defaultValue='0' placeholder='Precio' {...register('price', {required:true})}/>

                <select className='select' {...register('onsale', {required:true})}>
                    <option selected disabled value=''>Selecciona una opcion</option>
                    <option value={true}>En venta</option>
                    <option value={false}>No en venta</option>


                </select>

           <button className={`btn btn-primary ${loading ? 'loading':''}`}>Crear token</button>
            </form>
        </div>
       
 
        <div className='w-1/3 flex flex-col justify-center'>
            <TokenCard token={watch()}/>
        </div>
        
    </div>
    </>
  )
}

export default CreateTokenCard