import React, { useState } from 'react';
import { createAssignment } from '../services/api';
import '../styles/Attendance.css'; 

const TeacherMaterials = () => {
  const [file, setFile] = useState(null);
  const [details, setDetails] = useState({ title: '', subjectId: '' });

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', details.title);
    formData.append('subjectId', details.subjectId);

    try {
      await createAssignment(formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert("Material Uploaded successfully!");
    } catch (err) {
      alert("Upload failed. Check the console.");
    }
  };

  return (
    <div className="attendance-page-container">
      <div className="attendance-card">
        <h2 className="lavender-text">Upload Study Material</h2>
        <p style={{color: '#666', marginBottom: '20px'}}>Add new resources for your class</p>
        
        <form onSubmit={handleUpload}>
          <input 
            type="text" 
            className="login-input" 
            placeholder="Material Title (e.g. Chapter 1 Notes)" 
            onChange={(e) => setDetails({...details, title: e.target.value})} 
            required 
          />
          <input 
            type="text" 
            className="login-input" 
            placeholder="Subject ID" 
            style={{ marginTop: '15px' }}
            onChange={(e) => setDetails({...details, subjectId: e.target.value})} 
            required 
          />
          <div style={{ 
            margin: '20px 0', 
            padding: '20px', 
            border: '2px dashed #9b59b6', 
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
          </div>
          <button type="submit" className="submit-btn" style={{ width: '100%' }}>
            Publish Material
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeacherMaterials;