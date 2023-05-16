import {configureStore} from '@reduxjs/toolkit';
import { postsReducer, changeSearchTerm, changeImages } from "./slices/postSlice";
import { themeReducer, changeTheme } from './slices/themeSlice';
import { userReducer, logIn, logOut } from './slices/userSlice';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        theme: themeReducer,
        user: userReducer
    }
});

export {store, changeSearchTerm, changeImages, changeTheme, logIn, logOut};