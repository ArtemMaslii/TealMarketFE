import { createSlice } from '@reduxjs/toolkit';
import { generateImgs } from 'service/generateImages';
import { fetchModel } from 'actions/shopActions';

const initialState = {
	product: {
		id: null,
		name: '',
		price: null,
	},
	loading: false,
	error: null,
	financingPeriod: 36,
	selectedColor: {
		id: null,
		name: '',
	},
	selectedStorage: {
		id: null,
		capacity: '',
	},
	currentImage: '',
	images: [],
};

export const productSlice = createSlice({
	name: 'product',
	initialState: initialState,
	reducers: {
		initializeProduct: (state, action) => {
			const product = action.payload;
			state.selectedColor = product.colors[0];
			state.selectedStorage = product.storages[0];
			state.price = product.price;
			state.images = generateImgs(product.name, product.colors[0]);
			state.currentImage = state.images[0];
		},
		setColor: (state, action) => {
			const { color } = action.payload;
			state.selectedColor = color;
			const colorData = state.product.colors.find((c) => c.name === color);
			if (colorData) {
				state.images = generateImgs(state.product.name, colorData);
				state.currentImage = state.images[0];
			}
		},
		setStorage: (state, action) => {
			const { storage } = action.payload;
			const currentIndex = state.product.storages.findIndex((s) => s.capacity === storage.capacity);
			const previousIndex = state.product.storages.findIndex((s) => s.capacity === state.selectedStorage.capacity);
			state.selectedStorage = storage;
			if (currentIndex !== -1 && previousIndex !== -1) {
				const priceDifference = (currentIndex - previousIndex) * 100;
				state.product.price += priceDifference;
			}
		},
		setImage: (state, action) => {
			const { image } = action.payload;
			state.currentImage = image;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchModel.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchModel.fulfilled, (state, action) => {
				state.loading = false;
				state.product = action.payload;
			})
			.addCase(fetchModel.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export const { initializeProduct, setColor, setStorage, setImage } = productSlice.actions;

export default productSlice.reducer;
