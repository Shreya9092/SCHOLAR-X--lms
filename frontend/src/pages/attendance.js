import React, { useState } from 'react';
import '../styles/Attendance.css'; 

const AttendancePage = () => {
  // Mock data based on your snippet - you can plug your API here later
  const [students] = useState([
    { id: '69a3fdef550f202f0a3d9d62', name: 'Student 1', status: 'Present' }
  ]);

  return (
    <div style={{ width: '100%' }}>
      {/* Header section matches the card style */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '30px',
        borderBottom: '1px solid #f0f0f0',
        paddingBottom: '20px'
      }}>
        <div>
          <h2 style={{ color: '#9b59b6', margin: 0, fontSize: '26px' }}>Mark Attendance</h2>
          <p style={{ color: '#7f8c8d', margin: '5px 0 0 0' }}>Manage your daily classroom presence</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontWeight: 'bold', color: '#2D2A4E', margin: 0 }}>Date: {new Date().toLocaleDateString()}</p>
          <span style={{ fontSize: '13px', color: '#9b59b6' }}>Total Students: {students.length}</span>
        </div>
      </div>

      {/* The Table - Pure and centered */}
      <div style={{ overflowX: 'auto' }}>
        <table className="attendance-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '2px solid #F0EFFF' }}>
              <th style={{ padding: '15px', color: '#7f8c8d' }}>Student ID</th>
              <th style={{ padding: '15px', color: '#7f8c8d' }}>Current Status</th>
              <th style={{ padding: '15px', color: '#7f8c8d' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} style={{ borderBottom: '1px solid #f9f9f9' }}>
                <td style={{ padding: '15px', fontFamily: 'monospace', fontSize: '13px' }}>{student.id}</td>
                <td style={{ padding: '15px' }}>
                  <span style={{ 
                    background: '#e8f5e9', 
                    color: '#2e7d32', 
                    padding: '6px 14px', 
                    borderRadius: '20px', 
                    fontSize: '12px', 
                    fontWeight: 'bold' 
                  }}>
                    {student.status}
                  </span>
                </td>
                <td style={{ padding: '15px' }}>
                  <select 
                    style={{ 
                      padding: '8px', 
                      borderRadius: '8px', 
                      border: '1px solid #ddd',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                    <option value="Late">Late</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '30px', textAlign: 'right' }}>
        <button 
          className="submit-btn"
          style={{ 
            padding: '12px 30px', 
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          Submit to Cloud
        </button>
      </div>
    </div>
  );
};

export default AttendancePage;