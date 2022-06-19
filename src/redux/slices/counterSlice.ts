import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',
	initialState: 0,
	reducers: {
		increment: (state: any) => state + 1,
		decrement: (state: any) => state - 1,
		setName: (state, action) => {
			const name = action.payload;
			console.log(name);
		}
	}
});

export const { increment, decrement, setName } = counterSlice.actions;

export default counterSlice.reducer;
