import React, {useEffect, useState} from 'react'

const ThreeUsersWithMoreMoney = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()
  const fetchData  = async() => {
    const data = await fetch('http://localhost:5000/api/querys/user-with-most-coins')
    const result = await data.json()
    console.log(result, 'money')
    setData(result)
    setLoading(false)
  } 
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
   {!loading && (

    <div className='flex items-center   '>
        <div className='w-full flex flex-col items-center' >

        <h1 className='text text-start text-white font-bold text-xl mb-5'>Usuario con mas monkeyCoins  en su posesion</h1>
        <div className='flex w-full '>
        <div className='w-1/3 flex flex-col items-center pt-4'>
            <h1 className='font-bold text-white text-md text-center'> 🥈 @{data[1].name}</h1>
            <small className='text-center'>{data[1].amount} 🍌</small>
        </div>
        <div className='w-1/3 flex flex-col  items-center'>

        <h1 className='font-bold text-white text-md text-center text-xl'> 🥇 @{data[0].name}</h1>
        <small>{data[0].amount} 🍌</small>

        </div>

        <div className='w-1/3 flex flex-col items-center pt-4'>
        <h1 className='font-bold text-white text-md text-center'> 🥉 @{data[2].name}</h1>
        <small>{data[2].amount} 🍌</small>


        </div>
        </div>
        </div>
        <div className="mockup-code h-full w-full">
  <pre data-prefix="$" ><code>SELECT c.user_id, c.amount, u.name FROM coins c JOIN  </code></pre> 
  <pre data-prefix="$" ><code>users u ON c.user_id = u.id ORDER BY c.amount DESC LIMIT 3 </code></pre> 

</div>
    </div>
   )}
    </>
  )
}

export default ThreeUsersWithMoreMoney