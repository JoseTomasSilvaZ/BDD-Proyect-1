import React, {useContext, useEffect, useState} from 'react'
import ProfileImagesSection from '../Components/Profile/ProfileImagesSection'
import TokenRow from '../Components/UI/TokenRow'
import { UserContext } from '../Context/Context'
import { useParams } from 'react-router-dom'
import ProfileModalEdit from '../Components/Profile/ProfileModalEdit'

const Profile = () => {
    const {userData} = useContext(UserContext)
    const {id} = useParams()
    const [fetched, setFetched] = useState()
    const [loading, setLoading] = useState(true)
    const fetchUserData = async () => {
        console.log(id)
        const response = await fetch(`http://localhost:5000/api/users/${id}`)
        const result = await response.json()
        setFetched(result[0])
        console.log(result)
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
                {(id == userData.id) && <ProfileModalEdit userData={fetched}/>}
                    </div>
                
                <small className='block'>{fetched.email}</small>
            <div className='divider'/>
                </div>
            </div>
            <h1 className='font-bold text-white text-xl'>Tokens del usuario</h1>
            <TokenRow id={id}/>
            </>
            )}
    </div>
  )
}

export default Profile