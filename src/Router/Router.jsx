import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import About from '../Pages/About'
import CreateToken from '../Pages/CreateToken'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Profile from '../Pages/Profile'
import Statistics from '../Pages/Statistics'
import Token from '../Pages/Token'
import Layout from './Layout'
import LoginLayout from './LoginLayout'

const Router = () => {
  return (
    <Routes>
        <Route element={<Layout/>} path='/'>
            <Route path='/' element={<Home/>}/>
            <Route path='/token/:id' element={<Token/>}/>
            <Route path='/estadisticas' element={<Statistics/>}/>
            <Route path='/profile/:id' element={<Profile/>}/>
            <Route path='/create' element={<CreateToken/>}/>
            <Route path='/about' element={<About/>}/>
        </Route>
        <Route element={<LoginLayout/>} path='login'>
            <Route path='/login' element={<Login/>}/>

        </Route>
    </Routes>
  )
}

export default Router