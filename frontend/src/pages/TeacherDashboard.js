import React from 'react';

const TeacherDashboard = () => {
  // Pulling user name for a personalized welcome
  const savedUser = JSON.parse(localStorage.getItem('user'));
  
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: '30px' }}>
        <h1 style={{ color: '#2c3e50', fontSize: '28px', marginBottom: '10px' }}>
          Teacher Overview
        </h1>
        <p style={{ color: '#7f8c8d', fontSize: '16px' }}>
          Welcome back, <strong>{savedUser?.name || 'Instructor'}</strong>! 
          Use the sidebar to manage your classes.
        </p>
      </header>

      <div style={{ 
        background: 'white', 
        padding: '30px', 
        borderRadius: '12px', 
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        border: '1px solid #edf2f7'
      }}>
        <h4 style={{ color: '#34495e', marginBottom: '20px', fontSize: '18px', borderBottom: '2px solid #3498db', display: 'inline-block', paddingBottom: '5px' }}>
          Quick Actions
        </h4>
        
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {['Mark Today\'s Attendance', 'Upload Unit Notes', 'Review Assignments'].map((action, index) => (
            <li key={index} style={{ 
              padding: '15px', 
              borderBottom: '1px solid #f0f4f8', 
              display: 'flex', 
              alignItems: 'center',
              color: '#2d3748',
              fontWeight: '500'
            }}>
              <span style={{ color: '#3498db', marginRight: '15px' }}>➔</span>
              {action}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeacherDashboard;