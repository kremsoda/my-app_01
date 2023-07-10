import {createSlice} from '@reduxjs/toolkit';
import jwt_decode from "jwt-decode";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: false,
        token: null,
        decodedToken: null,
    },
    reducers: {
        logIn(state, action) {
            const token = action.payload;
            try {
                const decoded = jwt_decode(token);
 
                state.user = true;
                state.token = token;
                state.decodedToken = decoded;
 
                localStorage.setItem("authToken", token);
 
                setTimeout(() => {
                    localStorage.removeItem("authToken");
                }, 3600000);
                
            } catch (err) {
                state.user = false;
                state.token = null;
                state.decodedToken = null;
            }
        },
 
        logOut(state) {
            state.user = false;
            state.token = null;
            state.decodedToken = null;
            localStorage.removeItem("authToken");
        },
 
    }
});

export const {logIn, logOut} = userSlice.actions;
export const userReducer = userSlice.reducer;