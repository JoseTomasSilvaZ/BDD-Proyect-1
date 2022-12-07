import React from 'react'

const ThreeUsersWithMoreMoney = () => {
  return (
    <>
    
    <div className='flex items-center   '>
        <div className='w-full flex flex-col items-center' >

        <h1 className='text text-start text-white font-bold text-xl mb-5'>Usuario con mas monkeyCoins  en su posesion</h1>
        <div className='flex w-full '>
        <div className='w-1/3 flex flex-col items-center pt-4'>
            <h1 className='font-bold text-white text-md text-center'> 🥈 @User-2</h1>
            <small className='text-center'>382 🍌</small>
        </div>
        <div className='w-1/3 flex flex-col  items-center'>

        <h1 className='font-bold text-white text-md text-center text-xl'> 🥇 @User-1</h1>
        <small>378 🍌</small>

        </div>

        <div className='w-1/3 flex flex-col items-center pt-4'>
        <h1 className='font-bold text-white text-md text-center'> 🥉 @User-3</h1>
        <small>378 🍌</small>


        </div>
        </div>
        </div>
        <div className="mockup-code h-full w-full">
  <pre data-prefix="$"><code>//select most sold token </code></pre> 
  <pre data-prefix="$" ><code>SELECT ....</code></pre> 
</div>
    </div>
    </>
  )
}

export default ThreeUsersWithMoreMoney