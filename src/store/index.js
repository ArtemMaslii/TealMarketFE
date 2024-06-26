import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from 'reducer/authSlice';
import shopReducer from 'reducer/shopSlice';
import productReducer from 'reducer/productSlice';
import cartReducer from 'reducer/cartSlice';

const rootReducer = combineReducers({
	auth: authReducer,
	shop: shopReducer,
	product: productReducer,
	cart: cartReducer,
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart', 'auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
