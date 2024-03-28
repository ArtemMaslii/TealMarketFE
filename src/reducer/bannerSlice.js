import { createSlice } from "@reduxjs/toolkit";
import { fetchBanners } from "actions/bannerActions";

const initialState = {
    banners: [],
    loading: false,
    error: null
};

const bannerSlice = createSlice({
    name: "banners",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBanners.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBanners.fulfilled, (state, action) => {
                state.loading = false;
                state.banners = action.payload;
            })
            .addCase(fetchBanners.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
})

export default bannerSlice.reducer;