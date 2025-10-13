import { Link } from 'react-router-dom';
import { usePostStore } from '../store/postStore';

export default function Posts() {
    const posts = usePostStore((s) => s.posts);
    return (
        <div>
            <h2>Feed</h2>
            <ul style={{ display: 'grid', gap: 12, padding: 0, listStyle: 'none' }}>
                {posts.map(p => (
                    <li key={p.id} style={{ border: '1px solid #ddd', borderRadius: 8, padding: 12 }}>
                        <Link to={`/posts/${p.id}`}><strong>{p.title}</strong></Link>
                        <div style={{ fontSize: 12, opacity: 0.8 }}>
                            by {p.authorName} • {new Date(p.createdAt).toLocaleString()} • {p.postType}
                        </div>
                        <p>{p.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
