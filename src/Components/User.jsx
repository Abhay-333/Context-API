import React, { useContext } from 'react'
import { UserContextData } from '../Utils/Context'
import { useNavigate, useParams, Link } from 'react-router-dom'

const User = () => {

  const navigate = useNavigate()

  const { id } = useParams()
  let [user] = useContext(UserContextData)

  let singleUser = user && user.find((user) => user.id === parseInt(id))

  return singleUser ? (
    <div>
      <h1 className='capitalize'>{singleUser.name.firstname} {singleUser.name.lastname}</h1>
      <h1>Username:@{singleUser.username}</h1>
      <h1>email: {singleUser.email}</h1>

      <hr />
      <Link to={"/"}>
        <button onClick={() => navigate()} className='bg-blue-400 text-white font-semibold px-5 py-3 rounded-lg text-[2vw] mt-[3%]'>Go Back</button>
      </Link>

    </div>
  ) : (<h1 className=''>Loading...</h1>)
}

export default User