import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/UI/NavBar'

const Layout = () => {
  return (
    <div className=''>
    <NavBar/>
<div className='px-10 py-5'>

<Outlet/>
</div>
    </div>
  )
}

export default Layout