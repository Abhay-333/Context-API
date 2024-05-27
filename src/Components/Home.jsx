import React, { useContext } from 'react'
import { UserContextData } from '../Utils/Context'
import { Link } from 'react-router-dom'

const Home = () => {
  const [user] = useContext(UserContextData)

  return user && user.length > 0 ? (
    <ul>
      
      {user.map((userItem, index) => {
        
        return <Link  key={index} to={`/user/${userItem.id}`}>
          <li  className='list-disc text-blue-900 hover:text-blue-500'>{userItem.name.firstname} {userItem.name.lastname}</li>
        </Link>

      })}
    </ul>
  ) : (<h1 className=''>Loading...</h1>)
}

export default Home