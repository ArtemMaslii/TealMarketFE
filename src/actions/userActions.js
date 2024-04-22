import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createUser = createAsyncThunk('auth/createUser', async (userData, { rejectWithValue }) => {
	try {
		const response = await axios.post('http://localhost:8080/api/v1/user/register', userData);
		return response.data;
	} catch (error) {
		return rejectWithValue(error.response.data);
	}
});

export const loginUser = createAsyncThunk('auth/loginUser', async (userData, { rejectWithValue }) => {
	try {
		const response = await axios.post('http://localhost:8080/api/v1/user/login', userData);
		return response.data;
	} catch (error) {
		if (error.response && error.response.status === 401) {
			throw new Error('Unauthorized');
		} else {
			return rejectWithValue(error.response.data);
		}
	}
});

export const updateUserData = createAsyncThunk('auth/updateUserData', async ({ data, id }, { rejectWithValue }) => {
	try {
		console.log(id, data);
		const response = await axios.patch(`http://localhost:8080/api/v1/user/${id}`, data);
		return response.data;
	} catch (error) {
		return rejectWithValue(error.response.data);
	}
});
