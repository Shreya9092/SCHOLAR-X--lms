import React, { useEffect, useState } from 'react';
import { getStudentDashboard} from '../services/api';

const StudentDashboard = () => {
  const [data, setData] = useState(null);

 useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await getStudentDashboard();
        setData(res.data);
      } catch (err) {
        console.error("Dashboard load failed");
      }
    };
    fetchDashboard();
  }, []);
  return (
    <div className="admin-container">
      <h2 className="lavender-text">Student Portal</h2>
      <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
        <div className="auth-card">
          <h3>Attendance</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{data?.attendancePercentage || '0'}%</p>
        </div>
        <div className="auth-card">
          <h3>Assignments</h3>
          <p>Pending: {data?.pendingAssignments || '0'}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;