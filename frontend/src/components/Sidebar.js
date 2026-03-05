import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the user from localStorage to check the role
  const user = JSON.parse(localStorage.getItem('user'));
  const role = user?.role?.toLowerCase();

  // Define menu items for each role
  const teacherLinks = [
    { name: 'Dashboard', path: '/teacher-dashboard', icon: '🏠' },
    { name: 'Attendance', path: '/teacher/attendance', icon: '📝' },
    { name: 'Materials', path: '/teacher/materials', icon: '📚' },
  ];

  const studentLinks = [
    { name: 'Dashboard', path: '/student-dashboard', icon: '🏠' },
    { name: 'Materials', path: '/student/materials', icon: '📚' },
    { name: 'Settings', path: '/student/settings', icon: '⚙️' },
  ];

  // Pick the correct list based on role
  const menuItems = role === 'teacher' ? teacherLinks : studentLinks;

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <div style={{ 
      width: '260px', 
      height: '100vh', 
      background: '#2D2A4E', 
      color: 'white', 
      display: 'flex', 
      flexDirection: 'column', 
      padding: '25px',
      position: 'fixed'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ color: '#BB86FC', fontSize: '24px', margin: 0 }}>Scholar-X</h2>
        <p style={{ fontSize: '12px', color: '#9b59b6', marginTop: '5px' }}>
          {role === 'teacher' ? 'Teacher Portal' : 'Student Portal'}
        </p>
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', marginTop: '20px' }}></div>
      </div>
      
      <div style={{ flex: 1 }}>
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            style={{
              width: '100%',
              padding: '15px',
              marginBottom: '10px',
              background: location.pathname === item.path ? '#4B447A' : 'transparent',
              border: 'none',
              color: 'white',
              textAlign: 'left',
              borderRadius: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              fontSize: '15px'
            }}
          >
            <span style={{ marginRight: '15px' }}>{item.icon}</span>
            {item.name}
          </button>
        ))}
      </div>

      <button 
        onClick={handleLogout}
        style={{ 
          padding: '15px', 
          background: '#FF5252', 
          border: 'none', 
          color: 'white', 
          borderRadius: '12px', 
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;