import React from 'react';

const TeacherDashboard = () => {
  return (
    <div className="admin-container">
      <h2 className="lavender-text">Teacher Overview</h2>
      <p>Welcome back! Use the sidebar to mark attendance or create assignments.</p>
      <div className="auth-card" style={{ marginTop: '20px' }}>
        <h4>Quick Actions</h4>
        <ul>
          <li>Mark Today's Attendance</li>
          <li>Upload Unit Notes</li>
          <li>Review Assignments</li>
        </ul>
      </div>
    </div>
  );
};

export default TeacherDashboard;