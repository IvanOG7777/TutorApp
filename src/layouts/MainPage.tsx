import {useState} from "react";
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import {Menu} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

function NavItem({
                     to,
                     label,
                     onClick,
                 }: {
    to: string,
    label: string,
    onClick?: () => void,
}) {
    return (
        <NavLink
            to={to}
            onClick={onClick}
            className={({isActive}) =>
                [
                    "flex items-center gap-2 rounded-lg px-3 py-2 text-sm",
                    "transition-colors hover:bg-muted",
                    isActive ? "bg-muted font-medium" : "text-muted-foreground",
                ].join(" ")
            }
        >
            {label}
        </NavLink>
    );
}

export default function MainPage() {

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="flex">
                <aside className="hidden md:flex w-64 shrink-0 border-r bg-card/50">
                    <nav className="flex h-screen flex-col gap-2 p-4">
                        <div className="mb-2 px-2">
                            <span className="text-lg font-semibold">Student Tutor App</span>
                        </div>

                        <NavItem to="/posts" label="Feed"/>
                        <NavItem to="/ask" label="Ask / Request"/>
                        <NavItem to="/profile" label="Profile"/>

                        <div className="mt-auto pt-2 border-t">
                            <Button
                                variant="secondary"
                                className="w-full text-white"
                                onClick={() => navigate("/ask")}
                            >
                                New Post
                            </Button>
                        </div>
                    </nav>
                </aside>

                <div className="flex min-h-screen flex-1 flex-col">
                    {/* Top bar */}
                    <header className="flex h-14 items-center gap-3 border-b px-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden text-white"
                            onClick={() => setOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu className="h-5 w-5" />
                        </Button>
                        <div className="font-medium">Dashboard</div>

                        <div className="ml-auto flex items-center gap-2">
                            <Button className="text-white" variant="outline" onClick={() => navigate("/posts")}>
                                Feed
                            </Button>
                            <Button className="text-white" onClick={() => navigate("/ask")}>Ask</Button>
                        </div>
                    </header>

                    {/* Page content */}
                    <main className="flex-1 p-4">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    )
}