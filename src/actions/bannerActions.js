import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBanners = createAsyncThunk('banners/fetchBanners', async (_, { rejectWithValue }) => {
	try {
		const response = await fetch('localhost:8080/api/v1/banners');
		return await response.json();
	} catch (error) {
		return rejectWithValue(error.message);
	}
});