import {createSlice} from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        searchTerm: 'cats',
        images: [],
        myPosts: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        changeImages(state, action) {
            state.images = action.payload;
        },
        setMyPosts(state, action) {
            state.myPosts = action.payload;
        },
        deletePost(state, action) {
            state.myPosts = state.myPosts.filter(post => post.id !== action.payload);
        }
    }
});

export const {changeSearchTerm, changeImages, setMyPosts, deletePost} = postsSlice.actions;
export const postsReducer = postsSlice.reducer;