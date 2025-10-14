import {useState} from "react";
import {NavLink, Outlet} from "react-router-dom";
import {MailIcon} from "lucide-react";

import {Card, CardContent, CardTitle, CardHeader} from "@/components/ui/card.tsx";


export default function Dashboard() {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Dashboard</CardTitle>
                </CardHeader>

                <CardContent>
                    Hello this is the dashboard page!
                </CardContent>
            </Card>
        </div>
    )
}