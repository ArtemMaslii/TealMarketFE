import { createSlice } from '@reduxjs/toolkit';
import { sendItem, fetchItems, deleteItem } from 'actions/itemActions';

const initialState = {
	items: [],
	error: null,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState: initialState,
	reducers: {
		removeItem: (state, action) => {
			const index = action.payload;
			state.items.splice(index, 1);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(sendItem.fulfilled, (state, action) => {
			state.items = action.payload;
			state.error = null;
		});
		builder.addCase(sendItem.rejected, (state, action) => {
			state.error = action.payload;
			state.items = [];
		});
		builder.addCase(fetchItems.fulfilled, (state, action) => {
			state.items = action.payload;
			state.error = null;
		});
		builder.addCase(fetchItems.rejected, (state, action) => {
			state.error = action.payload;
			state.items = [];
		});
		builder.addCase(deleteItem.fulfilled, (state, action) => {
			const itemId = action.payload;
			state.items = state.items.filter((item) => item.id !== itemId);
			state.error = null;
		});
		builder.addCase(deleteItem.rejected, (state, action) => {
			state.error = action.payload;
		});
	},
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
