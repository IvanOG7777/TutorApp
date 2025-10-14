import {Suspense} from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Ask from "@/pages/Ask.tsx";
import Posts from "@/pages/Posts.tsx";
import Profile from "@/pages/Profile.tsx";
import Dashboard from "@/pages/Dashboard.tsx";
import AppShell from "@/layouts/AppShell.tsx";

// app routes page, we will input new app pages here and link them below within router
// syntax path: "/path" or "/path1/path2", followed by element: <Page/>, element will hold the actual page we created

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppShell />,      // 👈 drawer lives here
        children: [
            { path: "posts", element: <Posts /> },  // "/posts"
            { path: "ask", element: <Ask /> },      // "/ask"
            { path: "profile", element: <Profile /> },
            { path: "dashboard", element: <Dashboard /> },
        ],
    },
]);
// create function and export it to be use in main.tsx

export default function AppRoutes() {
    return (
        <Suspense fallback={<div className="p-4">Loading…</div>}>
            <RouterProvider router={router} />
        </Suspense>
    );
}