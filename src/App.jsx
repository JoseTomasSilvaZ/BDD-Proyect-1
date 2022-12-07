import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hero from './Components/Hero'
import Table from './Components/Table'

function App() {

  return (
    <div className="mx-10 my-3  h-screen w-100 ">
      <div className='h-2/3 bg-base-200 rounded-xl '>
        <Hero/>
      </div>
      <div>
        <Table/>
      </div>
    </div>
  )
}

export default App
