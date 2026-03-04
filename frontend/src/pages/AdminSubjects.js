import React, { useState } from 'react';
import { API } from '../services/api'; 
import '../styles/Admin.css';

const AdminSubjects = () => {
  const [subjectData, setSubjectData] = useState({
    name: "",
    courseId: "",
    semester: 1,
    teacherId: "",
    sectionId: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Hits http://localhost:5000/api/subjects[span_3](end_span)
      await API.post('/subjects', subjectData);
      alert("Subject Created Successfully!");
    } catch (err) {
      alert("Error creating subject. Check console.");
    }
  };

  return (
    <div className="admin-container">
      <h2>Create New Subject</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label>Subject Name</label>
          <input type="text" placeholder="e.g. DATABASE MANAGEMENT SYSTEM" 
            onChange={(e) => setSubjectData({...subjectData, name: e.target.value})} required />
        </div>
        <div className="form-group">
          <label>Course ID</label>
          <input type="text" placeholder="Paste Course ID" 
            onChange={(e) => setSubjectData({...subjectData, courseId: e.target.value})} required />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Semester</label>
            <input type="number" min="1" 
              onChange={(e) => setSubjectData({...subjectData, semester: parseInt(e.target.value)})} required />
          </div>
          <div className="form-group">
            <label>Section ID</label>
            <input type="text" 
              onChange={(e) => setSubjectData({...subjectData, sectionId: e.target.value})} required />
          </div>
        </div>
        <button type="submit" className="btn-lavender">Create Subject</button>
      </form>
    </div>
  );
};

export default AdminSubjects;