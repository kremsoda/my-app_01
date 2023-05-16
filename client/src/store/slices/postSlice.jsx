import {createSlice} from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        searchTerm: 'cats',
        images: [],
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        changeImages(state, action) {
            state.images = action.payload;
        }
    }
});

export const {changeSearchTerm, changeImages} = postsSlice.actions;
export const postsReducer = postsSlice.reducer;