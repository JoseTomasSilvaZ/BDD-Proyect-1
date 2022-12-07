import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Context/Context'
const NavBar = () => {
  const {userData} = useContext(UserContext)
  console.log(userData)

  return (
    <div className="navbar py-5 px-10  flex gap-10 ">
        <div>
        🦧
            <Link className="font-bold text-white text-xl ml-2" to='/'>MonkeyLake</Link>
        </div>
        <div className='flex flex-row gap-5'>
            <input className='input input-md bg-base-200' placeholder='Search by NFT name'/>
            <Link to='/'><span className='text-sm font-bold hover:text-white'>Explorar</span></Link>
             <Link to={userData.isLogged ? '/create' : '/login'}><span className='text-sm font-bold hover:text-white'>Vender</span></Link>
            <Link to='/estadisticas'><span className='text-sm font-bold hover:text-white'>Estadisticas</span></Link>

            
        </div>
        <div className='flex w-full justify-end'>
            {!userData.isLogged && <Link className='btn btn-md' to='/login'>Inicia sesion</Link>}
            {userData.isLogged && <Link to={`/profile/${userData.id}`}><span className='text-sm font-bold hover:text-white' >{userData.name}</span></Link>}
        </div>
</div>
  )
}

export default NavBar