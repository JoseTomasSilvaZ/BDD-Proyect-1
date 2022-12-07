import React, { useEffect, useState } from 'react'

const MostSoldToken = () => {
  const [loading, setLoading] = useState(true)
  const [tokenData, setTokenData] = useState()
  const fetchData  = async() => {
    const data = await fetch('http://localhost:5000/api/querys/most-sold-token')
    const result = await data.json()
    setTokenData(result[0])
    setLoading(false)
  } 
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
    {!loading && (

    <div className='flex items-center '>
        <div className='w-1/2 flex flex-col items-center' >

        <h1 className='text text-start text-white font-bold text-xl mb-3'>Token mas vendido</h1>
        <div>
            <div>
            <img src={tokenData.url} className='w-[250px] h-[250px] object-cover rounded-md'/>
            <h1 className='text-md text-white font-bold mt-2 '>{tokenData.name}</h1>
            <p className='text-sm'>🔥 {tokenData.sales_count} veces vendido</p>
            </div>
        </div>
        </div>
        <div className="mockup-code h-full w-1/2">
  <pre data-prefix="$"><code>//select most sold token </code></pre> 
  <pre data-prefix="$" className="text-warning"><code>SELECT</code></pre> 
  <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
</div>
    </div>
    )}
    </>
  )
}

export default MostSoldToken