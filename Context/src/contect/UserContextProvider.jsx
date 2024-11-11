import React,{useState} from 'react'
import UserContext from './UserContext';
function UserContextProvider({children}) {
    const [user,setUser] = useState(null);
  return (
    <div>
        <UserContext.Provider value={{user, setUser}}>  
            {/* Accessible All children's 
              access the data and setData by using setUser method. */}
            {children}
        </UserContext.Provider>
    </div>
  )
}

export default UserContextProvider

