import React from 'react'
import { Link } from 'react-router-dom'

const SalesRow = ({sale}) => {
  return (
    <tr>
        
    <td>
      {sale.id}
    </td>
    <td>
      <Link to={`/token/${sale.token_id}`}><strong>{sale.token_name}</strong></Link>
    </td>
    <td>{sale.seller_name}</td>
    <td>{sale.buyer_name}</td>
    <td><strong>{sale.price} 🍌</strong> </td>
    <td>{sale.transaction_date}</td>
   
  </tr>
  )
}

export default SalesRow