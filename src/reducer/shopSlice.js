import { createSlice } from '@reduxjs/toolkit';
import { fetchModels } from 'actions/shopActions';

const initialState = {
	models: [],
	loading: false,
	error: null,
};

const shopSlice = createSlice({
	name: 'shop',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchModels.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchModels.fulfilled, (state, action) => {
				state.loading = false;
				state.models = action.payload;
			})
			.addCase(fetchModels.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export default shopSlice.reducer;
