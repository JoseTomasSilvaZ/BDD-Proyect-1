import React, { useEffect, useState } from 'react'

const MostFavoriteToken = () => {
  const [loading, setLoading] = useState(true)
  const [tokenData, setTokenData] = useState()
  const fetchData  = async() => {
    const data = await fetch('http://localhost:5000/api/querys/most-favorite-token')
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

        <h1 className='text text-start text-white font-bold text-xl mb-3'>Token con mas favoritos</h1>
        <div>
            <div>
            <img src={tokenData.url} className='w-[250px] h-[250px] object-cover rounded-md'/>
            <h1 className='text-md text-white font-bold mt-2 '>{tokenData.name}</h1>
            <p className='text-sm'>💖 {tokenData.fav_count} Likes</p>
            </div>
        </div>
        </div>
        <div className="mockup-code h-full w-1/2">
  <pre data-prefix="$"><code>select * from tokens t join (select token_id,  </code></pre> 
  <pre data-prefix="$" className=""><code>count(token_id) from sales group by token_id order by </code></pre> 
  <pre data-prefix=">" className=""><code>count desc limit 1) as tmax on tmax.token_id = t.id;</code></pre>
</div>
    </div>
    )}
    </>
  )
}

export default MostFavoriteToken