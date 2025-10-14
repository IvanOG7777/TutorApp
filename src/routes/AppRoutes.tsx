import {lazy, Suspense} from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "@/layouts/MainPage.tsx";

const Home = lazy(() => import("@/pages/Home"));
const Posts = lazy(() => import("@/pages/Posts"));
const Ask = lazy(() => import("@/pages/Ask"));
const Profile = lazy(() => import("@/pages/Profile"));

const router = createBrowserRouter([
    {
        element: <MainLayout/>,
        children: [
            { index: true, element: <Home /> },
            { path: "posts", element: <Posts /> },
            { path: "ask", element: <Ask /> },
            { path: "profile", element: <Profile /> },
        ]
    }
]);

export default function AppRoutes() {
    return (
        <Suspense fallback={<div className="p-4">Loading…</div>}>
            <RouterProvider router={router} />
        </Suspense>
    );
}