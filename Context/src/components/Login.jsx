import React, { useState, useContext } from 'react';
import UserContext from '../contect/UserContext';

// by using useContext extract values from here.
const Login = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const { setUser } = useContext(UserContext);
	const handleSubmit = (event) => {
		// prevent default
		event.preventDefault();
		setUser({ userName, password });
	};
	return (
		<div>
			<input
				type='text'
				value={userName}
				onChange={(e) => setUserName(e.target.value)}
				placeholder='Please Enter User Name'
				style={{ fontSize: '20px' }}
			/>{' '}
			<input
				type='password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder='Please Enter Password'
				style={{ fontSize: '20px' }}
			/>{' '}
			<button onClick={handleSubmit} style={{ border: '2px', outline: '2px' }}>
				submit
			</button>
		</div>
	);
};

export default Login;
