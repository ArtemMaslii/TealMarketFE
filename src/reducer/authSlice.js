import { createSlice } from '@reduxjs/toolkit';
import { createUser, loginUser } from 'actions/userActions';

const initialState = {
	isLoggedIn: false,
	userData: null,
	error: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginSuccess: (state, action) => {
			state.isLoggedIn = true;
			state.userData = action.payload;
		},
		logoutSuccess: (state) => {
			state.isLoggedIn = false;
			state.userData = null;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(createUser.fulfilled, (state, action) => {
			state.isLoggedIn = true;
			state.userData = action.payload;
			state.error = null;
		});
		builder.addCase(createUser.rejected, (state, action) => {
			state.error = action.payload;
			state.isLoggedIn = false;
			state.userData = null;
		});
		builder.addCase(loginUser.fulfilled, (state, action) => {
			console.log(state.userData, state.isLoggedIn, state.error);
			state.isLoggedIn = true;
			state.userData = action.payload;
			state.error = null;
			console.log(state.userData, state.isLoggedIn, state.error);
		});
		builder.addCase(loginUser.rejected, (state, action) => {
			state.error = action.payload;
			state.isLoggedIn = false;
			state.userData = null;
		});
	},
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;
