import {create} from "zustand";

export type PostType = 'QUESTION' | 'LEARN_REQUEST' | 'DISCUSSION';
export type PostStatus = 'OPEN' | 'RESOLVED' | 'CLOSED';

export interface Post {
    id: string;
    title: string;
    content: string;
    authorName: string;
    postType: PostType;
    status: PostStatus;
    createdAt: string;
}

interface PostStore {
    posts: Post[];
    addPost: (newPost: Post) => void;
    deletePost: (id: string) => void;
    editPost: (id: string, updatedPost: Post) => void;
}

export const usePostStore = create<PostStore>((set) => ({
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

