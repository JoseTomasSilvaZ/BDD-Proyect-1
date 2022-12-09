import React from 'react'
import EditTokenCard from '../Components/EditTokenCard'
import { useParams } from 'react-router-dom'

const EditToken = () => {
    const {id} = useParams()
  return (
    <div><EditTokenCard id={id}/></div>
  )
}

export default EditToken