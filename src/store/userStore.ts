import {create} from "zustand";

type status = "ACTIVE" | "INACTIVE";

interface username {
    firstName: string;
    lastName: string;
    middleName?: string;
}


interface User {
    id: string;
    name: username;
    email: string;
    profileImageUrl?: string;
    status: status;
}