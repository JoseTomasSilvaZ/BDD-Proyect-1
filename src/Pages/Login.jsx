import React, { useState } from 'react'
import LoginForm from '../Components/Login/LoginForm'
import RegisterForm from '../Components/Login/RegisterForm'

const Login = () => {
    const [login, setLogin] = useState(true)
  return (
    <div className='w-full h-full  bg-base-300 flex flex-col md:flex-row rounded-lg'>
        <div className='sm:w-full md:w-2/3'>
            <img 
            className='w-full h-full object-cover overflow-hidden'
            src='https://cdn.dribbble.com/users/648922/screenshots/17153442/media/f193c20964942273bbca31a35b1debab.jpg?compress=1&resize=1600x1200&vertical=top'/>
        </div>
        <div className='px-10 py-5  sm:full md:w-1/3 flex flex-col justify-center'>
            <div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Login</span> 
    <input type="checkbox" className="toggle" checked= {!login} onClick = {() => setLogin(!login)} />
    <span className="label-text">Register</span> 

  </label>
</div>
           
            <div className='mt-6 w-full'>
               
                {login && <LoginForm/>}
                {!login && <RegisterForm/>}
            </div>
        </div>
    </div>
  )
}

export default Login