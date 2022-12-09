import React, {useState, useEffect} from 'react'

const UserWithMoreTokens = () => {
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState()
  const fetchData  = async() => {
    const data = await fetch('http://localhost:5000/api/querys/user-with-most-tokens')
    const result = await data.json()
    setUserData(result[0])
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

        <h1 className='text text-start text-white font-bold text-xl mb-3'>Usuario con mas tokens en su posesion</h1>
        <div>
            <h1 className='text-md font-bold text-white inline'>@{userData.name}: </h1>
            <span className='inline'>{userData.token_count} tokens en posesion ✨</span>
        </div>
        </div>
        <div className="mockup-code h-full w-1/2">
  <pre data-prefix="$"><code>SELECT u.name, u.email, c.token_count FROM users u JOIN </code></pre> 
  <pre data-prefix="$"><code>(SELECT t.owner_id, COUNT(t.owner_id) AS token_count FROM  </code></pre> 
  <pre data-prefix="$"><code>tokens t GROUP BY t.owner_id LIMIT 1) AS c ON u.id = c.owner_id </code></pre> 

</div>
    </div>
    )}
    </>
  )
}

export default UserWithMoreTokens