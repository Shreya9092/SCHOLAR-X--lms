import React, { useState } from 'react';
import { getAssignments } from '../services/api';

const AdminCourses = () => {
  const [courseData, setCourseData] = useState({ name: "", duration: 3 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await getAssignments();//[span_3](end_span)
      alert("Course (Programme) Created!");
    } catch (err) {
      alert("Error creating course.");
    }
  };

  return (
    <div className="admin-container">
      <h2>Create Programme</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label>Programme Name</label>
          <input type="text" placeholder="e.g., BCA" 
            onChange={(e) => setCourseData({...courseData, name: e.target.value})} required />
        </div>
        <div className="form-group">
          <label>Duration (Years)</label>
          <input type="number" 
            onChange={(e) => setCourseData({...courseData, duration: parseInt(e.target.value)})} required />
        </div>
        <button type="submit" className="btn-lavender">Create Course</button>
      </form>
    </div>
  );
};

export default AdminCourses;