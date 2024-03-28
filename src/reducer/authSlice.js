import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    userData: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isLoggedIn = true;
            state.userData = action.payload;
        },
        logoutSuccess: (state) => {
            state.isLoggedIn = false;
            state.userData = null;
        }
    }
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;