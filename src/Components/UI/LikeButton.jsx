import React, {useContext, useState} from 'react'
import { Heart } from 'react-feather'
import { UserContext } from '../../Context/Context'

const LikeButton = ({token}) => {
    const {userData, setUserData} = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    console.log(userData.favorites.some(fav => fav.token_id == token.id) )
    console.log(userData.favorites)
    console.log(token.id, 'tokenid')
    const onLikeClick = async() => {
        setLoading(true)
        if (!userData.favorites.find(fav => fav.token_id == token.id) ) {
            console.log('entre para arriba')
            const req = await fetch('http://localhost:5000/api/favorites', {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({userId: userData.id, tokenId:token.id})
            })
            const response = await req.json()
        }

        else {
            console.log('entre para abajo')
            const newArray = userData.favorites.filter(fav => {
                if(fav.token_id == token.id) {
                    console.log(fav.token_id)
                    console.log(fav.id)
                    return fav.id

                }
            })
            console.log(newArray, 'newArrs')
            const idToSend = newArray[0].id
            console.log(idToSend)
            const reqDelete = await fetch(`http://localhost:5000/api/favorites/${idToSend}`,
            {
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const respDelete = await reqDelete.json()
            console.log(respDelete, 'deleteResponse')
        }
        
        const reqFavorites = await fetch (`http://localhost:5000/api/favorites/${userData.id}`)
        const resultFavorites = await reqFavorites.json()
        setUserData(prevData => ({...prevData, favorites:resultFavorites}))


        return setLoading(false)
    }   
  return (
    <>
    {
        (!loading && userData.favorites) && (
            <>
            <Heart size={15} className='cursor-pointer' fill={userData.favorites.find(fav => fav.token_id == token.id) ?  'red' : 'none'} color={userData.favorites.find(fav => fav.token_id == token.id)  ?  'red' : 'white'} onClick={() => onLikeClick()}/>
            </>
        )
    }
    </>
  )
}

export default LikeButton