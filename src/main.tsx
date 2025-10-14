import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "@/routes/AppRoutes";
import "@/index.css";

// main.jsx which hold our actual app routes page <AppRoutes/>
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>
);
