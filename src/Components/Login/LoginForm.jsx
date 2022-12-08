import React, { useContext, useState} from 'react'
import {useForm} from 'react-hook-form'
import { UserContext } from '../../Context/Context'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const {register, handleSubmit, formState:{errors}}  = useForm()
  const {setUserData} = useContext(UserContext)
  const [error, setError] = useState(false)
  const navigate  = useNavigate()
  const onSubmit = async (data) => {
    console.log(data)
    const rawResponse = await fetch('http://localhost:5000/api/login/', {
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })
    const response = await rawResponse.json()
    console.log(response)
    const favoritesReq = await fetch(`http://localhost:5000/api/favorites/${response[0].id}`)
    const result = await favoritesReq.json()
    
    if(!response.error) {
      await setUserData(({isLogged:true, ...response[0], favorites:result}))
      return navigate('/')
    }
    return setError(true)

}
  return (
    <>
    <div className='mb-3'>

     <h1 className='font-bold text-white text-xl' >
                Bienvenid@ a MonkeyLake 
            </h1>
            <p className='text-sm'>Ingresa tus datos para inciar sesion</p>
    </div>
    <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)} >
    <input className='input ' type='email' defaultValue='' placeholder='Correo electronico' {...register('email', {required:true})}/>
    {errors.email && <span className='text-xs text-error'>Por favor, ingresa un email</span>}

    <input className='input' type='password' defaultValue='' placeholder='********' {...register('password', {required:true})}/>
    {errors.password && <span className='text-xs text-error'>Por favor, ingresa tu contraseña</span>}
    {error && <small className='text-error'>Email o contrasena incorrecto </small>}

    <input type='submit' className='btn btn-primary'/>
</form>
<small className='link'>Olvidaste tu contrasena?</small>
    </>
  )
}

export default LoginForm