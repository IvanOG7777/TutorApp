// src/layouts/AppShell.tsx
import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export default function AppShell() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const items = [
        { label: "Home", to: "/" },
        { label: "Post", to: "/posts" },
        { label: "Ask/Request", to: "/ask" },
        { label: "Profile", to: "/profile" },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            {/* top bar (drawer trigger) */}
            <header className="h-14 border-b flex items-center px-4">
                <Button variant="ghost" className="text-white" onClick={() => setOpen(true)}>Menu</Button>
                <div className="ml-2 font-medium">Student Tutor App</div>
            </header>

            {/* page content */}
            <main className="flex-1 p-4">
                <Outlet /> {/* 👈 all pages render here */}
            </main>

            {/* global drawer */}
            <Drawer open={open} onClose={() => setOpen(false)}>
                <div style={{ width: 250 }}>
                    <List>
                        {items.map((it) => (
                            <ListItemButton
                                key={it.to}
                                component={NavLink}
                                to={it.to}
                                onClick={() => setOpen(false)}
                                selected={location.pathname === it.to}
                            >
                                <ListItemIcon><MailIcon size={18} /></ListItemIcon>
                                <ListItemText primary={it.label} />
                            </ListItemButton>
                        ))}
                    </List>
                </div>
            </Drawer>
        </div>
    );
}
