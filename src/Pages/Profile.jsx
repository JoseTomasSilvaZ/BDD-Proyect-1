import React, {useContext, useEffect, useState} from 'react'
import ProfileImagesSection from '../Components/Profile/ProfileImagesSection'
import TokenRow from '../Components/UI/TokenRow'
import { UserContext } from '../Context/Context'
import { useParams } from 'react-router-dom'
import ProfileModalEdit from '../Components/Profile/ProfileModalEdit'
import TokenCard from '../Components/UI/TokenCard'
import SalesTable from '../Components/Profile/SalesTable'

const Profile = () => {
    const {userData, setUserData} = useContext(UserContext)
    const {id} = useParams()
    const [fetched, setFetched] = useState()
    const [loading, setLoading] = useState(true)
    const [selected, setSelected] = useState(0)
    const [favorites, setFavorites] = useState()
    const fetchUserData = async () => {
        console.log(id)
        const response = await fetch(`http://localhost:5000/api/users/${id}`)
        const result = await response.json()
        setFetched(result[0])
        console.log(result)
        const reqFav = await fetch(`http://localhost:5000/api/favorites/${id}`)
        const resultReqFav = await reqFav.json()
        setFavorites(resultReqFav)
        setLoading(false)
    }

    useEffect(() => {
        fetchUserData()
    }, [id])
    
    console.log(id, 'id en profile')
  return (
    <div className='flex flex-col gap-10'>
        
        {!loading && (
            <>

            <ProfileImagesSection />
            <div className='flex '>
                <div className='w-full'>
                    <div className='flex  items-center gap-1'>
                <h1 className='font-bold text-white text-2xl inline'>{fetched.name}</h1>
                {(id == userData.id) && <ProfileModalEdit userData={fetched} setUserData = {setUserData}/>}
                    </div>
                
                <small className='block'>{fetched.email}</small>
            <div className='divider'/>
                </div>
            </div>
            <h1 className='font-bold text-white text-xl'>Tokens del usuario</h1>
            <ul className="menu menu-vertical lg:menu-horizontal bg-base-200    text-sm rounded-box">
  <li onClick={() => setSelected(0)} className={selected === 0 ? 'bg-base-300' : ''}><a>Tokens en posesion</a></li>
  <li onClick={() => setSelected(1)} className={selected === 1 ? 'bg-base-300' : ''}><a>Favoritos</a></li>
  <li onClick={() => setSelected(2)} className={selected === 2 ? 'bg-base-300' : ''}><a>Transacciones</a></li>

</ul>        
            {selected === 0 &&<TokenRow id={id}/>}
            {selected === 1 && (
                <div className='flex flex-row flex-wrap gap-4'>

                {favorites.map((favorite) => (
                    
                        <TokenCard token={favorite}/>
                    
                ))}
                </div>
            )}
            {selected === 2 &&<SalesTable id={id}/>}

            </>
            )}
    </div>
  )
}

export default Profile