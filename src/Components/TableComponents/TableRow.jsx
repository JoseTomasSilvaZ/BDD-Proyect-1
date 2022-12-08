import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Context/Context'

const TableRow = ({token}) => {
  const {userData} = useContext(UserContext)
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
      <Link className='btn btn-primary btn-xs' to={userData.isLogged ? `/token/${token.id}`: '/login'}>Buy token🍌</Link>
    </th>
  </tr>
  )
}

export default TableRow