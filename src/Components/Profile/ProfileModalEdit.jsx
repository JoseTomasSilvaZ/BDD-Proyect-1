import React, { useState } from 'react'
import { Edit, Edit2, Edit3 } from 'react-feather'
import {useForm} from 'react-hook-form'
import SuccesAlert from './SuccesAlert'
import {toast} from 'react-toastify'

const ProfileModalEdit = ({userData, setUserData}) => {
    const notify =( )=> {
        toast('🦧✨ Informacion actualizada con exito', {
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar:true,
            theme:'dark'
        })
    }
    const {register, handleSubmit, formState:{errors} } = useForm()
    const [success, setSuccess] = useState(false)
    const onSubmit = async (data) => {
        const req = await fetch(`http://localhost:5000/api/users/${userData.id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }

        )
        const resp = await req.json()
        console.log(resp, 'response')
        setUserData(prevData => ({...prevData, ...resp[0]}))
        notify()
        
       
    }
  return (
    <div>
    <label htmlFor="my-modal-4" className="cursor-pointer"><Edit size={20}/></label>

    <input type="checkbox" id="my-modal-4" className="modal-toggle" />
<label htmlFor="my-modal-4" className="modal cursor-pointer">
<label className="modal-box bg-base-300 relative" htmlFor="">
<h3 className="text-lg font-bold text-white mb-4">Editar datos de usuario</h3>
<div className='flex flex-col items-center gap-2'>
<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 w-full'>
    <input type='text' className='input w-full text-sm' defaultValue={userData.name} placeholder='Nombre de usuario' {...register('name', {required:true})}/>
    {errors.name && <small className='text-sm text-error'>Por favor, ingresa el nuevo nombre de usuario</small>}
    <input type='email' className='input  w-full text-sm' defaultValue={userData.email} {...register('email', {required:true})}/>
    {errors.email && <small className='text-sm text-error'>Por favor, ingresa el nuevo email</small>}
    <input type='text' className='input  w-full  text-sm' defaultValue={userData.password} placeholder='contraseña' {...register('password', {required:true})}/>
    {errors.password && <small className='text-sm text-error'>Por favor, ingresa tu contrasena</small>}



<input className='btn btn-primary btn-sm ' type='submit'/>
</form> 
</div>
</label>
</label>
</div>
  )
}

export default ProfileModalEdit