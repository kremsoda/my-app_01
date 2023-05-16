import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: false,
    },
    reducers: {
        logIn(state, action){
            state.user = action.payload;
        },
        logOut(state,action){
            state.user = action.payload;
        }
    }
});

export const {logIn, logOut} = userSlice.actions;
export const userReducer = userSlice.reducer;