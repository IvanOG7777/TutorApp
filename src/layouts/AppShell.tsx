// src/layouts/AppShell.tsx
import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {Menu, MailIcon, X} from "lucide-react";

export default function AppShell() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const items = [
        { label: "Home", to: "/dashboard" },
        { label: "Post", to: "/posts" },
        { label: "Ask/Request", to: "/ask" },
        { label: "Profile", to: "/profile" },
    ];

    return (
        <div className="min-h-screen flex">

            <aside className="fixed left-0 top-0 h-screen w-12 border-r bg-background/90 backdrop-blur-sm flex flex-col items-center">
                {/* top-left menu button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="mt-2"
                    onClick={() => setOpen(true)}
                    aria-label="Open menu"
                >
                    <Menu className="h-5 w-5 text-white" />
                </Button>
                {/* you can add more rail icons stacked vertically here */}
            </aside>
            <div className="ml-12 flex-1 flex flex-col">
                {/* optional top bar for page title, etc. */}
                <header className="h-14 border-b flex items-center px-4">
                    <div className="font-medium">Student Tutor App</div>
                </header>

                <main className="flex-1 p-4">
                    <Outlet />
                </main>
            </div>

            {/* DRAWER CONTENT */}
            <Drawer open={open} onClose={() => setOpen(false)}>
                <div style={{ width: 260 }}>
                    <div className="flex items-center justify-between px-3 py-3 border-b">
                        <span className="font-semibold">Navigation</span>
                        <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close menu">
                            <X className="h-5 w-5 text-white" />
                        </Button>
                    </div>
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
