import React,{ useState } from 'react';
import Profile from './components/Profile';
import Login from './components/Login';
import './App.css';

import UserContextProvider from './contect/UserContextProvider';

function App() {

	return (
		<UserContextProvider>
			<Login />
			<Profile />
		</UserContextProvider>
    
       
	);
}

export default App;