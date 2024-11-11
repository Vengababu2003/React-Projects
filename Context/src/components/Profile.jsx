import React, { useContext } from 'react'
import UserContext from '../contect/UserContext'

const Profile = () => {

    const {user} = useContext(UserContext)
    if(!user) return <h1>Not Logged In</h1>
  return (
		<div>
			<h2>UserName: {user.userName}</h2>
		</div>
  );
}

export default Profile
