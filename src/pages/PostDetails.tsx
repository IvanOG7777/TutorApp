import { useParams } from 'react-router-dom';
import { usePostStore } from '../store/postStore';

export default function PostDetail() {
    const { id } = useParams();
    const post = usePostStore(s => s.posts.find(p => p.id === id));
    if (!post) return <p>Post not found.</p>;
    return (
        <article>
            <h2>{post.title}</h2>
            <div style={{ fontSize: 12, opacity: 0.8 }}>
                by {post.authorName} • {new Date(post.createdAt).toLocaleString()} • {post.postType}
            </div>
            <p style={{ marginTop: 12 }}>{post.content}</p>
            {/* TODO: answers, comments, vote UI */}
        </article>
    );
}
