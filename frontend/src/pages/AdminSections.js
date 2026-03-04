import React, { useState } from 'react';
import { API } from '../services/api';

const AdminSections = () => {
  const [sectionData, setSectionData] = useState({ sectionName: "", courseId: "", semester: 1 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/sections', sectionData); [span_6](start_span)[span_7](start_span)//[span_6](end_span)[span_7](end_span)
      alert("Section Created Successfully!");
    } catch (err) {
      alert("Error: Ensure Course ID is valid.");
    }
  };

  return (
    <div className="admin-container">
      <h2>Add New Section</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label>Section Name</label>
          <input type="text" placeholder="e.g., A" 
            onChange={(e) => setSectionData({...sectionData, sectionName: e.target.value})} required />
        </div>
        <div className="form-group">
          <label>Course ID</label>
          <input type="text" placeholder="Paste the BCA Course ID here" 
            onChange={(e) => setSectionData({...sectionData, courseId: e.target.value})} required />
        </div>
        <button type="submit" className="btn-lavender">Create Section</button>
      </form>
    </div>
  );
};

export default AdminSections;