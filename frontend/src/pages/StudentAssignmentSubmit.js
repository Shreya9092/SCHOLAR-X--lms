import React, { useState } from 'react';
import { API } from '../services/api';

const StudentAssignmentSubmit = () => {
  const [file, setFile] = useState(null);
  const [assignmentId, setAssignmentId] = useState(""); // The ID of the task being submitted

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('assignmentId', assignmentId); [span_5](start_span)//[span_5](end_span)
    formData.append('file', file); [span_6](start_span)//[span_6](end_span)
    formData.append('submissionText', "Attached is my work."); [span_7](start_span)//[span_7](end_span)

    try {
      await API.post('/assignments/submit', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert("Assignment Submitted Successfully!");
    } catch (err) {
      alert("Submission failed.");
    }
  };

  return (
    <div className="admin-container">
      <h2>Submit Your Work</h2>
      <form onSubmit={handleUpload} className="admin-form">
        <label>Assignment ID</label>
        <input type="text" placeholder="Enter Task ID" 
          onChange={(e) => setAssignmentId(e.target.value)} required />
        <label>Upload File (PDF/Image)</label>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
        <button type="submit" className="btn-lavender">Upload Submission</button>
      </form>
    </div>
  );
};

export default StudentAssignmentSubmit;