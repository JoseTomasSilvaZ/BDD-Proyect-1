import React from 'react'
import MostSoldToken from '../Components/Statistics/MostSoldToken'
import ThreeUsersWithMoreMoney from '../Components/Statistics/ThreeUsersWithMoreMoney'
import UserWithMoreTokens from '../Components/Statistics/UserWithMoreTokens'

const Statistics = () => {
  return (
    <div className='h-screen'>

    <div className='flex flex-col h-full justify-evenly gap-12'>
        <MostSoldToken/>
        <UserWithMoreTokens/>
        <ThreeUsersWithMoreMoney/>
        
    </div>
    </div>
  )
}

export default Statistics