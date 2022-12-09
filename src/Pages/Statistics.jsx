import React from 'react'
import MostFavoriteToken from '../Components/Statistics/MostFavoriteToken'
import MostSoldToken from '../Components/Statistics/MostSoldToken'
import ThreeUsersWithMoreMoney from '../Components/Statistics/ThreeUsersWithMoreMoney'
import UserWithMoreTokens from '../Components/Statistics/UserWithMoreTokens'

const Statistics = () => {
  return (
    <div className='w-full h-full'>

    <div className='flex flex-col h-full justify-evenly gap-12'>
        <MostSoldToken/>
        <UserWithMoreTokens/>
        <ThreeUsersWithMoreMoney/>
        <MostFavoriteToken/>
        
    </div>
    </div>
  )
}

export default Statistics