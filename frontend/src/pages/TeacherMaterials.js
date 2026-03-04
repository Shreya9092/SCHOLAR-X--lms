import React, { useState } from 'react';
import { API } from '../services/api';

const TeacherMaterials = () => {
  const [file, setFile] = useState(null);
  const [details, setDetails] = useState({ title: '', description: '', subjectId: '' });

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', details.title);
    formData.append('description', details.description);
    formData.append('subjectId', details.subjectId);

    try {
      await API.post('/materials/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert("Material Uploaded Successfully!");
    } catch (err) {
      alert("Upload failed. Check file size or Subject ID.");
    }
  };

  return (
    <div className="admin-container">
      <h2>Upload Study Material</h2>
      <form onSubmit={handleUpload} className="admin-form">
        <div className="form-group">
          <label>Material Title</label>
          <input type="text" placeholder="e.g. Unit 1: Database Basics" 
            onChange={(e) => setDetails({...details, title: e.target.value})} required />
        </div>
        <div className="form-group">
          <label>Subject ID</label>
          <input type="text" placeholder="Paste the Subject ID" 
            onChange={(e) => setDetails({...details, subjectId: e.target.value})} required />
        </div>
        <div className="form-group">
          <label>Select File (PDF/Docs)</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
        </div>
        <button type="submit" className="btn-lavender">Publish Material</button>
      </form>
    </div>
  );
};

export default TeacherMaterials;