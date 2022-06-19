import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'counter',
	initialState: {},
	reducers: {
		getUser() {},
		setUser(state, action) {
			console.log(action.payload);

			const userData = action.payload;
			return { ...state, ...userData };
		}
	}
});

export const { setUser, getUser } = userSlice.actions;

export default userSlice.reducer;
