import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const { user, handleLogout } = useAuth();

  // Navigation config based on the Postman collection roles
  const menuConfig = {
    admin: [
      [span_7](start_span){ name: 'Subjects', path: '/admin/subjects', icon: '📖' }, // POST /api/subjects[span_7](end_span)
      [span_8](start_span){ name: 'Sections', path: '/admin/sections', icon: '🏫' }, // POST /api/sections[span_8](end_span)
      [span_9](start_span){ name: 'Programmes', path: '/admin/programmes', icon: '🎓' }, // POST /api/programmes[span_9](end_span)
    ],
    teacher: [
      [span_10](start_span){ name: 'Dashboard', path: '/teacher-dashboard', icon: '📊' }, // GET /api/dashboard/teacher[span_10](end_span)
      [span_11](start_span){ name: 'Attendance', path: '/teacher/attendance', icon: '📝' }, // POST /api/attendance[span_11](end_span)
      [span_12](start_span){ name: 'Create Assignment', path: '/teacher/assignments', icon: '➕' }, // POST /api/assignments/create[span_12](end_span)
    ],
    student: [
      [span_13](start_span){ name: 'My Dashboard', path: '/student-dashboard', icon: '👤' }, // GET /api/dashboard/student[span_13](end_span)
      [span_14](start_span){ name: 'Materials', path: '/student/materials', icon: '📚' }, // GET /api/materials/:id[span_14](end_span)
      [span_15](start_span){ name: 'Assignments', path: '/student/assignments', icon: '📤' }, // GET /api/assignments/student[span_15](end_span)
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