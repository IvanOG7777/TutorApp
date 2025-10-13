import { Link, Outlet } from 'react-router-dom';

export default function MainLayout() {
    return (
        <div style={{ maxWidth: 960, margin: '0 auto', padding: 16 }}>
            <header style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 24 }}>
                <h1 style={{ marginRight: 'auto' }}><Link to="/">Tutor App</Link></h1>
                <nav style={{ display: 'flex', gap: 12 }}>
                    <Link to="/posts">Feed</Link>
                    <Link to="/ask">Ask/Request</Link>
                    <Link to="/profile">Profile</Link>
                </nav>
            </header>
            <Outlet />
        </div>
    );
}
