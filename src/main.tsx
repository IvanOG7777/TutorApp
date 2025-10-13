import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from "./layouts/MainPage.tsx";
import Home from './pages/Home';
import Posts from './pages/Posts';
import PostDetail from "./pages/PostDetails.tsx";
import Ask from './pages/Ask';
import Profile from './pages/Profile';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'posts', element: <Posts /> },
            { path: 'posts/:id', element: <PostDetail /> },
            { path: 'ask', element: <Ask /> },
            { path: 'profile', element: <Profile /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
