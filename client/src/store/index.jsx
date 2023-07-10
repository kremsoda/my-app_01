import {configureStore} from '@reduxjs/toolkit';
import { postsReducer, changeSearchTerm, changeImages, setMyPosts, deletePost } from "./slices/postSlice";
import { themeReducer, changeTheme } from './slices/themeSlice';
import { userReducer, logIn, logOut } from './slices/userSlice';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        theme: themeReducer,
        user: userReducer
    }
});

store.dispatch({
    type: logIn.type,
    payload: localStorage.getItem("authToken") || null,
});
 

export {store, changeSearchTerm, changeImages, changeTheme, logIn, logOut, setMyPosts, deletePost};