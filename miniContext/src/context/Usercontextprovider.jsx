import React from 'react'
import UserContext from './UserContext'

const Usercontextprovider = ({children}) => {
    const [user, setuser] = React.useState(null)
    return (
        <UserContext.Provider value={{user, setuser}}>
        {children}
        </UserContext.Provider>
    )
}

export default Usercontextprovider
