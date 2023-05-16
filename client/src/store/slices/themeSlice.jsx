import {createSlice} from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'day'
    },
    reducers: {
        changeTheme(state, action){
            state.theme = action.payload;
        }

    }
});

export const {changeTheme} = themeSlice.actions;
export const themeReducer = themeSlice.reducer;