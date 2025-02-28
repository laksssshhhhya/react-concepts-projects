import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-800 p-2 text-2xl text-amber-100'>
      User : {userid}
    </div>
  )
}

export default User
