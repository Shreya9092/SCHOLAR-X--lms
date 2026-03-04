import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const { user, handleLogout } = useAuth();

  // Navigation config based on the Postman collection roles
   const menuConfig = {
    admin: [
      { name: 'Subjects', path: '/admin/subjects', icon: '📖' },
      { name: 'Sections', path: '/admin/sections', icon: '🏫' },
      { name: 'Programmes', path: '/admin/programmes', icon: '🎓' },
    ],
    teacher: [
      { name: 'Dashboard', path: '/teacher-dashboard', icon: '📊' },
      { name: 'Attendance', path: '/teacher/attendance', icon: '📝' },
      { name: 'Create Assignment', path: '/teacher/assignments', icon: '➕' },
    ],
    student: [
      { name: 'My Dashboard', path: '/student-dashboard', icon: '👤' },
      { name: 'Materials', path: '/student/materials', icon: '📚' },
      { name: 'Assignments', path: '/student/assignments', icon: '📤' },
    ]
  };
  const currentMenu = menuConfig[user?.role] || [];

  return (
    <aside className="lms-sidebar">
      <div className="sidebar-logo">Scholar-X</div>
      
      <div className="user-profile-summary">
        <p className="user-name">{user?.name || 'User'}</p>
        <p className="user-role">{user?.role?.toUpperCase()}</p>
      </div>

      <nav className="sidebar-nav">
        {currentMenu.map((item) => (
          <NavLink 
            key={item.path} 
            to={item.path} 
            className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
          >
            <span className="nav-icon">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>

      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;