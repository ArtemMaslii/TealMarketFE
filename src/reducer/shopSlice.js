import { createSlice } from '@reduxjs/toolkit';
import { fetchModels, fetchFilters } from 'actions/shopActions';

const initialState = {
	filters: [],
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
			.addCase(fetchFilters.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchFilters.fulfilled, (state, action) => {
				state.loading = false;
				state.filters = action.payload;
			})
			.addCase(fetchFilters.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
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
