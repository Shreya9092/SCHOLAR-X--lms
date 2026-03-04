import React, { useState } from 'react';
import { API } from '../services/api';

const TeacherAssignments = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    subjectId: "",
    sectionId: "",
    dueDate: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAssignment(task);
      alert("Assignment Published!");
    } catch (err) {
      alert("Error creating assignment.");
    }
  };

  return (
    <div className="admin-container">
      <h2>Create New Assignment</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <input type="text" placeholder="Assignment Title" 
          onChange={(e) => setTask({...task, title: e.target.value})} required />
        <textarea placeholder="Instructions..." style={{padding: '10px', borderRadius: '8px', border: '1px solid var(--lavender-100)'}}
          onChange={(e) => setTask({...task, description: e.target.value})} required />
        <div className="form-row">
          <input type="text" placeholder="Subject ID" onChange={(e) => setTask({...task, subjectId: e.target.value})} required />
          <input type="date" onChange={(e) => setTask({...task, dueDate: e.target.value})} required />
        </div>
        <button type="submit" className="btn-lavender">Post Assignment</button>
      </form>
    </div>
  );
};

export default TeacherAssignments;