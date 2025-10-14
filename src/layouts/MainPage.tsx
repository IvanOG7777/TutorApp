import {useState} from "react";
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import {MailIcon, Menu} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

import {ListItem, List, Drawer, ListItemText, ListItemIcon, ListItemButton} from "@mui/material";

// function NavItem({
//                      to,
//                      label,
//                      onClick,
//                  }: {
//     to: string,
//     label: string,
//     onClick?: () => void,
// }) {
//     return (
//         <NavLink
//             to={to}
//             onClick={onClick}
//             className={({isActive}) =>
//                 [
//                     "flex items-center gap-2 rounded-lg px-3 py-2 text-sm",
//                     "transition-colors hover:bg-muted",
//                     isActive ? "bg-muted font-medium" : "text-muted-foreground",
//                 ].join(" ")
//             }
//         >
//             {label}
//         </NavLink>
//     );
// }

export default function MainLayout() {

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const items = [
        { label: "Home", to: "/" },
        { label: "Post", to: "/posts" },
        { label: "Ask/Request", to: "/ask" },
        { label: "Profile", to: "/profile" },
    ];

    const list = () => (
        <div style={{ width: 250 }}>
            <List>
                {items.map((item) => (
                    <ListItemButton
                        key={item.to}
                        component={NavLink}     // 👈 turn it into a link
                        to={item.to}
                        onClick={() => setOpen(false)}  // close drawer after click
                        selected={location.pathname === item.to} // highlight active
                        sx={{ "&.active": { bgcolor: "action.selected" } }}
                    >
                        <ListItemIcon>
                            <MailIcon size={18} />
                        </ListItemIcon>
                        <ListItemText primary={item.label} />
                    </ListItemButton>
                ))}
            </List>
        </div>
    );

    return (

        <div>
            <Button onClick={() => setOpen(true)}>Open Drawer</Button>
            <main className="flex-1 p-4">
                <Outlet />   {/* 👈 this is what shows /ask, /posts, etc. */}
            </main>
            <Drawer open={open} onClose={() => setOpen(false)}>
                {list()}
            </Drawer>
        </div>

    )
}