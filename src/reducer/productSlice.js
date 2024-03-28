import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	financingPeriod: 36,
	selectedColor: "",
	selectedStorage: "",
	currentImage: "",
	images: [],
	price: 0,
	productDetails: {},
};

export const productSlice = createSlice({
	name: "product",
	initialState: initialState,
	reducers: {
		initializeProduct: (state, action) => {
			const { product, price } = action.payload;
			state.productDetails = product;
			state.selectedColor = product.colors[0];
			state.selectedStorage = product.storageSpaces[0];
			state.price = price;
			state.images = product.generateImageUrls(product.colors[0]);
			state.currentImage = state.images[0];
		},
		setColor: (state, action) => {
			const { color } = action.payload;
			state.selectedColor = color;
			if (state.productDetails.colors.includes(color)) {
				state.images = state.productDetails.generateImageUrls(color);
				state.currentImage = state.images[0];
			}
		},
		setStorage: (state, action) => {
			const { storage } = action.payload;
			state.selectedStorage = storage;
			const index = state.productDetails.storageSpaces.indexOf(storage);
			if (index !== -1) {
				state.price = state.productDetails.price + index * 100;
			}
		},
		setImage: (state, action) => {
			const { image } = action.payload;
			state.currentImage = image;
		},
	},
});

export const { initializeProduct, setColor, setStorage, setImage } = productSlice.actions;

export default productSlice.reducer;
