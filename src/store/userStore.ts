import {create} from "zustand";

type status = "ACTIVE" | "INACTIVE";


interface User {
    id: string;
    name: string;
    email: string;
    profileImageUrl?: string;
    status: status;
}