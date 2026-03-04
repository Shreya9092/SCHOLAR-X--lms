import React, { useState } from 'react';
import { takeAttendance } from '../services/api';
import '../styles/Attendance.css';

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState({
    subjectId: '69a3ff56dc96636c329e0b17', // Example ID from your backend
    sectionId: '69a3468a8aac247db2d8a77d', // Example ID from your backend
    date: new Date().toISOString().split('T')[0],
    records: [
      { studentId: '69a3fdef550f202f0a3d9d62', status: 'Present' } // Example Student
    ]
  });

  const handleSubmit = async () => {
    try {
      await takeAttendance(attendanceData);
      alert("Attendance submitted successfully!");
    } catch (err) {
      console.error("Error submitting attendance", err);
    }
  };

  return (
    <div className="attendance-container">
      <header className="page-header">
        <h2>Mark Attendance</h2>
        <p className="text-muted">Date: {attendanceData.date}</p>
      </header>

      <table className="attendance-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.records.map((record, index) => (
            <tr key={record.studentId}>
              <td>{record.studentId}</td>
              <td>
                <select 
                  value={record.status}
                  onChange={(e) => {
                    const newRecords = [...attendanceData.records];
                    newRecords[index].status = e.target.value;
                    setAttendanceData({...attendanceData, records: newRecords});
                  }}
                >
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSubmit} className="btn-lavender mt-4">Submit to Cloud</button>
    </div>
  );
};

export default Attendance;