import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero'
import Table from '../Components/Table'
import BarLoader from 'react-spinners/BarLoader'

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [tokens, setTokens] = useState()
    useEffect( () => {
        const fetchData = async() => {

            const data = await fetch('http://localhost:5000/api/tokens')
            const result = await data.json()
            console.log(result, 'dataonHome')
            setTokens(result)
            setLoading(false)
        }
        fetchData()

    }, [])
  return (
    <div className='flex flex-col gap-10'>
        {
            loading && (
                <div className='h-full w-full flex items-center justify-center'>
        
                <BarLoader color='#37d7b7'/>
                </div>
            )
        }
        {
            !loading && (
                <>
                <Hero tokens={tokens}/>
                <Table tokens={tokens}/>
                </>
            )
        }
    </div>
  )
}

export default Home