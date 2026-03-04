import React, { useState } from 'react';
import { API } from '../services/api';

const Settings = () => {
  const [newName, setNewName] = useState("");

  const handleUpdate = async () => {
    try {
      await API.put('/settings/update', { name: newName }); [span_10](start_span)//[span_10](end_span)
      alert("Profile Updated!");
    } catch (err) {
      alert("Update failed.");
    }
  };

  return (
    <div className="admin-container">
      <h2>Account Settings</h2>
      <div className="form-group" style={{marginTop: '20px'}}>
        <label>Display Name</label>
        <input type="text" placeholder="Enter new name" onChange={(e) => setNewName(e.target.value)} />
        <button onClick={handleUpdate} className="btn-lavender">Save Changes</button>
      </div>
    </div>
  );
};

export default Settings;