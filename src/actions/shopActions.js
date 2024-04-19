import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFilters = createAsyncThunk('shop/fetchFilters', async (companyName, { rejectWithValue }) => {
	try {
		const response = await fetch(`localhost:8080/api/v1/filters/${companyName}`);
		if (!response.ok) throw new Error('Failed to fetch filters');
		return await response.json();
	} catch (error) {
		return rejectWithValue(error.message);
	}
});

export const fetchModels = createAsyncThunk('shop/fetchModels', async (companyName, { rejectWithValue }) => {
	try {
		const response = await fetch(`http://localhost:8080/api/v1/product/${companyName}`);
		if (!response.ok) throw new Error('Failed to fetch models');
		return await response.json();
	} catch (error) {
		return rejectWithValue(error.message);
	}
});
