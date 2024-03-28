import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState: initialState,
	reducers: {
		addItem: (state, action) => {
			state.items.push(action.payload);
		},
		removeItem: (state, action) => {
			const index = action.payload;
			state.items.splice(index, 1);
		},
	},
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
