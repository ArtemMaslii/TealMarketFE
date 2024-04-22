import { createSlice } from '@reduxjs/toolkit';
import { createUser, loginUser, updateUserData } from 'actions/userActions';

const initialState = {
	isLoggedIn: false,
	userData: {
		id: null,
		username: '',
		email: '',
		password: '',
		address: {
			country: '',
			city: '',
			street: '',
			postCode: '',
		},
		cart: {
			id: null,
			cartItems: [],
		},
	},
	error: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
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
			state.isLoggedIn = true;
			state.userData = action.payload;
			state.error = null;
		});
		builder.addCase(loginUser.rejected, (state, action) => {
			state.error = action.payload;
			state.isLoggedIn = false;
			state.userData = null;
		});
		builder.addCase(updateUserData.fulfilled, (state, action) => {
			state.isLoggedIn = true;
			state.userData = action.payload;
			state.error = null;
		});
		builder.addCase(updateUserData.rejected, (state, action) => {
			state.error = action.payload;
			state.isLoggedIn = false;
			state.userData = null;
		});
	},
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;
