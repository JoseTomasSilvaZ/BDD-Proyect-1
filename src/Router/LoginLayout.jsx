import React from 'react'
import { Outlet } from 'react-router-dom'

const LoginLayout = () => {
  return (
    <div className='px-10 py-5'>
        <Outlet/>
    </div>
  )
}

export default LoginLayout