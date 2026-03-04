import React, { useState } from 'react';
import { takeAttendance } from '../services/api'; // Corrected import

const AdminSections = () => {
    const [sectionData, setSectionData] = useState({
        sectionName: '',
        date: '',
        status: 'Present'
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Using the specific function instead of generic API object
            await takeAttendance(sectionData); 
            alert("Attendance submitted successfully!");
        } catch (err) {
            console.error("Submission failed", err);
        }
    };

    return (
        <div className="admin-container">
            <h2>Manage Sections & Attendance</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Section Name" 
                    onChange={(e) => setSectionData({...sectionData, sectionName: e.target.value})} 
                />
                <input 
                    type="date" 
                    onChange={(e) => setSectionData({...sectionData, date: e.target.value})} 
                />
                <button type="submit">Submit Attendance</button>
            </form>
            
            {/* All stray 'span_6', 'span_7', and 'start_span' words have been removed */}
        </div>
    );
};

export default AdminSections;