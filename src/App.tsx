import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { increment, decrement, setName } from './redux/slices/counterSlice';
import { getUser } from './redux/slices/userSlice';

function App() {
	const count = useAppSelector((state) => state.counter);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getUser());
	}, []);
	return (
		<div className='App'>
			<header>Counter</header>

			<span>{count}</span>

			<div>
				<button onClick={() => dispatch(increment())}>Increment</button>
				<button onClick={() => dispatch(decrement())}>Decrement</button>
				<button onClick={() => dispatch(setName('jep'))}>Set name</button>
			</div>
		</div>
	);
}

export default App;
