import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import Navbar from './navbar';
import '../styles/Modules.css';

const MainLayout = () => {
  return (
    <div className="lms-container">
      <Sidebar />
      <div className="lms-main-wrapper">
        <Navbar />
        <main className="lms-content">
          <Outlet /> {/* This is where Dashboard or Modules will load */}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;