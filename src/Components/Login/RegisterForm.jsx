import React, { useContext } from 'react'
import {useForm} from 'react-hook-form'
import { UserContext } from '../../Context/Context'
import { useNavigate } from 'react-router-dom'
const RegisterForm = () => {
    const {register, handleSubmit, formState:{errors}} = useForm()
    const {setUser} = useContext(UserContext)
    const navigate  = useNavigate()

    const onSubmit = async (data) => {
        const rawResponse = await fetch('http://localhost:5000/api/users/', {
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
        const response = await rawResponse.json()
        console.log(response[0])
        setUser({isLogged:true, ...response[0]})
        navigate('/')
    }
    
    return (
        <>
         <div className='mb-3'>

<h1 className='font-bold text-white text-xl' >
           Regístrate en MonkeyLake 
       </h1>
       <p className='text-sm'>Ingresa a continuación los datos solicitados para crear tu cuenta.</p>
</div>
    <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
    <input className='input ' placeholder='Correo electronico' defaultValue='' {...register('email', {required:true})}/>
    {errors.email && <span className='text-xs text-error'>Por favor, ingresa un email</span>}

    <input className='input' placeholder='Nombre de usuario' {...register('name', {required:true})}/>
    {errors.name && <span className='text-xs text-error'>Por favor, ingresa tu nombre de usuario</span>}

    <input className='input' type='password' placeholder='********' {...register('password', {required:true})}/>
    {errors.password && <span className='text-xs text-error'>Por favor, ingresa tu contraseña</span>}

    <input type='submit' className='btn btn-primary'/>
</form>
        </>
  )
}

export default RegisterForm