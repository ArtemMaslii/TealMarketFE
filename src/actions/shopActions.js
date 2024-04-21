import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchModels = createAsyncThunk('shop/fetchModels', async (companyName, { rejectWithValue }) => {
	try {
		const response = await fetch(`http://localhost:8080/api/v1/product/${companyName}`);
		if (!response.ok) throw new Error('Failed to fetch models');
		return await response.json();
	} catch (error) {
		return rejectWithValue(error.message);
	}
});

export const fetchModel = createAsyncThunk('shop/fetchModel', async ({ companyName, id }, { rejectWithValue }) => {
	try {
		const response = await fetch(`http://localhost:8080/api/v1/product/${companyName}/${id}`);
		if (!response.ok) throw new Error('Failed to fetch models');
		return await response.json();
	} catch (error) {
		return rejectWithValue(error.message);
	}
});
