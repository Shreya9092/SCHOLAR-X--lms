import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import Navbar from './navbar';
import '../styles/Modules.css';
import '../styles/login.css';
import '../styles/Admin.css';
import '../styles/Sidebar.css';

const MainLayout = () => {
  return (
    <div className="admin-container">
        <aside className="sidebar">
            <Sidebar />
        </aside>
        <div className="main-content">
            <Navbar />
            <main className="module-list">
                <Outlet />
            </main>
        </div>
    </div>
);
};

export default MainLayout;