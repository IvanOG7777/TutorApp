import {type FormEvent, useState } from 'react';
import { usePostStore } from '../store/postStore';
import { useNavigate } from 'react-router-dom';
import type {PostType} from "../store/postStore";

export default function Ask() {
    const addPost = usePostStore(s => s.addPost);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [postType, setPostType] = useState<PostType>('QUESTION');
    const navigate = useNavigate();

    function submit(e: FormEvent) {
        e.preventDefault();
        if (!title.trim()) return;

        const id = globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);

        addPost ({
            id,
            title,
            content,
            postType,
            authorName: 'Ivan',
            status: 'OPEN',
            createdAt: Date.now().toString()
        })
        navigate('/posts');
    }

    return (
        <form onSubmit={submit} style={{ display: 'grid', gap: 12 }}>
            <h2>Ask a question / Request learning help</h2>
            <label>Title
                <input value={title} onChange={e=>setTitle(e.target.value)} style={{ width: '100%' }} />
            </label>
            <label>Type
                <select value={postType} onChange={e=>setPostType(e.target.value as PostType)}>
                    <option value="QUESTION">Question</option>
                    <option value="LEARN_REQUEST">Learn Request</option>
                    <option value="DISCUSSION">Discussion</option>
                </select>
            </label>
            <label>Details
                <textarea value={content} onChange={e=>setContent(e.target.value)} rows={6} />
            </label>
            <button type="submit">Post</button>
        </form>
    );
}
