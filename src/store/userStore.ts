import {create} from "zustand";

type status = "ACTIVE" | "INACTIVE";

interface address {
    street: string;
    city: string;
    state: string;
    zip: string;
}

interface username {
    firstName: string;
    lastName: string;
}

interface userInfo{
    email: string;
    phoneNumber: string;
    address: address;
}


export interface User {
    id: string;
    name: username;
    userInfo: userInfo;
    profileImageUrl?: string;
    status: status;
}

const mockUsers: User[] = [
    {
        id: '1',
        name: { firstName: "Ivan", lastName: "Argueta" },
        userInfo: {
            email: "ivan@example.com",
            phoneNumber: "555-123-4567",
            address: {
                street: "123 Main St",
                city: "Santa Cruz",
                state: "CA",
                zip: "95064",
            },
        },
        profileImageUrl: "https://i.pravatar.cc/150?img=1",
        status: "ACTIVE",
    },
    {
        id: '2',
        name: { firstName: "Alice", lastName: "Nguyen" },
        userInfo: {
            email: "alice@example.com",
            phoneNumber: "555-987-6543",
            address: {
                street: "42 Oak Ave",
                city: "San Jose",
                state: "CA",
                zip: "95112",
            },
        },
        profileImageUrl: "https://i.pravatar.cc/150?img=5",
        status: "ACTIVE",
    },
    {
        id: '3',
        name: { firstName: "Diego", lastName: "Martinez" },
        userInfo: {
            email: "diego@example.com",
            phoneNumber: "555-555-0000",
            address: {
                street: "77 Bay St",
                city: "San Francisco",
                state: "CA",
                zip: "94105",
            },
        },
        profileImageUrl: "https://i.pravatar.cc/150?img=8",
        status: "INACTIVE",
    },
];

interface userStore {
    users: User[];
    createUser: (newUser: User) => void;
    deleteUser: (id: string) => void;
    editUser: (id: string, updatedUser: User) => void;
}

export const useUserStore = create<userStore>((set, get) => ({

    users: mockUsers,

    createUser: (user) => set((state) => ({
        users: [...state.users, user]
    })),

    deleteUser: (id) => set((state) => ({
        users: state.users.filter((u) => u.id !== id)
    })),

    editUser: (id: string, updatedUser) => set((state) => ({
        users: state.users.map((u) =>
        u.id === id ? {...u, ...updatedUser} : u
        ),
    }))
}))