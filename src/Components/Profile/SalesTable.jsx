import React, { useEffect, useState } from 'react'
import SalesRow from './SalesRow'

const SalesTable = ({id}) => {
    const [loading, setLoading] = useState(false)
    const [sales, setSales] = useState()
    const fetchUserSales = async() => {
        setLoading(true)
        const response = await fetch(`http://localhost:5000/api/sales/${id}`)
        const result = await response.json()
        console.log(result, 'resultado')
        setSales(result)
        setLoading(false)
    }
    useEffect(() => {
        fetchUserSales()
    }, [id])
  return (
    <>
    {loading && (
        <div className='w-full h-90 flex items-center justify-center'>
        <progress className='w-64 progress progress-accent'></progress>
    </div>
    )}
    {
        (!loading && sales ) && (

    <div className='flex flex-col gap-5'>
    <h1 className='text-2xl font-bold text-white'>Transacciones hechas por el usuario</h1>
    <div className='border rounded-md border-slate-600'>

    <table className='table w-full'>
        <thead>
            <tr>
                <th >
                    ID
                </th>
                <th>Token</th>
                <th>Vendedor</th>
                <th>Comprador</th>
                <th>Precio</th>
                <th>Fecha</th>
            </tr>
        </thead>    
        <tbody>
        {sales.map(sale => <SalesRow sale={sale}/>)}


        </tbody>

    </table>
    </div>
    </div>
        )
    }
    </>
  )
}

export default SalesTable