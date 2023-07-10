import {createBrowserRouter} from 'react-router-dom';

import { PrivateLayout, PublicLayout } from '../layouts';
import {HomePage, AboutPage, NotFoundPage, PostPage, PostsPage, ContactPage, BlogPage, LoginPage, RegistrationPage} from '../pages/PublicPages';
import {DashboardPage, ProfilePage, DashboardPostPage} from '../pages/PrivatePages'
import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';

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
        ]
    },
    {
        element: <AuthRoute redirectPath={'/'}/>,
        children: [
            {
                element: <PublicLayout/>,
                children: [
                    {
                        path: '/login',
                        element: <LoginPage/>
                    },
                    {
                        path: '/registration',
                        element: <RegistrationPage/>
                    },
                ]
            }
        ],
    },
    {
        element: <PrivateRoute redirectPath={'/'}/>,
        children: [
            {   
                element: <PrivateLayout/>,
                children: [
                    {
                        path: '/dashboard',
                        element: <DashboardPage/>
                    },
                    {
                        path: '/dashboard/post',
                        element: <DashboardPostPage/>
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