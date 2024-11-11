import React, {useState} from 'react';

import UserContext from './UserContext';

const UserContextProvider = ({children}) => {

    const [user,setUser] = useState([]); 
    // Accessible All children's 
    // access the data and setData by using setUser method.
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider


