import React from 'react'
import { Link } from 'react-router-dom'

const TableRow = ({token}) => {
  return (
    <tr>
        
    <td>
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={token.url} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <div className="font-bold">{token.token_name}</div>
        </div>
      </div>
    </td>
    <td>
      <strong>{token.price}🍌</strong>
    </td>
    <td>{token.owner_name}</td>
    <th>
      <Link className='btn btn-primary btn-xs' to={`/token/${token.id}`}>Buy token🍌</Link>
    </th>
  </tr>
  )
}

export default TableRow