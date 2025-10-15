import {create} from "zustand";
import type { User } from "@/store/userStore";
import {mockUsers} from "@/store/userStore.ts";

export type PostType = 'QUESTION' | 'LEARN_REQUEST' | 'DISCUSSION';
export type PostStatus = 'OPEN' | 'RESOLVED' | 'CLOSED';

export interface Post {
    id: string;
    title: string;
    content: string;
    user: User;
    postType: PostType;
    status: PostStatus;
    createdAt: string;
}

interface postStore {
    posts: Post[];
    addPost: (newPost: Post) => void;
    deletePost: (id: string) => void;
    editPost: (id: string, updatedPost: Post) => void;
}

export const mockPosts: Post[] = [
    {
        id: "101",
        title: "Need help understanding Zustand basics",
        content: "Can someone explain how Zustand state works compared to Redux?",
        user: mockUsers[0], // Ivan
        postType: "QUESTION",
        status: "OPEN",
        createdAt: "2025-10-12T10:15:00Z",
    },
    {
        id: "102",
        title: "Looking for a study group for C++",
        content: "Anyone want to form a small study group for C++ assignments?",
        user: mockUsers[1], // Alice
        postType: "LEARN_REQUEST",
        status: "OPEN",
        createdAt: "2025-10-13T14:30:00Z",
    },
    {
        id: "103",
        title: "What’s your favorite VSCode extensions?",
        content:
            "I’m curious what extensions you all use for React + TypeScript development!",
        user: mockUsers[2], // Diego
        postType: "DISCUSSION",
        status: "OPEN",
        createdAt: "2025-10-14T09:00:00Z",
    },
];

export const usePostStore = create<postStore>((set) => ({
    posts: mockPosts,
    addPost: (post) => set((state) => ({
        posts: [...state.posts, post]
    })),

    deletePost: (id) => set((state) => ({
        posts: state.posts.filter((p) => p.id !== id)
    })),

    editPost: (id, updatedPost) => set((state) =>({
        posts: state.posts.map((p) =>
            p.id === id ? { ...p, ...updatedPost } : p
        ),
    })),
}))

