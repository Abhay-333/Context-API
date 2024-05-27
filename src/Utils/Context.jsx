import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'



export const UserContextData = createContext(null)

const Context = (props) => {

    const [user, setUser] = useState([])

    const getUser = async () => {
        const { data } = await axios.get(`https://fakestoreapi.com/users`)
        setUser(data)
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <UserContextData.Provider value={[user, setUser]}>
            {props.children}
        </UserContextData.Provider>

    )
}

export default Context