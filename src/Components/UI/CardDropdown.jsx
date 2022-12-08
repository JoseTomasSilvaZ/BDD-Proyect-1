import React, {useContext, useState} from 'react'
import { Check, MoreHorizontal, MoreVertical } from 'react-feather'
import { UserContext } from '../../Context/Context'
import EditTokenModal from './EditTokenModal'

const CardDropdown = ({token}) => {
  const {userData} = useContext(UserContext)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false) 
    const onDeleteClick  = async(id) => {
      setLoading(true)
      const req = await fetch(`http://localhost:5000/api/tokens/${id}`, {
        method:'DELETE',
        headers: {
          'Content-Type': 'application/json',
      }
      })
      const response = req.json()
      console.log(response)
      setLoading(false)
      setSuccess(true)
    }

  return (
    <>
    {(token && (userData.id == token.owner_id))&& (

    <div className='dropdown dropdow-right relative'>
      <div className='btn rounded-md absolute right-0' tabIndex={0}>
        <MoreVertical size={15} color='white'/>
      </div>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-sm inline">
<li><a onClick = {() => onDeleteClick(token.id)}><Check size={10} color='white' className={(!loading && success) ? '': 'hidden'}/>Eliminar token</a></li>
<li><EditTokenModal token={token }/></li>
</ul>
      
    </div>
    )}
    </>
  )
}

export default CardDropdown