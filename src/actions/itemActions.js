import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const sendItem = createAsyncThunk('cart/sendItem', async (cartItem, { rejectWithValue }) => {
	try {
		const response = await axios.post(`http://localhost:8080/api/v1/cartItem`, cartItem);
		if (!response.ok) throw new Error('Failed to fetch models');
		return await response.data;
	} catch (error) {
		return rejectWithValue(error.message);
	}
});

export const fetchItems = createAsyncThunk('cart/fetchItems', async (id, { rejectWithValue }) => {
	try {
		const response = await fetch(`http://localhost:8080/api/v1/cartItem/${id}`);
		if (!response.ok) throw new Error('Failed to fetch models');
		const data = await response.json();
		return data;
	} catch (error) {
		return rejectWithValue(error.message);
	}
});

export const deleteItem = createAsyncThunk('cart/deleteItem', async (id, { rejectWithValue }) => {
	try {
		await axios.delete(`http://localhost:8080/api/v1/cartItem/${id}`);
	} catch (error) {
		return rejectWithValue(error.message);
	}
});
