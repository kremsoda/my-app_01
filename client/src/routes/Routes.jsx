import {createBrowserRouter} from 'react-router-dom';

import { PrivateLayout, PublicLayout } from '../layouts';
import {HomePage, AboutPage, NotFoundPage, PostPage, PostsPage, ContactPage, BlogPage, LoginPage, RegistrationPage} from '../pages/PublicPages';
import {DashboardPage, ProfilePage} from '../pages/PrivatePages'
import AuthRoute from './AuthRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "/about",
                element: <AboutPage/>
            },
            {
                path: "/posts",
                element: <PostsPage/>
            },
            {
                path: "/posts/:id",
                element: <PostPage/>
            },
            {
                path: '*',
                element: <NotFoundPage/>
            },
            {
                path: '/contact',
                element: <ContactPage/>
            },
            {
                path: '/blog',
                element: <BlogPage/>
            },
            {
                path: '/login',
                element: <LoginPage/>
            },
            {
                path: '/registration',
                element: <RegistrationPage/>
            },
        ]
    },
    {
        element: <AuthRoute redirectPath={'/'}/>,
        children: [
            {   
                path: '/dashboard',
                element: <PrivateLayout/>,
                children: [
                    {
                        index: true,
                        element: <DashboardPage/>
                    },
                    {
                        path: '/dashboard/profile',
                        element: <ProfilePage/>
                    }
                ]
            }
        ]
    }
]);