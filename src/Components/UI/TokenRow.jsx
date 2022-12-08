import React, { useEffect, useState } from 'react'
import TokenCard from './TokenCard'

const TokenRow = (id) => {
    const [loading, setLoading] = useState(true)
    const [tokens, setTokens] = useState()
    const idToUse = id.id
    const fetchUserTokens = async(id) => {
        setLoading(true)
        console.log(id, 'id used')
        const data = await fetch(`http://localhost:5000/api/tokens/user/${id}`)
        const result = await data.json()
        console.log(result, 'data')
        setTokens(result)
        setLoading(false)
    }
    useEffect(() => {
        fetchUserTokens(idToUse);
    }, [id])
  return (
  <>
  <div className='flex flex-row gap-4 flex-wrap '>
    {loading && <progress className='progress w-56'/>}
  {(!loading && !tokens.message)&& (
      
      tokens.map((token) => {
          return (
              <TokenCard token={token}/>
              )
            } )
            
            )}
     {(!loading && tokens.message)&& (
      
        <h1 className='font-bold text-md'> 💀 No hay tokens que mostrar</h1>
            
            )}
            </div>
  </>
  )
}

export default TokenRow