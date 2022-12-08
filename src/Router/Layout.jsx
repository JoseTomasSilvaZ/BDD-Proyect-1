import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import NavBar from '../Components/UI/NavBar'

const Layout = () => {
  return (
    <div className=''>
    <NavBar/>
<div className='px-10 py-5'>

<Outlet/>
</div>
<ToastContainer/>
    </div>
  )
}

export default Layout