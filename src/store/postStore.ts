import {create} from "zustand";
import type {User} from "./userStore.ts";

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

export const usePostStore = create<postStore>((set) => ({
    posts: [],
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

