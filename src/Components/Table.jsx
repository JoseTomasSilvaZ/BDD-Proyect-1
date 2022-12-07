import React from 'react'
import TableRow from './TableComponents/TableRow'

const Table = ({tokens}) => {
  return (
    <div className='flex flex-col gap-5'>
    <h1 className='text-2xl font-bold text-white'>Tokens en venta</h1>
    <div className='border rounded-md border-slate-600'>

    <table className='table w-full'>
        <thead>
            <tr>
                <th >
                    Token 
                </th>
                <th>Actual price</th>
                <th>Actual owner</th>
                <th></th>
            </tr>
        </thead>    
        <tbody>
        {tokens.map ((token)  => {
            if(token.onsale) {
                return <TableRow token={token}/>
            }
            return
        } )}


        </tbody>

    </table>
    </div>
    </div>
  )
}

export default Table