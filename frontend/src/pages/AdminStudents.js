import React, { useState } from 'react';
import { register } from '../services/api';

const AdminStudents = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    password: "",
    role: "student", // Locked to student for this form
    courseId: "",    // Required by your backend
    sectionId: ""    // Required by your backend
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Hits http://localhost:5000/api/auth/register
      await register(studentData);
      alert("Student Registered Successfully!");
    } catch (err) {
      alert("Registration failed. Check if email exists or IDs are valid.");
    }
  };

  return (
    <div className="admin-container">
      <h2>Register New Student</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="e.g. Rohan Sharma" 
            onChange={(e) => setStudentData({...studentData, name: e.target.value})} required />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="student@university.com" 
              onChange={(e) => setStudentData({...studentData, email: e.target.value})} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Min 6 characters" 
              onChange={(e) => setStudentData({...studentData, password: e.target.value})} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Course ID</label>
            <input type="text" placeholder="Paste Programme ID" 
              onChange={(e) => setStudentData({...studentData, courseId: e.target.value})} required />
          </div>
          <div className="form-group">
            <label>Section ID</label>
            <input type="text" placeholder="Paste Section ID" 
              onChange={(e) => setStudentData({...studentData, sectionId: e.target.value})} required />
          </div>
        </div>

        <button type="submit" className="btn-lavender">Register Student</button>
      </form>
    </div>
  );
};

export default AdminStudents;