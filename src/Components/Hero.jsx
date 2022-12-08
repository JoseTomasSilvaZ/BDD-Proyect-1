import React from 'react'
import Carroussel from './Carroussel'
import { Link } from 'react-router-dom'

const Hero = ({tokens}) => {
  return (
    <div className='w-100 bg-base-300 rounded-lg px-5 py-10 flex  align-center justify-evenly sm:flex-col md:flex-row'>
        <div className='flex flex-col justify-center'>
            <h1 className='font-bold text-white text-3xl '>
            Como cualquier NFT market, <br/>
            solo que el nuestro<br/>
            tiene un Monkey 🦧✨
            </h1>
            <p className='mt-3'>
            Compra, vende y colecciona Tokens<br/> 
            <strong>0%</strong> fees, <strong>100%</strong> bananas.
            </p>
            <div className='mt-3 flex sm:flex-col md:flex-row gap-4'>
                <button className='btn btn-primary '>Explorar tokens</button>
                <Link className='btn' to='/about'>Conocer mas</Link>

            </div>
        </div>
        <div className='w-1/3 rounded-lg'>
            <Carroussel tokens={tokens}/>
            
        </div>
    </div>
  )
}

export default Hero